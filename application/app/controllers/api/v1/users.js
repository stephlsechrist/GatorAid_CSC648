const db = global.db;
const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {

  router.post('/login', async (req, res) => {
    const user = await db.User.findOne({
        where: {
          username: req.body.username,
          password: db.User.getHashedPassword(req.body.password),
          isAdmin: false
        }
      });
    if (user) {
      res.json({user: user, token: user.createAPIToken()});
    } else {
      res.status(400).json({msg: 'Invalid username or password'});
    }
  });

  router.get('/me', async (req, res) => {
    const user = await db.User.findOne({
      where: {
       id: req.user.id
      }
    });
    if (user) {
      res.json({user: user, token: user.createAPIToken()});
    } else {
      res.status(400).json({msg: 'User not found'});
    }
  });

  router.post('/signup', async (req, res) => {
    const isAlreadyExist = await db.User.count({
      where: {[Op.or]: [{email: req.body.email}, {username: req.body.username}]}
    });
    if (isAlreadyExist) {
      res.status(400).json({msg: 'Email or username already exists'});
    } else {
      req.body.password = db.User.getHashedPassword(req.body.password);
      const user = await db.User.create(req.body);
      res.json({user: user, token: user.createAPIToken()});
    }
  });

  router.get('/items', async (req, res) => {
    const where = {userId: req.user.id};
    const items = await db.Item.findAll({
      where: where,
      order: [['createdAt', 'DESC']]
    });
    res.json(items);
  });

  router.post('/admin/login', async (req, res) => {
    const user = await db.User.findOne({
      where: {
        username: req.body.username,
        password: db.User.getHashedPassword(req.body.password),
        isAdmin: true
      }
    });
    if (user) {
      res.json({user: user, token: user.createAPIToken()});
    } else {
      res.status(400).json({msg: 'Invalid username or password'});
    }
  });

  router.post('/forgot', async (req, res) => {
    const user = await db.User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (user) {
      let pass =  Math.floor(100000000 + Math.random() * 9000) + "";
      let passHash = db.User.getHashedPassword(pass);
      await db.User.update({password:passHash }, {where: {id: user.id}});
      global.mailer.sendForgotEmail({
        username: user.username,
        email: user.email,
        password: pass
      });
    };
    res.json({});
  });

  router.post('/change', async (req, res) => {
    const user = await db.User.findOne({where: {
        id: req.user.id,
        password: db.User.getHashedPassword(req.body.currentPassword)
      }});
    if(user) {
      const hash = db.User.getHashedPassword(req.body.newPassword);
      await db.User.update({password:hash }, {where: {id: user.id}});
      res.json({msg: 'Password Changed'});
    } else {
      res.status(400).json({msg: 'Invalid current password'});
    }
  });
};

const db = global.db;
const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {

  router.get('/', async (req, res) => {
    let order = [['createdAt', 'DESC']];
    if (req.query.sort) {
      order = [[req.query.sort, 'DESC']];
    }
    const msgs = await db.Message.findAll({
      where: {[Op.or]: [{senderId: req.user.id}, {receiverId: req.user.id}]},
      include: [{
        model: db.Item
      }],
      order: order
    });
    res.json(msgs);
  });

  router.post('/', async (req, res) => {
    req.body.senderId =  req.body.senderId  || req.user.id;
    req.body.status =  req.body.status || 'pending';
    const msg = await db.Message.create(req.body);
    if(req.body.status == 'sold') {
      await db.Item.update({isActive: false}, {where: {id: req.body.itemId}});
    }
    res.json(msg);
  });

  router.put('/:id', async (req, res) => {
    await db.Message.update(req.body, {where: {id: req.params.id}});
    const msg = await db.Message.findOne({where: { id: req.params.id}});
    res.json(msg);
  });
};

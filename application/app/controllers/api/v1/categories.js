const db = global.db;


module.exports = function (router) {

  router.get('/', async (req, res) => {
    const categories = await db.Category.findAll();
    res.json(categories);
  });
};

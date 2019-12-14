const path = require('path');
const fs = require('fs');

module.exports = function (router) {

  router.post('/api/upload', function (req, res) {
    const fileExe = req.files.file.name.split('.')[1];
    const fileName = `${new Date().getTime()}.${fileExe}`;
    fs.copyFile(req.files.file.path, './files/'+fileName, function(err) {
      if (err) {
        res.status(400).json(err);
      } else
        res.json({fileName: `/files/${fileName}` });
    });
  });

  router.get('/about-us', function(req, res) {
    res.render(path.join(__dirname, '../../views', 'about-us'));
  });

  router.get('/contact-us', function(req, res) {
    res.render(path.join(__dirname, '../../views', 'contact-us'));
  });

  router.get('/Steph', function(req, res) {
    res.render(path.join(__dirname, '../../views', 'Steph'));
  });

  router.get('/Nikhil', function(req, res) {
    res.render(path.join(__dirname, '../../views', 'Nikhil'));
  });

  router.get('/Nayan', function(req, res) {
    res.render(path.join(__dirname, '../../views', 'Nayan'));
  });

  router.get('/Jackie', function(req, res) {
    res.render(path.join(__dirname, '../../views', 'Jackie'));
  });

  router.get('/George', function(req, res) {
    res.render(path.join(__dirname, '../../views', 'George'));
  });

  router.get('/Ali', function(req, res) {
    res.render(path.join(__dirname, '../../views', 'Ali'));
  });

  router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
  });

};

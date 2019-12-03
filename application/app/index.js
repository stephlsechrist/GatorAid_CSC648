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


  router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
  });

};

const express = require('express');
const router = express.Router();

router.get('/upload', (req, res) => {
   imgModel.find({}, (err, items) => {
       if (err) {
          console.log(err);
          res.status(500).send('An error occurred', err);
       }
       else {
          res.render('index', { items: items });
       }
   });
});
app.post('/upload', upload.single('previw'), (req, res, next) => {
 
   const obj = {
       name: req.body.name,
       desc: req.body.desc,
       img: {
           data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
           contentType: 'image/png'
       }
   }
   imgModel.create(obj, (err, item) => {
       if (err) {
           console.log(err);
       }
       else {
           // item.save();
           res.redirect('/');
       }
   });
});
module.exports = router;
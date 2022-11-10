const express = require('express');
const router = express.Router();
const multer  = require("multer");
// const ArticleModel = require('./models/article');


const fileFilter = (req, file, cb) => {
  
   if(file.mimetype === "image/png" || 
   file.mimetype === "image/jpg"|| 
   file.mimetype === "image/jpeg"){
       cb(null, true);
   }
   else{
       cb(null, false);
   }
};

router.get('/formadd', (req, res) => {
   res.render('formadd');
});


//  из формы
router.post('/uploads', async (req, res, next) => {
   // let filedata = req.file;
   // console.log('filedata_uploads',filedata);
   // if(!filedata)
   //     res.send("Ошибка при загрузке файла");
   // else
   //     res.send("Файл загружен");
       
   // const model = new ArticleModel({
   //    zagolovki: req.body.,
   //    keywords:'',
   //    article:'',
   //    autor: '',
   // });
   // const doc = await model.save();
console.log(req.body);
console.log('form router work')
res.json('ok.form up')
});
// res.render('formadd', {title: 'Express'});
// module.exports = router;

// //пoиск в бд
// router.get('/', async (req, res, next) => {
//    const doc = await ArticleModel.find();
// });

module.exports = router;
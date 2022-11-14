const express = require('express');
const router = express.Router();
const multer  = require("multer");
const path = require('path');
const ArticleModel = require('../models/article');
const ImageModel = require('../models/image');

//
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../public/uploads/'));
   },
   filename: (req, file, cb) => {
      cb(null, file.originalname + '-' + Date.now());
   }
});
//фильтр для мультера
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

//const uploadImage = upload.single('image');
// app.use(multer({storage:storageConfig}).single("filedata"));

//аплоад мультера
const upload = multer({
   storage: storage,
   limits: { fileSize: 1024 * 1024 * 5},
   fileFilter: fileFilter
});

//пoиск в бд
// router.get('/', async (req, res, next) => {
//    const doc = await ArticleModel.find();
//    // res.render
// });

//отдать форму еджс
router.get('/form', (req, res) => {
   res.render('form');
});


//  из формы
router.post('/uploads', upload.single('previw'), async (req, res, next) => {

   let filedata = req.file;
   if(!filedata)
       res.send("Ошибка при загрузке файла");
   else
       res.send("Файл загружен");

   const init = async () => {
      console.log('запись в модель артикл');    
      const doc = await ArticleModel.create({
         zagolovok: req.body.zagolovok,
         keywords: req.body.keywords,
         article: req.body.content,
         price: req.body.price
      }); 
   }   
   init();
   console.log(req.body);
   console.log('formaddrouter work')
   // res.json('ok.form up')

   // res.render('formadd', {title: 'Express'});
});

///////////////////////////////////////////////////////////////


// app.post("/upload", function (req, res, next) {
 
//    let filedata = req.file;
//    if(!filedata)
//        res.send("Ошибка при загрузке файла");
//    else
//        res.send("Файл загружен");
// });
// //const storage = multer.memoryStorage();

module.exports = router;
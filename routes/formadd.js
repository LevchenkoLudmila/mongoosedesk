const express = require('express');
const router = express.Router();
const multer  = require("multer");
const path = require('path');
const ArticleModel = require('../models/article');

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

//---------аплоад мультера------//
const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5}, fileFilter: fileFilter });

//пoиск в бд
// router.get('/', async (req, res, next) => {
//    const doc = await ArticleModel.find();
//    // res.render();
// });

//--------отдать форму еджс---------//
router.get('/form', (req, res) => {
   res.render('form');
});

//---------- из формы-----------//
router.post('/uploads', upload.none(), async (req, res, next) => {
   const { zagolovok, keywords, content, price } = req.body;
   //загрузка файла
   // let filedata = req.file;
   // if(!filedata)
   //     res.send("Ошибка при загрузке файла");
   // else
   //     res.send("Файл загружен");

   const init = async () => {
      const doc = await ArticleModel.create({
         zagolovok: zagolovok,
         keywords: keywords,
         article: content,
         price: price
      }); 
   }   

   init();

   const articles = async () => {
      const doc = await ArticleModel.find({}); //все статьи
      console.log('doc:', doc);
      return doc;
   };

   articles();

   console.log('запись в роуте forma add в модель артикл');
   console.log('formaddrouter work')

   res.json(articles);

  
});

module.exports = router;
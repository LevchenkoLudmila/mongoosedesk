const express = require('express');
const router = express.Router();

router.get('/formadd', (req, res) => {
   res.render('formadd');
});

// const ArticleModel = require('./models/article');
// //запись в бд из формы
// router.get('/', async (req, res, next) => {
//    const model = new ArticleModel({
//       zagolovki: '',
//       keywords:'',
//       article:'',
//       autor: '',
//    });
//    const doc = await model.save();
// });
// res.render('fofmadd', {title: 'Express'});
// module.exports = router;
// //пщиск в бд
// router.get('/', async (req, res, next) => {
//    const doc = await ArticleModel.find();
// });
module.exports = router;
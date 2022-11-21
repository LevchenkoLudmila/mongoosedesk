const express = require('express');
const router = express.Router();
const db = require('../bd/bd');
const multer  = require("multer");
const ArticleModel = require('../models/article');


router.get('/', async (req, res) => {
   // const articles = await ArticleModel.find({});
   const doc = await ArticleModel.find({}); //все статьи
   // console.log(doc);
   res.render('index', {doc: doc});

});

router.get('/:id');

router.post('/article', async(req, res) => {

   const doc = await ArticleModel.find({}); //все статьи
   // console.log('doc:', doc);
   res.json(doc);
});

// server.post('/', async (req, res) => {
//    const bookList = await BookModel.find({},).populate('ganre');
//    console.log(bookList);
//    res.send(JSON.stringify(bookList));
// });
// server.get('/comment', async (req, res) => {
//    const bookList = await BookModel.find({},'name').exec();
//    res.send(JSON.stringify(bookList));
// });

// server.get('/', async (req, res) => {
//    const ganreList = await GanreModel.find({},'ganre').exec();
//    res.send(JSON.stringify(ganreList));
// });

// server.post('/formarticle', uploads.none(), async (req, res) => {

//    const { data } = req.body;
   
//    const init = async () => {
//       const doc = await ArticleModel.create({
//          zagolovki:"data",
//          keywords:"data",
//          article:"data",
//          autor:"data",
//          rating:"data",
//          commentId:"data",
//       });
//       console.log(doc);
//    };
//    init();
// });

// server.post('/sortkeywords', uploads.none(), async (req, res) => {
//    const Model = req.body.select;
//    const select = async () => {
//       const doc = await ArticleModel.find({}).sort({"keywords": 1 });
//       console.log(doc);
//    };
//    select()
//    res.send('Записано');

// });

// server.post('/comment', uploads.none(), async function(req, res){
//    const bookId = req.body.select;
//    const comment = req.body.comment;
//    const doc = await CommentModel.create({content: comment});
//    const bookUpdate = await BookModel.updateOne[(
//       {_id: bookId},
//       {
//          $push:{ comments: doc.id}
//       })];

//    //console.log(bookUpdate);
//    console.log(doc);
//    console.log(doc.id);
//    res.send('Записано');

// });

// const init = async() => {
//    console.log('kk');
//    const docGanre = await GanreModel.create({ganre: req.body.ganre});
//    const ganrId = docGanre.id;
//    const doc = await BookModel.create({
//       name: req.body.bookname,
//       ganre: ganrId,
//    });
//    console.log(doc);
//    console.log(docGanre);
// }
// init();
module.exports = router;
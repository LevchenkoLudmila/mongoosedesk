const express = require('express');
const multer  = require('multer');
const homeRoutes = require('./routes/homerout');
const newArticleRoutes = require('./routes/newarticle');
const formAddRoutes = require('./routes/formadd');

const storage = multer.memoryStorage();
const uploads = multer({storage});

const server = express();
const db = require('./bd/bd');

const CommentModel = require('./models/comment');
const ArticleModel = require('./models/article');

server.use(express.static('./public'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(homeRoutes);
server.use(newArticleRoutes);
server.use(formAddRoutes);

server.set('view engine', 'ejs');
server.set('views', './views');


server.listen(3000);

server.get('/', (req, res) => {
   res.render('index');
});
server.get('/form', (req, res) => {
   res.render('formadd');
});
server.get('/article', (req, res) => {
   res.render('article');
});

server.post('/', async (req, res) => {
   const bookList = await BookModel.find({},).populate('ganre');
   console.log(bookList);
   res.send(JSON.stringify(bookList));
});
//server.post('/', async (req, res) => {

//    console.log(req.body);
// });
// server.get('/comment', async (req, res) => {
//    const bookList = await BookModel.find({},'name').exec();
//    res.send(JSON.stringify(bookList));
// });

server.get('/', async (req, res) => {
   const ganreList = await GanreModel.find({},'ganre').exec();
   res.send(JSON.stringify(ganreList));
});

server.post('/formarticle', uploads.none(), async (req, res) => {

   const { data } = req.body;
   
   const init = async () => {
      const doc = await ArticleModel.create({
         zagolovki:"data",
         keywords:"data",
         article:"data",
         autor:"data",
         rating:"data",
         commentId:"data",
      });
      console.log(doc);
   };
   init();
});

server.post('/sortkeywords', uploads.none(), async (req, res) => {
   const Model = req.body.select;
   const select = async () => {
      const doc = await ArticleModel.find({}).sort({"keywords": 1 });
      console.log(doc);
   };
   select()
   res.send('Записано');

});

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
//       comment:[],
//    });
//    console.log(doc);
//    console.log(docGanre);
// }
// init();

db.once('open', () => {
   console.log('Connect to db');
});

db.once('close', () => {
   console.log('Close to connect to db');
});

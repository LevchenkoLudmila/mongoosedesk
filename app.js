const express = require('express');

//роуты
const homeRoutes = require('./routes/homerout');
const newArticleRoutes = require('./routes/newarticle');
const formAddRoutes = require('./routes/formadd');

const multer  = require('multer');
//const storage = multer.memoryStorage();
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});
const upload = multer({storage});
//сервер
const server = express();
//бд
const db = require('./bd/bd');
//модели
const CommentModel = require('./models/comment');
const ArticleModel = require('./models/article');
const AutorModel = require('./models/autor');
const ImageModel = require('./models/image');

//server.use(multer({storage:storageConfig}).single("filedata"));
server.use(express.static('./public'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(homeRoutes);
server.use(newArticleRoutes);
server.use(formAddRoutes);

server.set('view engine', 'ejs');
server.set('views', './views');

server.get('/article', (req, res) => {
   res.render('article');
});

db.once('open', () => {
   console.log('Connect to db');
});

db.once('close', () => {
   console.log('Close to connect to db');
});
server.listen(3000);
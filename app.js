const express = require('express');

//роуты
const homeRoutes = require('./routes/homerout');
const newArticleRoutes = require('./routes/newarticle');
const formAddRoutes = require('./routes/formadd');
//const imgRoutes = require('./routes/imagerouter');

const server = express();
//бд
const db = require('./bd/bd');



//server.use(multer({storage:storageConfig}).single("filedata"));
server.use(express.static('./public'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(homeRoutes);
server.use(newArticleRoutes);
server.use(formAddRoutes);

//модели
const CommentModel = require('./models/comment');
const ArticleModel = require('./models/article');
const AutorModel = require('./models/autor'); 
const ImageModel = require('./models/image');

server.set('view engine', 'ejs');
server.set('views', './views');

server.get('/articles', (req, res) => {
   res.render('articles');
});

db.once('open', () => {
   console.log('Connect to db');
});

db.once('close', () => {
   console.log('Close to connect to db');
});
server.listen(3000);
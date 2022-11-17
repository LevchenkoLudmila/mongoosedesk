const express = require('express');

//роуты
const homeRoutes = require('./routes/homerout');
const newArticleRoutes = require('./routes/articlerout');
const formAddRoutes = require('./routes/formadd');

//server///
const server = express();

//ejs
server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));

//роуты
server.use(homeRoutes);
server.use(newArticleRoutes);
server.use(formAddRoutes);

//бд///
const db = require('./bd/bd');

db.once('open', () => {
   console.log('Connect to db');
});

db.once('close', () => {
   console.log('Close to connect to db');
});

server.listen(3000, () => {
   console.log('server work in 3000');
});
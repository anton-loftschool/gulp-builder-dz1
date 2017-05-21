const express = require('express');
const router = express.Router();
//const article = require('../source/data/article');
const mongoose = require('mongoose');
const content = require('./../source/template/common/content.json');

router.get('/', function (req, res) {
  let obj = {
    title: 'Главная страница'
  };
  Object.assign(obj, req.app.locals.settings);
  const Model = mongoose.model('pic');
  Model
    .find()
    .then(items => {
      // обрабатываем шаблон и отправляем его в браузер передаем в шаблон список
      // записей в блоге
      Object.assign(obj, {items: items});
      Object.assign(obj, content);
      //console.log(obj);
      res.render('welcome', obj);
    });

});

router.get('/blog', function (req, res) {
  let obj = {
    title: 'Blog'
  };
  //Object.assign(obj, article);
  Object.assign(obj, req.app.locals.settings);
  //получаем модель записей блога
  const Model = mongoose.model('blog');

  //получаем список записей в блоге из базы
  Model
    .find()
    .then(items => {
      // обрабатываем шаблон и отправляем его в браузер передаем в шаблон список
      // записей в блоге
      Object.assign(obj, {items: items});
      Object.assign(obj, content);
      res.render('blog', obj);
    });
  //res.render('pages/blog', obj);
});

module.exports = router;

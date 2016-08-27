var express = require('express');
var locale = require("locale");
var supported = ["en", "fr"];
var router = express.Router();

router.use(locale(supported));

router.get('/', function (req, res) {
   var language = require(__dirname + '/functions/language')(req.locale);
    res.render('index', {
        title : language.title,
        welcome : language.index.welcome,
        next : language.index.next,
  });
});

router.get('/examplePage', function (req, res) {
   var language = require(__dirname + '/functions/language')(req.locale);
    res.render('examplePage', {
        title : language.title,
        welcome : language.examplePage.welcome,
        next : language.examplePage.next,
  });
});

module.exports = router;

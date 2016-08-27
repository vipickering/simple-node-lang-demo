var express = require('express');
var locale = require("locale");
var supported = ["en", "en-GB", "en-US", "fr"];
var router = express.Router();

router.use(locale(supported));

router.get('/', function (req, res) {
   var language = require(__dirname + '/functions/language')(req.locale);

    res.render('index', {
        title : language.title,
        langType : req.locale,
        welcome : language.index.welcome,
        next : language.index.next,
  });
});

router.get('/examplePage', function (req, res) {
   var language = require(__dirname + '/functions/language')(req.locale);

    res.render('examplePage', {
        title : language.title,
        langType : req.locale,
        welcome : language.examplePage.welcome,
        next : language.examplePage.next,
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var bt = require('../../node_modules/bing-translate/lib/bing-translate.js').init({
    client_id: '2035a599-6bf3-4b52-b1a7-f31d851f0647',
    client_secret: '123456789101112131415'
  });

router.get('/', function(req, res, next) {
// bt.translate('I am a banana.', 'en', 'ro', function(err, res){
//   res.render(res.translated_text);
// });
res.render('index');
});

router.post('/', function(req, res, next) {

});

module.exports = router;

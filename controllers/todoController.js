var bodyParser = require('body-parser');
var yfinance = require('yfinance');


console.log('hi');
yfinance.getHistorical('JNJ', '2016-08-01', '2016-08-05', function (err, data) {
    console.log(data[0].Symbol);

});
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
  app.get('/home',function(req,res){
    res.render('todo.ejs');
  });
  app.get('/ok',function(req,res){
    res.end('todo');
  });
}

var bodyParser = require('body-parser');
var yfinance = require('yfinance');
var request = require('request');
cheerio = require('cheerio');
//var StockSymbolLookup = require('stock-symbol-lookup');

//var stockSymbolLookup = new StockSymbolLookup();


console.log('hi');



var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
  app.get('/home',function(req,res){
    res.render('home.ejs');
  });
  app.get('/event_search',function(req,res){
    res.render('event_search.ejs');
  });
  // app.post('/event_search',urlencodedParser,function(req,res){
  //   var newTodo = Todo(req.body).save(function(err,data){
  //     if(err) throw err;
  //     console.log("hi");
  //     console.log(res.data);
  //   });
  // });
  app.use(bodyParser.urlencoded({
      extended: true
  }));
  app.use(bodyParser.json());
  app.post('/', function(request, response,body){
    var dates = {'9/11 Terrorist Attacks':'2001-09-11','U.S. Presedential Elections 2016':'2016-11-08','U.S. Presedential Elections 2008':'2008-11-04'}
    console.log(request.body.event);
    console.log(request.body.comp);
    var x = request.body.comp+'';
    var y = request.body.event+'';
    console.log(y);
    const Markit = require('markit-on-demand')
    Markit.lookup(x)
    .then(( res ) => {
        console.log('Results:', res[0].Symbol);
        console.log(dates[y]);
        Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

var dat = new Date(dates[y]);
var str = "";
dat.addDays(5).toString().substring(0,9)
console.log(dat.addDays(5).toString());
//console.log(str);
        // var date = Date.parse(dates[y]);
        // console.log(date);
        // var ndate =  new Date(date.setTime( date+ 1 * 86400000 ));
        // console.log(ndate);
        // var strndate = ndate.toString();
        // console.log(strndate);
        yfinance.getHistorical(res[0].Symbol, dates[y], dates[y], function (err, data) {
          Date.prototype.yyyymmdd = function() {
            var mm = this.getMonth() + 1; // getMonth() is zero-based
            var dd = this.getDate();

            return [this.getFullYear(),
                    (mm>9 ? '' : '0') + mm,
                    (dd>9 ? '' : '0') + dd
                  ].join('-');
          };

          //var date = new Date();
          console.log(dat.yyyymmdd());
           console.log((data[0].High)+(data[0].Low)/2);



         })

    })
  })
  app.get('/ok',function(req,res){
    res.end('todo');
  });
}

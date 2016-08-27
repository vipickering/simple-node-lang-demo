var express = require('express');
var nunjucks = require('nunjucks');
var routes = require(__dirname + '/app/routes.js');
var app = express();
var router = express.Router();

var env = nunjucks.configure('app/views', {
    autoescape : true,
    cache : false,
    watch : true,
    express : app
});

if (typeof(routes) != "function") {
    console.log(routes.bind);
    console.log("Warning routes not configured correctly");
    routes.bind(app);
}else {
    app.use("/", routes);
}

app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

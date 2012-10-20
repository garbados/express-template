
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , i18n = require('./locales')
  , connect_assets = require('connect-assets');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('staticdir', 'public');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  // my middleware
  app.use(i18n.middleware);
  app.use(connect_assets({
    src: app.get('staticdir'),
  }));
  // end my middleware
  app.use(app.router);
  // app.use(require('less-middleware')({ src: path.join(__dirname, app.get('staticdir')) }));
  app.use(express.static(path.join(__dirname, app.get('staticdir'))));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

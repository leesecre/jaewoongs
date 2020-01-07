// serverjs

// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var http        = require('http');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect("mongodb://cosmo:211069po@cluster0-shard-00-00-exsko.mongodb.net:27017,cluster0-shard-00-01-exsko.mongodb.net:27017,cluster0-shard-00-02-exsko.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useMongoClient: true
  }
);
// DEFINE MODEL

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
// [CONFIGURE SERVER PORT]

var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
app.use('/infos', require('./routes/infos'));
app.use('/contacts', require('./routes/contacts'));
app.use('/games', require('./routes/games'));
// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});



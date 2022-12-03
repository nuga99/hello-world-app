var express = require('express');
var app = express();

app.use( express.static( `${__dirname}/public` ) );

function index(req, res) {
  res.sendFile(__dirname + '/public/index.html');
}

function welcome(req, res) {
  res.sendFile(__dirname + '/public/welcome.html');
}


app.get('/', index);
app.get('/welcome', welcome)
app.listen(8000, function () {
  console.log('Listening to Port 8000');
});

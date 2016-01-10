'use strict';
import express from 'express'

var app = express()
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/../public'));

var port = 3002

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌏 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})

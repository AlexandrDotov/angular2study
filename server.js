const express = require('express');
const app     = express();

app.listen(3000, '0.0.0.0', () => {
  console.log('-------------------------------------------------------------------------------');
  console.log('Server run on: http://mynodecontainer-happy14pixel88119287.codeanyapp.com:3000/');
  console.log('Lessons by https://metanit.com/web/angular2/');
  console.log('-------------------------------------------------------------------------------');
});

app.get('/', function(req, res) {
  res.sendFile('build/index.html', {"root": __dirname});
});
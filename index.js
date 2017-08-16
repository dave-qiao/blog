import Express from 'express';
// var express = require('express');
const app = Express();
// var app = express();

app.get('/', (req, res) => {
  res.send('请求成功ssssss11111');
});

app.listen(3000, () => {
  console.log('app is litenting on port 3000');
});

// function nodeStart() {
//   console.log('Hello World');
// }
// nodeStart();

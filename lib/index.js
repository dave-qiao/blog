'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var express = require('express');
var app = (0, _express2.default)();
// var app = express();

app.get('/', function (req, res) {
  res.send('请求成功ssssss11111');
});

app.listen(3000, function () {
  console.log('app is litenting on port 3000');
});

// function nodeStart() {
//   console.log('Hello World');
// }
// nodeStart();
"use strict";

// require("core-js/modules/es.object.to-string.js");

// d_08_for_of.js
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

for (var i = 0; i < arr.length; i++) {
  console.log(i);
}

arr.forEach(function (data) {
  console.log(data);
}); // for-of문은 해당하는 변수의 값이 순환처리가 되어야 작동

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var _i2 = _arr[_i];
  console.log(_i2);
}
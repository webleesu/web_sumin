"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multi = exports.minus = exports.default = void 0;

// calc.js

/*
// 방법 1 - IIFE
let math = {};
(()=>{
  let sum = (a,b)=> {
    return a+b;
  };
  math.sum = sum;
})
*/
var sum = function sum(a, b) {
  return a + b;
};

var _default = sum; // css/scss 불러올때 import, 내보내는 기능 없이 그냥 쓰면됨
// js는 불러올때 import, 내보낼때 export

exports.default = _default;

var multi = function multi(a, b) {
  return a * b;
};

exports.multi = multi;

var minus = function minus(a, b) {
  return a - b;
};

exports.minus = minus;
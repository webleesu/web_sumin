"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// d_02_esnext_destructur.js
// 비구조화할당 (destructuring assignment)
// 배열/객체의 형태를 해체하여, 각각을 변수에 담아 사용하는 표현식
var fruits = ['banana', 'apple', 'graph', 'kiwi']; // const summer = fruits[0];
// const apple = fruits[2];

var ba = fruits[0],
    ap = fruits[1],
    gh = fruits[2],
    kw = fruits[3]; // --------------------------------------

var obj = {
  'music': 'mp3',
  'mouse': 'track ball',
  'keyboard': 'mechanic'
};
var music = obj.music,
    mouse = obj.mouse,
    keyboard = obj.keyboard; // --------------------------------------

{
  var i = 0;
} // 얕은 복사 : 참조변수의 위치를 할당

var arrFruits = fruits;
var arr2Fruits = []; // 깊은 복사 수행

for (var _i = 0; _i < fruits.length; _i++) {
  arr2Fruits[_i] = fruits[_i];
}

fruits[5] = 'orange';
console.log(fruits);
console.log(arr2Fruits); // --------------------------------------
// 깊은 복사 수행 1-2
// 스프레드 오퍼레이터 (전개 연산자)

var arrCopyFruits = [].concat(fruits); // ...을 넣으면 안에 값만 넣겠다는 의미

console.log(arrCopyFruits); // --------------------------------------
// 깊은 복사 수행 2

var obj2 = {};

for (var prop in obj) {
  obj2[prop] = obj[prop];
}

obj.monitor = '120Hz';
console.log(obj);
console.log(obj2); // --------------------------------------
// 깊은 복사 수행 2-2

var obj3 = _objectSpread({}, obj);

console.log(obj3); // --------------------------------------
// 비구조 할당 변수명 담기

var arrItBrand = ['samsung', 'lg', 'logitech', 'ms', 'apple'];
var korea1 = arrItBrand[0],
    korea2 = arrItBrand[1],
    otherContury = arrItBrand.slice(2);
console.log(otherContury); // --------------------------------------
// 비구조 할당 : 배열값을 전달하면서 추가로 변수명에 값 채우기 (일반변수)

var k1 = arrItBrand[0],
    k2 = arrItBrand[1],
    a1 = arrItBrand[2],
    a2 = arrItBrand[3],
    _arrItBrand$ = arrItBrand[4],
    a3 = _arrItBrand$ === void 0 ? 'google' : _arrItBrand$,
    _arrItBrand$2 = arrItBrand[5],
    f1 = _arrItBrand$2 === void 0 ? 'nokia' : _arrItBrand$2;
console.log(a3, f1);
console.log(arrItBrand);
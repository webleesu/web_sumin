"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// d_02_esnext_arrowFunction.js
// 화살표 함수는 생성자 함수 또는 return처리할 값이 없는 함수를 제외하고 사용이 가능
// 함수표현식
var fnBox = function fnBox(a) {
  return a * 10;
};

fnBox(5); // ------------------------------------------

var fnBox2 = function fnBox2(a) {
  return a * 10;
}; // console.log( fnBox2 );
// ------------------------------------------
// 함수 선언식


function fnBox3(a, b) {
  var c = (a + b) * 100 + 'size';
  return c;
}

var rel = fnBox3(5, 10);
console.log(rel);

var fnBox4 = function fnBox4(a, b) {
  var c = (a + b) * 100 + 'size';
  return c;
};

var rel2 = fnBox4(10, 3);
console.log(rel2); // ------------------------------------------

var arrNum = [1, 2, 4, 6, 8, 9, 20, 40, 56, 75, 88]; // const minNum = arrNum.filter(function(part){
//   return 40 >= part && part > 10;
// });
// const minNum = arrNum.filter( part => 40 >= part && part > 10 );

var minNum = arrNum.filter(function (part) {
  return 40 >= part && part > 10;
});
console.log(minNum); // ------------------------------------------

var TimeTable = function TimeTable(name, kor, eng, math) {
  this.name = name;
  this.korean = kor;
  this.english = eng;
  this.math = math;
};

TimeTable.prototype.subject = '2021년 학습 과정명';
var data = [];
var st1 = new TimeTable('leesu', 70, 80, 90);
data.push(st1);
console.log(data); // ------------------------------------------
// 생성자 함수로는 화살표 함수를 사용할 수 없다.
// this는 매개변수로 인식되어 실제로 this의 개념이 아닌것으로 판단.
// data 자체에 값이 없으면 에러,
// 생성자로 사용시 타입이 변환 불가능이라 에러
// prototype에 값이 없음

var FnData = function FnData() {};

var myFn = new FnData(); // ------------------------------------------
// 생성자 함수는 과거의 형태 그대로 유지
// 타 언어에서는 이러한 개념을 class라고 불리운다.
// 그래서 js에서도 class라는 명칭을 사용
// const PersonResult = function(name, kor, eng){
//  this.name = name;
//  this.kor = kor;
//  this.eng = eng;
// }

var PersonResult = function PersonResult(name, kor, eng) {
  _classCallCheck(this, PersonResult);

  this.name = name;
  this.kor = kor;
  this.eng = eng;
};

;
var person = new PersonResult('x', 70, 90);
console.log(person);
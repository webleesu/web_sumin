"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// e_01_importHtml.js
// header영역에 내용 채워넣기
// 불러올 data 변수
var headCode = '../temp/header.html';
var slideArea = '../temp/slide_area.html'; // 선택변수

var wrap = document.querySelector('#wrap');
var headBox = document.createElement('div');
var viewBox = document.querySelector('#viewBox');
fetch(headCode).then(function (response) {
  return response.text();
}).then(function (data) {
  headBox.id = 'headBox';
  wrap.prepend(headBox);
  headBox.innerHTML = data;
});
fetch(slideArea).then(function (response) {
  return response.text();
}).then(function (data) {
  return viewBox.innerHTML = data;
});
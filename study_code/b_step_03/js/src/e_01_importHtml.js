"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// e_01_importHtml.js
// header영역에 내용 채워넣기
// 불러올 data 변수
(function () {
  var headCode = '../temp/header.html';
  var slideArea = '../temp/slide_area.html'; // 선택변수

  var body = document.querySelector('body');
  var wrap = document.querySelector('#wrap');
  var headBox = document.createElement('div');
  var viewBox = document.querySelector('#viewBox');
  var viewBox2 = document.querySelector('#viewBox2'); // 함수 -----------------------------------

  var fnMakeScript = function fnMakeScript(urlData) {
    var slideScript = document.createElement('script');
    slideScript.src = urlData;
    body.append(slideScript);
  }; //----------------------------------------


  headBox.id = 'headBox';
  wrap.prepend(headBox); // header

  fetch(headCode).then(function (response) {
    return response.text();
  }).then(function (data) {
    return headBox.innerHTML = data;
  }); // viewBox - slide1

  fetch(slideArea).then(function (response) {
    return response.text();
  }).then(function (data) {
    return viewBox.innerHTML = data;
  }).then(function () {
    return fnMakeScript("../dist/src/e_01_slide_area.js");
  }); // view - slide2

  fetch(slideArea).then(function (response) {
    return response.text();
  }).then(function (html) {
    return viewBox2.innerHTML = html;
  }).then(function () {
    return fnMakeScript("../dist/src/e_01_slide_area_fade.js");
  });
})();
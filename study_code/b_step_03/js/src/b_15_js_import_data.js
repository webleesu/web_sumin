// b_15_js_import_data.js

// XMLHttpRequest : 네트워크(웹)를 통한 자료 요청기술
// method : GET(단순히 자료를 요청하여 가져오는 기술), POST(생성)
var xhr = new XMLHttpRequest();
var method = 'GET';
var url = '../data/sample.txt';
var async = true; // 비동기

// 자료를 요청
var method = 'GET';
xhr.open(method, url, async);
// <- 응답처리 내용(보류)
// 자료 요청을 위해 전송
xhr.send();

// console.log( xhr.responseText );
setTimeout(function(){
  console.log( xhr.responseText );
}, 10);

// 네트워크 상태표시
// console.log(navigation.onLine);

// if (navigator.onLine == true){
//   console.log("현재 네트워크에 연결되어 있습니다.");
// } else{
//   console.log("현재 네트워크에 연결되어 있지 않습니다.");
// };

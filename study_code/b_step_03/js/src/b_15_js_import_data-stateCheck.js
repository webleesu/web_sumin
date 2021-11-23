// b_15_js_import_data-stateCheck.js

/* 
  외부 문서 불러오기
  1. 생성자 함수 XMLHTTLRequest(); -> 객체화
  2. 불러온 함수를 객체화
  3. 객체 내부의 메소드
  -------------------------------------------
  예외처리 : try{}catch(){}
  4. 상태메세지 처리 : 연결상태가 어떠한 상태인지 체크 : onreadystatechange
  -------------------------------------------
  5. 문서를 찾아 열어주기 : 변수.open(method(처리방식), url(불러올 주소), async(비동기처리 허용유무-기본값 : true(비동기)))
  6. 문서 처리 : 변수.send()
*/
// var linkFn = function(url, method, async){
//   var http = new XMLHttpRequest();
//   var stateMessage;

//   http.onreadystatechange = function(){
//     console.log(http.readyState);
//     switch(http.readyState){
//       case XMLHttpRequest.UNSENT: // 0
//         stateMessage = '서버와의 데이터 연결 끊어짐'
//         break;
//       case XMLHttpRequest.OPENED: // 1
//         stateMessage = '서버연결'
//         break;
//       case XMLHttpRequest.HEADERS_RECEIVED: // 2
//         stateMessage = '서버 접근 중, 파일 검색중'
//         break;
//       case XMLHttpRequest.LOADING: // 3
//         stateMessage = '데이터 불러오는 중'
//         break;
//       case XMLHttpRequest.DONE: // 4
//         stateMessage = '서버와 연결 대기 중'
//         break;
//     }
//     if (http.readyState === XMLHttpRequest.DONE) {
//       console.log('서버가 이상없이 연결되었음');
//     };
//     // console.log(stateMessage);
//   };

//   // http.onreadystatechange();

//   // setTimeout(function(){
//   //   // console.log( http );
//   //   // console.log( http.status );
//   //   // console.log( http.responseText );
//   // },100);


//   var method = method || 'GET'; // 앞의 자료가 undefined이면 뒤의 값 대체
//   var url = url;
//   var async = async || true;

//   http.open(method, url, async);
//   http.send();
// }

// // ----------------------------------------------
// var method = 'GET';
// var url = '../data/person_card.json';
// var async = true;

// linkFn(url, method, async);
// ---------------------------------------------

var xhr = new XMLHttpRequest();
// console.log(xhr.onreadystatechange); // 준비상태의 변화를 감지 - 인식
// console.log(xhr.readyState); // 준비상태 - 신호등

xhr.open('GET', '../data/person_card.json', true); // 자료를 찾아서 신청
xhr.send();

// fetch('../data/person_card.json').then( function(response){
//   console.log(response.json() );
// });
setTimeout(function(){
  var data = JSON.parse(xhr.responseText);
  var dataList = [];
  var SetFn = function(title, link){
    this.title = title;
    this.url = link;
  };

  data.forEach(function(value , index){
    var title = value.title;
    var url = value.link;
    var obj = new SetFn(title, url);
    dataList.push(obj);
  });

  console.log( dataList[0].title );

},10); // 0.1초 후에 수행

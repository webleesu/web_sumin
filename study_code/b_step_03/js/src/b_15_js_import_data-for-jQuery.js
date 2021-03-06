// b_15_js_import_data-for-jQuery.js

// $.ready(function(){});

// IIFE 즉시실행함수
// var fn = function($){};
// fn(jQuery);

// (function($){
// })(jQuery);

(function($){
  /* jQuery특징
    1. $() 선택자 이후에 들어가는 요소들은 대부분 메소드
        해석을 하면, 용어 그대로 읽으면 됨
    2. $.메소드() : 유틸리티메소드 - 어떠한 기능 처리 - 이후에도 메소드
        해석을 하면, 메소드 기준으로 읽으면 됨
  */

  // $.ajax().done(function(){});

  // Asynchronous JavaScript and XML(JSON)
  // 실시간(비동기)으로 자료 체크기술
  // 동기 : 새로고침 또는 아예 다른 페이지로 전환
  
  console.log('1. 내용 스타트!');
  // js는 기본경로가 html기준
  var path = '../data/sample.txt';
  var dataFile;
  $.ajax({
    url:path
  }).done(function(data){
    console.log('2. ajax를 이용하여 파일 불러오기');
    // console.log(data);
    var importData = data;
    var arr = importData.split(',');
    // console.log(arr);
    dataFile = arr; // undefined - 비동기식은 데이터를 가져오는데 시간이 걸리기 때문에 undefined
  });

  console.log('3. ajax뒤에 내용 표기!');
  
  // setTimeout은 정해진 일정시간 뒤에 기능을 수행하는 함수
  setTimeout(function(){
    console.log(dataFile);
    console.log('4. setTimeout 처리!');
  }, 500); // 비동기식이 데이터를 불러오는데 시간이 걸려 10ms 후에 실행해라
  console.log('5. setTimeout 함수 뒤에 수행!');

})(jQuery);
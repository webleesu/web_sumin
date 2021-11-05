// b_02_data_type_summary.js

console.clear();

// 형타입!
// 1. 숫자 -> 값을 더하면 계산이 된다.
// 2. 문자 -> 값을 더하면 연결되어 처리된다, 내가 작성할때 ' '안에 내용을 작성한다.
// 3. 논리 -> 내용을 비교(===, !===)하여 맞으면 true, 아니면 false를 도출
// 4. undefined -> 존재는 하지만 값은 없음
// 5. null -> 잘 사용 x
// 6. 객체>배열/객체 -> 배열과 객체로 분리해서 기억
// 6-1. 배열 -> 상세내용 없이 오로지 []안에 목록만 나열
// 6-2. 객체 -> 무엇에는 무엇이 있다(속성명:값)으로 존재하는 정의된 내용을 {} 내부에 나열 (css 작성 내용과 유사)
// 7. 함수 -> 선억식? 표현식? 즉시실행? ... 일단 function(){} 으로 생겼고, 이를 호출하기 위해 이름이 필요
// 7-1. 함수에 이름을 다는 방법은 변수명 = function(){} 으로 처리
// 7-2. 함수에 return이라는게 있는데 최종 결론 도출
// 8. 스코프(범위) -> 변수가 사용할 수 있는 범위 - 전역/지역

// ----------------------------------------------------------------

var a = '2021년';
var b = '11월';
var c = '04일';
var dot = '.';
var date;
// date = parseInt(a) + dot + parseInt(b) + dot + '0' + parseInt(c);

var iFn = function(i){
  return parseInt(i);
};
  date = iFn(a) + dot + iFn(b) + dot + '0' + iFn(c);

console.log( date ); // 2021.11.04 만들기

// -----------------------------------------------------------------
console.clear();

var user = function(x){
  x = x + '님'
  return x;
};
// console.log( user('수민') + Math.random( randomText ) * 3 ); 

var ran = parseInt(Math.random() * 3) ;
console.log( ran );

var arrSample = [' 오늘도 고생하셨어요', ' 힘내세요.', ' 내일도 또 다시!!!'];

// x = 'sumin';
console.log( user('sumin') + arrSample[ran] );
// 1. xx님 오늘도 고생하셨어요 2. xx님 힘내세요. 3. xx님 내일도 또 다시!!!


var content = [];
content[0] = '힘내세요';
content.push('내일도 또 다시!!');
content.unshift('오늘도 고생하셨어요');

var userFn = function(data){
  var random = Math.random() * 3;
  var int = parseInt(random);
  var plusText = data + '님' + ' ' + content[int];
  return plusText;
}

var userRel = userFn('me');
console.log( userRel );

// js에서 id명을 선택하는 방법

/**
 * 1. document.getElementById(id이름);
 * 2. document.querySelector(css와 동일한 선택자); 
*/

// 요소 생성하는 방법
// document.createElement(); // 생성해서 어딘가에 넣을 준비
// 선택자.innerHTML = '요소'; // 기존 선택자 내부에 존재하는 것 삭제
// 선택자.append(요소); // 선택자 내부 뒤에 요소를 삽입 (단, text형태는 글자로 삽입)

var wrap = document.getElementById('wrap');
var p = document.createElement('p');
p.innerText = userRel;

wrap.append(p);

// ---------------------------------------------------------------

var variable = '이것은 변수입니다';

document.write( variable );

// ---------------------------------------------

// sum(a, b); // 덧셈: 'a + b = ' 값
// minus(a, b); // 뺄셈: 'a - b = ' 값
// mul(a, b); // 곱셈: 'a * b = ' 값
// divide(a, b); // 나눗셈: 'a / b = ' 값
// svg(a, b); // 평균: 'a * b / 2 = ' 값
// remainder(a, b); // 나머지값: 'a % b = ' 값


var sum = function(a, b){
  var c = a + '+' + b + '= ' + (a + b);
  return c;
  
}

var minus = function(a, b){
  var c = a + '-' + b + '= ' + (a - b);
  return c;
}

var mul = function(a, b){
  var c = a + '*' + b + '= ' + (a * b);
  return c;
}

var divide = function(a, b){
  var c = a + '/' + b + '= ' + parseInt(a / b);
  return c;
}

var svg = function(a, b){
  var c = a + '*' + b + ' / 2' + '= ' + (a + b) / 2;
  return c;
}

var remain = function(a, b){
  var c = a + '%' + b + '= ' + a % b;
  return c;
}


console.log( sum(10, 2) );
console.log( minus(10, 2) );
console.log( mul(10, 2) );
console.log( divide(10, 3) );
console.log( svg(10, 2) );
console.log( remain(10, 3) );
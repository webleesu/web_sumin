// b_02_data_type.js
// 형타입을 파악하는 typeof (literal)
// 숫자로 보이는 문자 ('1')를 강제로 숫자형타입으로 변환하는 함수


// 숫자(number)--------------------------------------------------------------------------------------
var num = 7;
var num2 = num;
    num = 10;

console.log( num, typeof(num) );
console.log( num2, typeof(num2) );

// 문자(string) ---------------------------------------------------------------------------------------
var str = '123';
var str2 = str;
    str = '문자'

console.log( str, typeof(str) );
console.log( str2, typeof(str2) );

var str3 = str2 + 567; // 문자 + 숫자 = 문자의 나열
console.log( str3, typeof(str3) );
var str4 = parseInt(str2) + 567;
console.log( str4 );

console.log( typeof('50.4%') );
console.log( parseInt('50.4%') ); // 첫글자부터 시작해서 숫자로 변환 가능한 것 까지만 숫자화 처리
console.log( parseFloat('50.4%') ); // 첫글자부터 시작해서 실수 모두 숫자로 변환 가능한 것까지만 숫자화 처리
console.log( Number('50.4%') ); // 문자든 숫자든 관계없이 모두 숫자로 변환처리

var nan = NaN; // Not a Number
console.log( nan, typeof(nan) );

//Math 함수
var n = 5.54;
console.log( '올림처리', Math.ceil(n) );
console.log( '내림처리', Math.floor(n) );
console.log( '반올림처리', Math.round(n) );
console.log( '0~1까지의 난수', parseInt( Math.random() * 10 ) );
console.log( '절대값', Math.abs(-n) );


// 논리(boolean) --------------------------------------------------------------------------------------
// 논리형은 결과를 true/false로 확인하여 처리하지만, 그 결과를 확인하는 검증이 매우 많다.
// !, === ...
var bool = false;
console.log( bool, typeof(bool) );

// 존재하는 값에 !를 붙이면 값이 없다는 의미로 -> false가 되지만 본 의도는 값이 있느냐 없느냐 판단용도로 쓰면 ! 한번더
console.log(!n); // false
console.log(!!n); 
console.log(!!0);

console.log( 1 == '1' ); // true / 유사의 유무
console.log( 1 === '1' ); // false / 동일의 유무


// undefined ------------------------------------------------------------------------------------------
var und = undefined;
console.log( und, typeof(und) );
und = 'undefined';
console.log( und, typeof(und) );
und = undefined + 'result!';
console.log( und, typeof(und) );
console.log( true + '값' );


// null -----------------------------------------------------------------------------------------------
var nul = null;
console.log( nul, typeof(nul) );

// null과 undifined는 값이 없다는 의미의 특수한 형타입으로 있던 자료구조였어나, 현재는 단순히 값이 누락시킨다 라는 의미로만 존재





// Object/function 형타입은 단순 한가지의 개념을 가지고 있는 것이 아니고 여러 형타입을 담는 복합성의 특징
// 그렇기에 Object/function 형타입으로 사용할 변수처리는 참조변수 개념으로 처리
// 일반변수 = 단순 값을 가지는 변수  /  참조변수 = 값을 가지는 변수가 아니라 어느 공간(주소)을 공유하는 변수

// Object ---------------------------------------------------------------------------------------------

// 1. Array ----------------------------------------------------------------------------------------------
var arr = ['키보드', '마우스', '태블릿', '모니터', '노트북', '웹캠'];
console.log( arr.constructor );
console.log( typeof(arr) );
console.log( arr[3] ); // 모니터

arr[5] = '마이크'; // 웹캠 -> 마이크
arr[9] = '웹캠';
console.log( arr[5], arr[9] );
console.log( arr[5], arr );

var arr2 = arr;
console.log( arr2 );
arr[9] = '빼빼로';
console.log( arr );
console.log( arr2 );

console.clear();

var arT = new Array();
console.log( arT );
arT[0] = '물';
arT[1] = '약';
console.log( arT );
// new Array()를 이용하여 배열을 생성하는 방식은 권장하지 않는다. -> 바로 [] 작성 후 바로 수행

var arA = [];
arA[0] = '물';
arA[1] = '약';

arA.push('커피');
arA.push('쥬스');
arA.push('밥');
arA.unshift(5);
arA.unshift(0);
arA.unshift(0000);

console.log( arA );

arA.pop();
arA.shift();
console.log( arA );

// 2. Object ---------------------------------------------------------------------------------------------

var obj = {};
console.log( obj, typeof(obj) );
console.log( obj.constructor === Object );

obj.apple = 'iphone';
obj.samsung = 'galaxy';
obj.google = 'pixel';
obj['농심'] = '너구리';
obj['오뚜기'] = '진라면'; 
obj['한국 야쿠르트'] = '건국우유';

console.log( obj );
console.log( obj.google );

var obj2 = {};
obj2[0] = '마이크';
obj2[1] = 'pen';
obj2[2] = '텀블러';
console.log( obj2 );


// function -------------------------------------------------------------------------------------------

var fn = function(a){
  // a는 매개변수 (parameter) / 인수/인자(argument)
  // return 마지막에 작성하는것으로 어쨋든간에 최종 결론은?
  return 1 + a;
};

console.log( fn(5) );

var fn2 = function(a,b){
  var c = a + b;
  return c;
};

console.log( fn2(1,6) );

var d = 1+6;
console.log( d );

// 함수의 기본 형태 : function(){}
// 함수 선언식 : 이름을 부여한다 -> 기명함수 : function 이름(){}
// 함수 표현식 : 이름을 부여하지 않는다 -> 익명함수 -> 
//              이름이 없기에 대신 이름을 할당할 수 있는 무언가를 선언(변수) : var 변수명 = function(){}

// 함수 선언식
function fn3(){
  return 'test';
};

console.log(fn3());

//  함수 표현식
var fn4 = function() {
  return 'test2';
};

console.log( fn4() );

// -------------------------------------------------------------------------------------------
console.clear();

var x = 'hero'; // 광범위한 범위를 가지고 있다. 전역변수
function ckFn() {
  var y = 'leesu'; // y의 사용 범위는 function ckFn() 내부에서만 동작가능하기에 지역변수
  console.log( x, y ); // 콘솔을 사용했으므로, 반환과는 관계없이 무조건 console창에 내용을 작성
  return y;
};

console.log(x); // hero
ckFn(); // hero leesu
var rel = ckFn();
console.log('rel : ' + rel); // leesu
// console.log( y ); // 에러

function ckFn2(){
  var x = 'who?';
  console.log( x );
  // return x;
};

console.log( x );
ckFn2();
console.log( x );
// ------------------------------------------------------------------------------------------------

function ff(){}
ff();

(function(){})(); // 익명함수의 기다림 없이 바로 실행
(function(){}()); // 익명함수의 기다림 없이 바로 실행
// b_03_operation.js

// 사칙연산 =======================================
var n = 10;
// 함수를 만들어서 기본 n의 값과 적용할 변수의 값을 비교하는 함수
var nFn = function(data){
  return console.log( n, data );
};
nFn;

var plus = n + 10;
nFn(plus);

var minus = n - 5;
nFn(minus);

var divide = parseInt(n / 3);
nFn(divide);

var multi = n * 6;
nFn(multi);

var remainder = n % 3;
nFn(remainder);

var nReset = n = n + 10;
// n + 10 (기존 10에 10을 더해서) -> 변수 n에 재할당 -> nReset에 값을 담겠다.
nFn(nReset);
n = n + 20;
n = n + 100;
nFn();

// 자신에게 값을 할당/연산
n += 60; // n = n + 60;
nFn();

n -= 10;
nFn();

n *= 2;
nFn();

n /= 9;
nFn();

n = parseInt(n);
n %= 5;
nFn();

// 할당연산자 : 자신의 값을 이용하여 대입처리하고자 할때 사용

// 증감연산자 =======================================
console.clear();
nFn();

n += 1;
nFn();

n++; // 결과 도출 후 1 더하기
nFn();
nFn(n++);

++n; // 1 더한 후 결과 도출
nFn();
nFn(++n);

// -------------------------------------------------
console.clear();
var i = 5;
console.log(i); // 5

i = i + 1;
console.log(i); // 6

i += 1;
console.log(i); // 7

++i;
console.log(i); // 8

i++;
console.log(i); // 9

console.log(i++); // 9 : 변수 i의 값을 먼저 도출 후 연산 1을 더한다.
console.log(i++); // 10
console.log(i); // 11
console.log(++i); // 12 : 변수 i의 값을 먼저 연산 후 값을 도출한다.
console.log(++i); // 13
console.log(i); // 13

// 위 전치/후치의 계산차이는 실무에서는 큰 차이는 없다.
// 우리의 일상과 비교한다면, 한국식 나이계산과 미국식 나이계산 차이
// 실무작업에서는 정확한 값을 도출 후 작업을 진행하는것을 권장하기에

nFn();

n = n + 1;
n += 1;
n++;
++n;
nFn('-----------------');

n = n - 1;
n -= 1;
nFn();
n--;
--n;
nFn();

console.clear();
// -------------------------------------------------------------------

// 비교연산자 =======================================
n = 20;
nFn(i);

var compare = n === i;
console.log( compare ); // === n값과 i값이 같은가? false

var compare = n !== i;
console.log( compare ); // !== 같지 않은가? ture

compare = n <= i;
console.log( compare );

compare = n >= i;
console.log( compare );

// or(||), and(&&)
// ||, && 비교연산자는 좌변과 우변을 비교하여, true/false를 찾아내는 기법
// 한쪽이 완전한 충족을 하면 다른 쪽은 비교하지 않는다!
// 단, 하나의 비교연산자( |. & ) 사용시 결과는 0,1로 도출
// TIP, 조금이라도 빠른 연산을 위해 
// ||은 true가 나오기 쉽거나 우선이 되는 내용을 좌변에 배치
// &&는 false가 나오기 쉽거나 우선이 되는 내용을 좌변에 배치
var compare2 = true || true;
console.log( compare2 );
compare2 = true && true;
console.log( compare2 );

var compare3 = true & false;
console.log( '|, & 하나짜리로 비교', compare3 );

// !의 의미는 부정(반대)
console.log( '체크1: ', !!false );
console.log( '체크2: ', 0, !!0 );

var checkFn = function(data){
  var d = data || 'not Data!';
  console.log( d );
}
checkFn(10);
checkFn();


// 삼항연산자 : 
// 참/거짓에 수행하는 내용은 무조건 1줄 이어야 한다. =======================================
// (1) ? 2 : 3 ;
// 조건 ? 조건결과가 참이면 실행 : 결과가 거짓이면 실행;

// ( !ture )? console.log('결과 참!!') :console.log('결과 거짓!');

var list = [];
var trueFn = function(){
  return list = ['note', 'laptop', 'mouse', 'git'];
};

var falseFn = function(){
  return list = ['wallet', 'glasses', 'smartphone'];
};

(!true)? trueFn() : falseFn();
console.log( list );
// ------------------------------
// 당신이 개발자라면 프론트와 백엔드 분야 중 어느쪽인가?

/*
var developList = [];

var frontFn = function(){
  return developList = ['html', 'javascript', 'css', 'jQuery', 'node.js', 'react', 'typescript'];
};

var backFn = function(){
  return developList = ['html', 'sql', 'c', 'c++', 'java', 'pythone', 'jsp', 'spring', 'javascript', 'node.js'];
};

(true)? frontFn() : backFn();
*/
// ---------------------------------------------------------------------------------------

var prLang = [];
var frontEndFn = function(){
  prLang = ['html', 'javascript', 'css', 'jQuery', 'node.js', 'react', 'typescript'];
  return prLang;
};
var backEndFn = function(){
  prLang = ['html', 'sql', 'c', 'c++', 'java', 'pythone', 'jsp', 'spring', 'javascript', 'node.js'];
  return prLang;
};
/*
var program = '프로그램명';
(program === 'front') ? frontEndFn() : backEndFn();
console.log( prLang );
*/

var programer = function(field){
  var data = field === 'front';
  var data2 = field === 'back';
  // ( data ) ? frontEndFn() : backEndFn();
  (data)? frontEndFn(): (data2)? backEndFn(): prLang = ['검색된 과목이 없습니다.'] ;
};

// programer('front');
// programer('back');
programer('design');
console.log( prLang );
// console.log( developList );
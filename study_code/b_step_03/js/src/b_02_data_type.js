// b_02_data_type.js
// 형타입을 파악하는 typeof (literal)
// 숫자로 보이는 문자 ('1')를 강제로 숫자형타입으로 변환하는 함수


// 숫자(number)
var num = 7;
var num2 = num;
    num = 10;

console.log( num, typeof(num) );
console.log( num2, typeof(num2) );

// 문자(string)
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
console.log( parseInt('50.4%') );
console.log( parseFloat('50.4%') );
console.log( Number('50.4%') );

var nan = NaN;
console.log( nan, typeof(nan) );


// 논리(boolean)
// undefined
// null
// Object
// Array
// function
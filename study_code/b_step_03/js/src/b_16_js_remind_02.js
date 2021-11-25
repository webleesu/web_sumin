// b_16_js_remind_02.js

// 일반변수, 참조변수

// 일반변수는 값(결과물) 그 자체를 가르키는 것
var i = 0;
var n = i;
    i = 10;
    n = i;
    i = 'text';
    console.log('i : ' , i , ' n : ' , n);

// 참조변수는 값이 아닌 주소를 가르키는 것 - [], {}
var arr = ['하나', '둘'];
var arr2 = arr;
    arr[0] = '셋';
    arr[1] = '넷';
console.log(arr, arr2);

// 위와 동일한 참조변수인것 같지만, 실제로는 새로운 참조변수를 생성

var arrOrigin = [1,2,3];
var arrClone = arrOrigin;
    arrOrigin = ['하나' ,'둘', '셋'];

console.log('arrOrigin : ', arrOrigin, 'arrClone : ', arrClone);
// -------------------------------------------------------

var fnTest = function(data){
  return data.reduce(function(a,b){
    return a+b;
  });
};

console.log(fnTest(arrClone));
// ------------------------------------------------------
console.clear();

var arrNumber = [90, 5, 30, 60, 450, 250, 3, 60, 8];
// 문제1 : 위 배열에 들어가는 값중 가장 작은 값을 구하는 방법 2가지 이상
// 문제2 : 위 배열에 들어가는 값 중 가장 큰 수를 구하는 방법 2가지 이상
// 문제3 : 위 배열에 들어가는 값 대신 정수형의 1~3자리까지의 랜덤 숫자 10개를 담아 문제 1번의 값처럼 도출

/* 나의 풀의 - 3번 실패
// 1번
var minFn = function(arrNumber){
  var min = arrNumber[0];
  var i = 0;
  for ( ; i < arrNumber.length; i++) {
    if (min > arrNumber[i]) {
      min = arrNumber[i];
    }
  }
  return min;
};

console.log('최소값 : ', minFn(arrNumber));

// 2번
var maxFn = function(arrNumber){
  var max = arrNumber[0];
  var i = 0;
  for ( ; i < arrNumber.length; i++) {
    if (max < arrNumber[i]) {
      max = arrNumber[i];
    }
  }
  return max;
};

console.log('최대값 : ', maxFn(arrNumber));

// 3번
// console.log( arrNumber.push(parseInt(Math.random()*1000 )) );

var ranFn = function(arrNumber){
  for (var i = 0; i < 10; i++) {
    arrNumber[i] = parseInt(Math.random()*1000);
  }
  console.log(arrNumber);
};

console.log( minFn(ranFn(arrNumber)) );
*/

// -------------------------------------------------------
// 문제1 - 최소값 구하기 풀이
// 1-1 Array.prototype.min();
var minResult = arrNumber.prototype.min();
console.log( minResult );

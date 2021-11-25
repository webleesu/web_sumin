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
// 풀이: 문제1 - 최소값 구하기
// 1-1 : Math.min()

// Array.prototype.call(?, 1,2,3,4), 
// Array.prototype.apply(?, [1,2,3,4,5]);
// var minResult = Math.min.apply(null, arrNumber); 
// console.log( minResult );

// 1-2 : 
// var arrR2 =  [1,4,6,2,99,10,456,98765].sort(function(a,b){
//     return a - b;
// });
// console.log( arrR2 );
var arrNumber2 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var sortMin = arrNumber2.sort(function(a, b){ return a - b; });
    console.log( sortMin[0] );    

    // 배열의내용을.정렬로처리( 정렬기준을 설정(앞의값, 뒤의값){} ) 
    //arrNumber2.sort(function(a, b){ 
      // 앞의값 - 뒤의값을 계산하여 결과가 음수이면 앞,뒤 그대로배치
      // 앞의값 - 뒤의값을 계산하여 결과가 양수이면 뒤,앞 순서로배치
      //  var c =  a - b;
      // 정렬기준을 처리하여 반환
      //  return c; 
    //});

// 1-3 : for문 이용
var arrNumber4 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var arr4Len = arrNumber4.length;
var minNumber = arrNumber4[0];
for(i=0; i<arr4Len; i+=1){
  if(minNumber > arrNumber4[i]){
    minNumber =  arrNumber4[i];
  }
}
console.log('for:', minNumber );


// ------------------------------------------------------
// 풀이: 문제2 - 최대값구하기
// 2-1 : Math.max()
var maxResult = Math.max.apply(null, arrNumber); 
// console.log( maxResult );

// 2-2 : [].sort()
var arrNumber3 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var sortMax = arrNumber3.sort(function(a, b){ return b - a; });
console.log( sortMax[0] );
var last = sortMin.length - 1;
console.log( sortMin[last] );

// --------------------------------------------------------------
// 문제 3번을 풀기위한 random 숫자만들기
var arrRan = [];
var random; //= Math.floor(Math.random() * 1000);
var i=0;
for(; i<10; i++){
  random = Math.floor(Math.random() * 1000);
  arrRan.push( random );
}
// console.log( arrRan );
// ---------------------------------------------------------------

// 구구단 문제

var mulFn = function(a, b){
  var a = 2, b = 1;
  for (a=2; a < 10; a++) {
    for (b=1; b < 10; b++) {
      console.log(a + " x " + b + " = ", a*b);
    }
  }
}

mulFn();
/* 불가능한 함수
var loop1 = function(i){
  var n;
  for(n=1; n<10; n++){
    console.log(i+'x'+n+'='+(i*n));
    // loop1(i);
  }
}
// for(i=2; i<10; i++){
//   console.log(i+'단 -------------------');
//   loop1(i);
// }
i=0;
loop1(i=1);
*/

// --------------------------------------------
console.clear();

var startNum = 500;
var timed = 10;
var endNum = 250;
var intervalFn;
// -------------
var btn = document.querySelector('.btn');
var pSpan = document.querySelector('p>span');
pSpan.innerText = 'text작성';

var countFn = function(start){
  var goCheck = true;
  var start = start;

  if(goCheck){
    goCheck = false;

    intervalFn = setInterval(function(){
      pSpan.innerText = start;
      start -= 1;
      if(start <= endNum){
        pSpan.innerText= endNum + ' 처리완료';
        clearInterval(intervalFn);
        goCheck = true;
      }
    }, timed);
  }
};


btn.addEventListener('click', function(e){
  e.preventDefault();
  countFn(startNum);
});

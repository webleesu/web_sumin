// b_08_js_repeat1.js

// while(){} -------------------------------------------------
/*
  var i = 0; // 1. 최초 값
  while( i < 10 ){ // 2. 조건비교(참이면 내용 수행, 거짓이면 종료)
    console.log('while: ', i);
    i+=1; // 3. 변수 연산 후 2번으로 이동
  }
*/

// do-while -------------------------------------------------

var j = 10;
do{
  console.log('do-while: ', j);
  j+=1;
} while (j < 5)


// for -------------------------------------------------

var w = 0;
while(w < 20){
  console.log('while: ', w);
  w += 2;
}

// var y = 0;
// for( ; y<20 ; ){
//   console.log('for: ', y);
//   y+=2;
// }


for( var y = 0; y<20; y+=2 ){
  console.log('for: ', y);
}
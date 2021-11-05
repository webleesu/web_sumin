// b_02_js_data_type_summary2.js

console.clear();
var dicList = [];
// dicList내부에 계산한 값을 히스토리처럼 저장!!

/*
var dicList = [];
dicList.push('a');
dicList.push('b');
dicList.push('c');
dicList.push('d');
dicList.push('e');
dicList.push('f');

console.log( dicList );
*/

var fn1 = function( data ){
  dicList.push( data ); // 배열에 담는 기능
  return data;  // 함수 실행시 결과값
};

fn1('button');
fn1('link');
fn1('anker');
fn1('div');
fn1('section');

console.log( dicList );
// b_05_js_condition.js
// 문법


/*
switch (매개변수) {
  case 조건값:
    조건값과 매개변수가 일치하면 수행
  break; // break는 더이상 해당조건을 수행하지 않고, switch 문법을 종료
  case 조건값2:
    조건값과 매개변수가 일치하면 수행
  break;
  default:
    위 조건들이 일치하지 않으면 수행

}
*/

var rel = true;
var d = [];

switch (rel) {
  case true:
    d.push('true 1');
  break;
  case false:
    d.push('false 1');
  break;
  default:
    d.push('end');
}

console.log(d);


var num = 4;
var data = [];
var atmFn = function (num) {
  switch (num) {
    case 1:
      data.push('현금 입금');
      atmFn(2); // 재귀함수
      break;
    case 2:
      data.push('현금 확인');
      break;
    case 3:
      data.push('타계좌 송금');
      atmFn(2);
      break;
    case 4:
      data.push('통장 삭제');
      atmFn(2);
      break;
    default:
      data.push('대출(연 60%)');
      atmFn(2);
  }
};
atmFn(1);
console.log(data);
// ----------------------------------------------------------
console.clear();

var type;
var store = [];

var storeFn = function (type){
  var fnPick = function(){
    store.push('물건을 고른다.');
  }
  var fnGiveItem = function(){
    store.push('물건을 낸다.')
  }
  
  var fnCard = function(){
    store.push('카드를 낸다.');
  }
  var fnPay = function(){
    store.push('카드 결제를 한다.');
  }
  var fnPayError = function(){
    store.push('결제 에러 발생')
  }
  var fnRefund = function(){
    store.push('카드 입금을 받는다.')
  }
  var fnItemReturn = function(){
    store.push('물건을 돌려받는다.');
  }
  var fnCardReturn = function(){
    store.push('카드를 돌려받는다.');
  }
  var fnCheck = function(){
    store.push('내역을 확인한다.');
  }
  
  switch (type) {
    case 'a':
      fnPick();
      fnCard();
      fnPay();
      fnItemReturn();
      fnCardReturn();
      fnCheck();
      break;
  
    case 'b':
      fnGiveItem();
      fnCard();
      fnRefund();
      fnCardReturn();
      fnCheck();
      break;
    
    case 'c':
      fnGiveItem();
      fnCard();
      fnRefund();
      fnCardReturn();
      fnCheck();
      break;
    
    case 'd':
      fnPick();
      fnCard();
      fnPayError();
      fnCardReturn();
      fnCheck();
      break;
    
    default:
      store.push('타입을 골라주세요');
  }
  
  console.log(store);
}

storeFn('a');


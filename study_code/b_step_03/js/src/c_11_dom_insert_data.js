// c_11_dom_insert_data.js

// 별도 자료 --------------------------------
var data = ['title', 'spring', 'javascript', 'winter', 'summer', 'banana', 'group'];

// -----------------------------------------

/*
  시나리오:
  .card 내부에 li 요소 삽입
  별도의 data 객체를 만들어 해당하는 내용이 li에 첨부되게 진행
*/

// 변수 기존내용 선택
var conBox = document.querySelector('#conBox');
var cardUl = conBox.querySelector('.card');

var i = 0;
var len = data.length;
var makeLi;
for(; i < len; i+=1){
  makeLi = document.createElement('li');
  makeLi.innerText = data[i] + ' ' + (i + 1);
  cardUl.appendChild(makeLi);
}
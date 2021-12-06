// c_12_dom_list_modal.js

// 시나리오
// 1. li 가져와서 여러개 생성

// 변수
var elConBox = document.querySelector('#contentBox');
var elCardPart = elConBox.querySelector('.card_part');


// 기능
// 요소 생성 방법 1 (element로 인식)
// var mkLi = document.createElement('li');
// mkLi.innerHTML = '<li><a href="#">li 내용을 복사해서 사용해 봅시다!!</a></li>';

// 요소 생성 방법 2 (text로 인식)
// var elLiOrigin = '<li><a href="#">li 내용을 복사해서 사용해 봅시다!!</a></li>';

// 요소 생성 방법 3 (기존 html 문서에서 copy)
var elLiOrigin = elCardPart.children[0]; // 요소 상태 그대로 가져오기 // 한번밖에 사용 못함
elLiOrigin.remove(); // 기존(원본)값 삭제(추가 생성시 혼동을 막기 위해)

var cloneEl = elLiOrigin.cloneNode(elLiOrigin); // 기존 data 복제 (복제 기능을 반복)
elCardPart.append(cloneEl);


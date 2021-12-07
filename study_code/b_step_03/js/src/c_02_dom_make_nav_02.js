// c_02_dom_make_nav_02.js

// * 버튼 클릭 -> 하위 메뉴가 나타나거나 사라지게 만들기
// 1. 버튼클릭 : .drop_btn > button 클릭
// 2. 나타나거나 사라지는 요소 : .sub_menu 나타나거나 사라지게 ( style에 직접 display:none/block) ->  none/block ?
// * 옵션 : event.preventDefault();

// 변수 ----------------------------------------------------
var dropBtnSelector = document.querySelector('.drop_btn');
var dropBtn = dropBtnSelector.querySelector('button');
var subMenu = document.querySelector('.sub_menu');

var subMenuStyle = getComputedStyle(subMenu);
// console.log( window.getComputedStyle(subMenu) );

// 이벤트 ----------------------------------------------------
dropBtn.addEventListener('click', function(event){
  event.preventDefault();
  // subMenu.style.display = 'block';
  if(subMenuStyle.display === 'none'){
    subMenu.style.display = 'block';
  }else{
    subMenu.style.display = 'none';
  }

  console.log( subMenu.style.display );
});

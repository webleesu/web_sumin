// c_09_dom_tab_menu.js

// 시나리오
/* 
  * 탭메뉴를 클릭하여, 해당하는 순번에 맞는 내용을 나타나게 만들기
  1. .tab_title_inner 내부에 있는 li(그 내부의 button)을 클릭하여 순서를 파악한다.
  2. .tab_content_inner 내부에 있는 순서에 맞는 ..tab_content_inner를 나타나게 한다.
  3. display처리를 해도 되지만, 해당하는 순번에(li와, .tab_content_part) 각각 .on을 첨부
  4. 선택되지 않은 요소는 .on의 선택 해제
  - button/a 기본으로 가지고 있는 요소에 기능은 클릭시 처리에 방해되므로 기능을 해제
*/

// =============================================
// 기본변수
var contentBox = document.querySelector('#contentBox');
var titleInner = contentBox.querySelector('.tab_title_inner');
var titleInnerPart = titleInner.querySelector('ul');
// var titleList = titleInnerPart.querySelectorAll('li');
var titleList = titleInnerPart.children;
// var titleArr = Array.prototype.slice.call(titleList);
var titleArr = [].slice.call(titleList);
console.log(titleArr);


var contentInner = contentBox.querySelector('.tab_content_inner');
var contentPart = contentInner.querySelectorAll('.tab_content_part');

var indexCheck = 0;
var optionName = 'on';


// =============================================
// 기본 추가기능
titleArr[indexCheck].classList.add(optionName);
contentPart[indexCheck].classList.add(optionName);
// =============================================
// 함수

// =============================================
// 이벤트처리
titleArr.forEach(function(element, index){
  // var titleBtn = element.children[0];
  var titleBtn = element.querySelector('button');

  titleBtn.addEventListener('click', function(event){
    event.preventDefault();
    // 선택된 요소의 부모 요소를 찾아오려면 : parentNode
    // element 도 같은 요소를 선택
    // console.log(this.parentNode, element);

    // li내부의 button 선택
    // console.log( this );
    /*
    // ------------------------------------------------
    // Q.3-1 :
    titleArr[indexCheck].classList.remove(optionName);
    contentPart[indexCheck].classList.remove(optionName);
    // ------------------------------------------------

    indexCheck = index;
    titleArr[indexCheck].classList.add(optionName);
    contentPart[indexCheck].classList.add(optionName);
    */
  
  /*
    // Q.3-2 : - li요소에 전부 on제거
    // ----------------------------------------------------
    titleArr.forEach(function(el){
      el.classList.remove(optionName);
    });
    contentPart.forEach(function(el){
      el.classList.remove(optionName);
    });
    // ------------------------------------------
    indexCheck = index;
    titleArr[indexCheck].classList.add(optionName);
    contentPart[indexCheck].classList.add(optionName);
  */
  
    // Q.3-3 : -li 순번에 맞는 것은 add, 아닌것은 모두(for) remove처리
    // 선택된것, 선택되지 않은 것을 구분

    indexCheck = index;
    titleArr.forEach(function(el, idx){
      // if(idx !== indexCheck){
      //   el.classList.remove(optionName);
      // }else{
      //   el.classList.add(optionName);
      // }
      (idx !== indexCheck) ? el.classList.remove(optionName) : el.classList.add(optionName);
    }); // titileArr.forEach

    contentPart.forEach(function(el,idx){
      (idx !== indexCheck) ? el.classList.remove(optionName) : el.classList.add(optionName);
    }); // contentPart.forEach


  });
});




// Question ---------------------------------
// 1. titleBtn.addEventListener('click', function(){ ...  console.log( 클릭한 순번 ) });
// 2. 순번에 맞는 요소에 class='on'을 첨부
// 3. 기존에 있는 'on'을 제거
// 3-1. 기존의 순번을 파악해서 제거
// 3-2. 모든(for) 요소에 있는 'on'을 제거 후 'on'을 삽입
// 3-3. 선택순번만 'on' 첨부, 선택순번 외 모든 요소에 'on' 제거

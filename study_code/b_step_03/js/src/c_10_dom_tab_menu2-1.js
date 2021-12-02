// c_10_dom_tab_menu2-1.js

// * li요소에 삽입할 객체 리스트
var data = [
  {id: 'event_21042', title: 'summer flaver'}
];


/*
  1. html 요소를 생성, 지정된 위치에 삽입 - innerHTML, append, creatElement
  2. 한번에 생성+첨부를 반복할 수 없기에 생성+첨부를 하나의 세트로 인식하여 반복수행
  3. 별도의 data내용을 기반으로 해당하는 자료에 맞게 각각 첨부
*/
// 선택변수
var contentInner = document.querySelector('.content_inner');
var yearPart = contentInner.querySelectorAll('.year_part');
var latestYear = yearPart[0];

// 기능
// 0. 삽입할 요소
var innerCode = '<a href="#" data-id><h4 class="event_title">제목</h4><p class="event_narration">설명</p><dl class="date"><dt class="blind">기간</dt><dd>날짜</dd></dl><dl class="event_check success"><dt></dt><dd>진행예정</dd></dl></a>';
// 1. ul 생성
  var makeUl = document.createElement('ul');
  makeUl.setAttribute('class', 'event_particle');
  latestYear.append( makeUl );
  /*
  makeUl.className = 'two'; // 기존내용지우고 대체
  makeUl.classList.add('one');// 기존에 추가
  makeUl.setAttribute('data-id','three'); // 대체, 속성 변경가능
  */

  
  // latestYear.appendChild( mkt );// 문자불가능
  var yearUl = latestYear.querySelector('ul');
  // var makeLi = document.createElement('li');
  // yearUl.append(makeLi);
  
  // 2. li 5개 생성하여 첨부
  var i=0;
  var makeLiLen = data.length; // 실제 생성할 배열의 갯수만큼 처리
  var makeLi;//  = document.createElement('li');

  for(; i < makeLiLen; i+=1){
    makeLi = document.createElement('li');
    makeLi.innerHTML = innerCode;
    yearUl.append(makeLi);
  }

  // 생성한 내용 기준 li에 내용 첨부
  var selectI = 0;
  var eventList = yearUl.querySelectorAll('li');
  var selectorLi = eventList[selectI];
  var selectorLink = selectorLi.querySelector('h4');
  var selectorH4 = selectorLi.querySelector('h4');

  // selectorH4 = data[selectI].title;

  selectorLink.setAttribute('data-id', data[selectI].id);
  selectorH4.innerText = data[selectI].title;

  
// -----------------------------------------------------------------------------------------------------
// latestYear.innerHTML = '<ul></ul>'; // innerHTML 은 안의 코드를 삭제하고 해당 코드를 추가함
// latestYear.append('<ul></ul>'); // append는 코드 형식이든 element형식이든 구분안하고 추가
// latestYear.appendChild(''); // element요소로 이루어진 node를 의미

// append는 지정된 선택자 내부에 필요한 요소(내용)을 기존 내용에 추가로 덧붙이는 기능
// appendChild는 'Node'형식으로 구성도니 내용만 담을 수 있다. (element)
// creatElement는 요소를 생성하는 기능 - 생성만 가능하며, 추가로 덧붙이기 위해서는 append, appendChild.. 를 사용 (1회용)



/* innerCode는 태그와 속성 조금씩 변경
var innerCode2 = '\
<button type="button" data-import="../event/y21042_data.json" id="event_21042">\
  <h4 class="event_title">summer flaver</h4>\
  <p class="evetn_narration">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, beatae.</p>\
  <dl class="date">\
    <dt class="blind">기간</dt>\
    <dd>2122. 01. 05 - 2022. 02. 15</dd>\
  </dl>\
  <dl class="event_check success">\
    <dt>이벤트 진행 상태</dt>\
    <dd>이벤트 종료</dd>\
  </dl>\
</button>';

var innerCode3Fn = function data(){
  return ( // jsx
    `
    <button type="button" data-import="../event/y21042_data.json" id="event_21042">
    <h4 class="event_title">summer flaver</h4>
    <p class="evetn_narration">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, beatae.</p>
    <dl class="date">
      <dt class="blind">기간</dt>
      <dd>2122. 01. 05 - 2022. 02. 15</dd>
    </dl>
    <dl class="event_check success">
      <dt>이벤트 진행 상태</dt>
      <dd>이벤트 종료</dd>
    </dl>
  </button>
  `
  );
};
*/
// --------------------------------------------------------------------------
// 탭메뉴 내용에 필요한 코드 형식 삽입하기
/*
var testWrap = document.querySelector('#test_wrap');
var testList = testWrap.querySelectorAll('li');

testList[0].innerHTML = innerCode;
testList[1].innerHTML = innerCode2;
testList[2].innerHTML = innerCode3Fn();
*/
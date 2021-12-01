// c_10_dom_tab_menu2-1.js

var innerCode = '<button type="button" data-import="../event/y21042_data.json" id="event_21042"><h4 class="event_title">summer flaver</h4><p class="evetn_narration">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, beatae.</p><dl class="date"><dt class="blind">기간</dt><dd>2122. 01. 05 - 2022. 02. 15</dd></dl><dl class="event_check success"><dt>이벤트 진행 상태</dt><dd>이벤트 종료</dd></dl></button>';


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

function data(){
  return ( // jsx
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
  );
};

// --------------------------------------------------------------------------
// 탭메뉴 내용에 필요한 코드 형식 삽입하기
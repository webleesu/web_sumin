// c_04_dom_blind_btn.js

// jQuery 버튼 클릭시 슬라이딩 display 처리

(function($){
  // .btn 내부에 있는 버튼을 클릭하여, .content_area 내용이 사라지거나 나타나게 만들기
  
  // -------------------------------------------
  var btn = $('.btn');
  var closeBtn = btn.children('.close');
  var openBtn = btn.children('.open');
  var open2Btn = btn.children('.open2');
  var contentArea = $('.content_area');
  // -------------------------------------------
  closeBtn.on('click', function(event){
    event.preventDefault();
    contentArea.slideUp();
  });

  openBtn.on('click', function(event){
    event.preventDefault();
    contentArea.slideDown();
  });

  open2Btn.on('click', function(event){
    event.preventDefault();
    contentArea.stop().slideToggle();
  });


})(jQuery);

// javascript를 이용하여 
// 버튼 클릭 시 높이값이 0이 되도록 처리
// 높이가 0이면 display:none;처리

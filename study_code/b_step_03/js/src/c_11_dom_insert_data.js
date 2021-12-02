// c_11_dom_insert_data.js

// 별도 자료 --------------------------------
var data = [
  {
    title: 'title', 
    contents: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 
    link:'http://naver.com',
    bgImg: '../multi/img/bottle.jpg',
    bgNarr: '병 이미지에 대한 간략한 설명'
  }, // data[0].title
  
  {
    title: 'spring', 
    contents: 'Impedit illum recusandae a reprehenderit, officia rerum.',
    link:'http://daum.net',
    bgImg: '../multi/img/cart.jpg',
    bgNarr: '카트 이미지에 대한 간략한 설명'
  }, // data[1].title
  
  {
    title: 'remove link', 
    contents: 'Laborum fuga eveniet iste necessitatibus iusto possimus',
    // link:'http://google.com',
    bgImg: '../multi/img/earth.jpg',
    bgNarr: '지구 이미지에 대한 간략한 설명'
  },
  
  {
    title: 'remove image', 
    contents: 'corporis maxime minima ab ratione, esse recusandae doloremque?',
    link:'http://naver.com',
    // bgImg: '../multi/img/table.jpg',
    bgNarr: '테이블 이미지에 대한 간략한 설명'
  },
  
  {
    title: 'summer', 
    contents: 'Lorem ipsum dolor sit amet.',
    link:'http://daum.net',
    bgImg: '../multi/img/bottle.jpg',
    bgNarr: '병 이미지에 대한 간략한 설명'
  },
  
  {
    title: 'banana', 
    contents: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    link:'http://google.com',
    bgImg: '../multi/img/cart.jpg',
    bgNarr: '카트 이미지에 대한 간략한 설명'
  },
  
  {
    title: 'group', 
    contents: 'Lorem ipsum dolor sit.',
    link:'http://naver.com',
    bgImg: '../multi/img/earth.jpg',
    bgNarr: '지구 이미지에 대한 간략한 설명'
  }
];

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

// --------------------------------------------------------------------------
// 기능수행
/* // 점점 복잡해지는 내용에 의해 추가 작업이 어려움
for(; i < len; i+=1){
  makeLi = document.createElement('li');
  // makeLi.innerText = data[i].title + ' ' + '<br />' + data[i].contents + ' ';
  // makeLi.innerText = data[i].contents + ' ' + (i + 1);
  makeLi.innerHTML = '<div class="bg_img" style="background-image: url('+ data[i].bgImg +')"><span class="blind">'+ data[i].bgNarr +'</span></div> <dl><dt>' + data[i].title + '</dt> <dd><span>'+ data[i].contents + '</span><br /><a href=\"'+ data[i].link +'\" target="_blank">자세히보기</a></dd> </dl>';
  cardUl.appendChild(makeLi);
}
*/

// 우선 기본 코드를 모두 담은 후에 필요한 부분만 색출해서 수정/첨부/삭제

var baseCode = '<div class="bg_img"><span class="blind"></span></div>\
                <dl>\
                  <dt></dt>\
                  <dd>\
                    <span></span>\
                    <br />\
                    <a href="" target="_blank">자세히보기</a>\
                  </dd>\
                </dl>';

for(; i < len; i+=1){
  makeLi = document.createElement('li');
  makeLi.innerHTML = baseCode;
  cardUl.appendChild(makeLi);
};

/*
  내용 중 1번째 내용만 우선 정리해서 삽입
  bgImg: background-image, bgNarr: 설명
  title: 제목
  contents: 내용, link: link 주소
*/
/*
  시나리오 2:
  1. li요소 첫번째 선택
  2. 공통 n번째를 가르키는 변수를 생성
*/

var setCardFn = function(n){
  // var idx = 0;
  var idx = n;
  var li = cardUl.querySelectorAll('li');
  var dt = li[idx].querySelector('dt');
  var narr = li[idx].querySelector('dd span');
  var link = li[idx].querySelector('dd a');
  var bgImg = li[idx].querySelector('.bg_img');
  var bgNarr = li[idx].querySelector('span');

  // 사용 이미지가 없거나, 링크 주소가 없거나(!!undefined) 한다면 해동 요소는 삭제
  dt.innerText = data[idx].title;
  narr.innerText = data[idx].contents;
  // link.href = data[idx].link; // html상에 존재하는 property에 값을 처리
  // link.setAttribute('href', data[idx].link); // 어떠한 속성도 처리 (ex. data- 속성)
  // 링크 처리 (삼항연산자) , 위에 기존코드 주석처리
  (!!data[idx].link)? link.href = data[idx].link: link.remove();
  
  // 이미지 처리 (if문) , 아래 기존 코드 주석처리
  if(!!data[idx].bgImg){
    bgImg.style.backgroundImage = 'url(' + data[idx].bgImg +')';
  }else{
    bgImg.remove();
  }

  // bgImg.style.backgroundImage = 'url(' + data[idx].bgImg +')';
  bgNarr.innerText = data[idx].bgNarr;
}; // setCardFn(n);

// li 내용 처리
for(i=0; i < len; i++){
  setCardFn(i);
};

/*
setCardFn(0);
setCardFn(1);
setCardFn(2);
setCardFn(3);
setCardFn(4);
setCardFn(5);
setCardFn(6);
*/

// data.forEach(function(d,i){
//   cardSetting(i);
// });
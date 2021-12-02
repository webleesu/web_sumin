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
    title: 'javascript', 
    contents: 'Laborum fuga eveniet iste necessitatibus iusto possimus',
    link:'http://google.com',
    bgImg: '../multi/img/earth.jpg',
    bgNarr: '지구 이미지에 대한 간략한 설명'
  },
  
  {
    title: 'winter', 
    contents: 'corporis maxime minima ab ratione, esse recusandae doloremque?',
    link:'http://naver.com',
    bgImg: '../multi/img/table.jpg',
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
for(; i < len; i+=1){
  makeLi = document.createElement('li');
  // makeLi.innerText = data[i].title + ' ' + '<br />' + data[i].contents + ' ';
  // makeLi.innerText = data[i].contents + ' ' + (i + 1);
  makeLi.innerHTML = '<div class="bg_img" style="background-image: url('+ data[i].bgImg +')"><span class="blind">'+ data[i].bgNarr +'</span></div> <dl><dt>' + data[i].title + '</dt> <dd><span>'+ data[i].contents + '</span><br /><a href=\"'+ data[i].link +'\" target="_blank">자세히보기</a></dd> </dl>'
  cardUl.appendChild(makeLi);
}
// b_14_js_json_1.js

var originData = [
  { "id": 1, "title": "Administrative Assistant I", "link": "https://psu.edu" },
  { "id": 2, "title": "Associate Professor", "link": "https://redcross.org" },
  { "id": 3, "title": "Financial Advisor", "link": "https://bing.com" },
  { "id": 4, "title": "VP Quality Control", "link": "http://istockphoto.com" },
  { "id": 5, "title": "GIS Technical Architect", "link": "http://fastcompany.com" },
  { "id": 6, "title": "Biostatistician IV", "link": "https://linkedin.com" },
  { "id": 7, "title": "Executive Secretary", "link": "https://netlog.com" },
  { "id": 8, "title": "VP Quality Control", "link": "http://sbwire.com" },
  { "id": 9, "title": "Associate Professor", "link": "http://opensource.org" },
  { "id": 10, "title": "Media Manager IV", "link": "http://cam.ac.uk" }
];

// originData copy
var textData = JSON.stringify(originData);
var dataList = JSON.parse(textData);

/* 내가 시도한 것 (for문 실패)
var nav = document.querySelector('nav');
var ul = document.createElement('ul');
var li = document.createElement('li');
var a = document.createElement('a');

nav.append(ul);
// ul.append(li);
// li.append(a);

// a.href = originData[0].link;
// a.append(originData[0].title);

for (var i =0; i < originData.length; i++) {
  ul.append(li);
  li.id="li_"+(i+1);
  this.li.append(a);
  a.href = originData[i].link;
  a.append(originData[i].title);
}

*/

// 선생님 풀이

// document.getElementsByClassName('navigation')[0];
var navi = document.querySelector('.navigation');
// navi.style.width = '100%';
// navi.style.height = '50px';
// navi.style.backgroundColor = '#dcd';
navi.style = "width:100%; height:50px; background-color:#dcd";

// 생성 -> document.createElement('ul');
// var makeUl2 = '<ul class="list"></ul>'; // innerHTML을 사용시 직접 내용을 작성
// navi.innerHTML = makeUl2;

var makeUl = document.createElement('ul'); // innerHTML방식이 아니라 내부에 추가로 삽입할 때 요소로 삽입 처리
makeUl.classList.add('list');
navi.append(makeUl);

// ul.list 선택 : querySelector('.list');
// 내부에 담을 li 생성 : createElement('li');
// li 내부에 유일요소인 a생성 : createElement('a'); -> '<a></a>'
// li를 .list에 담기 : (.list).append(li)
// a에 href 속성처리, text 삽입

// step 1 : li요소 하나만 생성하여 삽입하기!
var UlList = document.querySelector('.list');
/*
var makeLi = document.createElement('li');
var title = dataList[0].title;
var link =  dataList[0].link;
var makeA = '<a class="link"></a>';
makeLi.innerHTML = makeA;
var findA = makeLi.querySelector('a');
findA.href = link;
findA.innerText = title;
UlList.append(makeLi);
*/

// step 2 : li 요소를 ul에 각각 여러개 삽입 // for(){}
/*
var i = 0;
var len = dataList.length;
var makeLi, makeA, findA, title, link;

for(; i<len; i+=1){
  makeLi = document.createElement('li');
  makeA = '<a class="link">sample</a>';
  makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');

  title = dataList[i].title;
  link = dataList[i].link;
  findA.href = link;
  findA.innerText = title;
  UlList.append(makeLi); // Ullist.내부의 뒤에 삽입(생성된 li)
}
*/

// step 3 : forEach()
/*
dataList.forEach(function(content){
  // console.log(data.title, data.link, index);
  // forEach가 끝나면 외부에서 변수는 모르는 변수이기 때문에 내부에 써주는 것이 맞음
  var makeLi = document.createElement('li'); 
  var makeA = '<a class="link">sample</a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  findA.href = content.link;
  findA.innerText = content.title;
  UlList.append(makeLi);
});
*/

// --------------------------------------------------------
// 함수화 처리
// forEach로
/*
var loopFn1 = function(content){
  var makeLi = document.createElement('li'); 
  var makeA = '<a class="link">sample</a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  findA.href = content.link;
  findA.innerText = content.title;
  UlList.append(makeLi);
};

dataList.forEach( loopFn1 );
*/
// --------------------------------------------------------

// for문을 함수화 처리
var i = 0;
var len = dataList.length;

var loopFn2 = function(i){
  var makeLi, makeA, findA, title, link;
  makeLi = document.createElement('li');
  makeA = '<a class="link">sample</a>';
  makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');

  title = dataList[i].title;
  link = dataList[i].link;
  findA.href = link;
  findA.innerText = title;
  UlList.append(makeLi); // Ullist.내부의 뒤에 삽입(생성된 li)
}

for(; i<len; i+=1){
  loopFn2(i);
}

// javascript로 순수하게 처리하는 것 : 모든것을 수동으로 처리
// jQuery로 처리하는 것 : 반자동처리

// console.log($.fn);

(function($){
  // console.log($.fn);
  var ul = $('.list');
  // li 생성/삽입
  ul.append('<li><a></a></li>');
  // jQuery에서는 if, for, forEach 등등 문법 그대로 활용이 가능
  // forEach대신 수행가능한 메소드는 jQuery에 별도로 첨부되어 있다.
  dataList.forEach(function(content, index){
    // ul.append('<li><a class="link" href="' + content.link + '">' + content.title + '</a></li>');
    ul.append('<li><a class="link" href=""></a></li>');
    var list = ul.children('li').eq(index).children('a');
    list.text(content.title); // js - 선택자.innerText = '값';
    list.attr('href', content.link); // js - 선택자.setAttribute('속성명', '값');
    
  });
})(jQuery); 
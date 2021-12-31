// d_13_class.js

const dataFile = [
  {id: 1, brand: 'nescafe', type: 'coffee', title: '제목을 작성_01', content: '내용을 작성_01', img: 'a.jpg', imgUrl: '../img/path/'},
  {id: 2, brand: 'nescafe', type: 'coffee', title: '제목을 작성_02', content: '내용을 작성_02', img: 'b.jpg', imgUrl: '../img/path/'},
  {id: 3, brand: 'nescafe', type: 'coffee', title: '제목을 작성_03', content: '내용을 작성_03', img: 'c.jpg', imgUrl: '../img/path/'},
  {id: 4, brand: 'nescafe', type: 'coffee', title: '제목을 작성_04', content: '내용을 작성_04', img: 'd.jpg', imgUrl: '../img/path/'},
  {id: 5, brand: 'nescafe', type: 'coffee', title: '제목을 작성_05', content: '내용을 작성_05', img: 'f.jpg', imgUrl: '../img/path/'}
];

const BoxSet = function(title, content, imgUrl, img){
  this.title = title;
  this.content = content;
}

const newData = [];

// const data = new BoxSet(dataFile[0].title, dataFile[0].content);
// console.log( data );

dataFile.forEach ((data, idx) => {
  let mySelect = new BoxSet(data.title, data.content, data.imgUrl, data.img);
  newData.push(mySelect);
});

console.log(newData);

const nArr = [1,2,3,4,5,6,7];
console.log(nArr); // (7) [1, 2, 3, 4, 5, 6, 7]
let newNarr = nArr.map(n=> { //  map : 내용 전체를 순환하여 처리 
  return n*n;
});

console.log(newNarr); // (7) [1, 4, 9, 16, 25, 36, 49]
// b_09_copy.js

var favoritColor = ['emerald green', 'coral', 'hot pink', 'city blue', 'brown gray'];
var copyColor = favoritColor; // 같은 주소지를 공유
favoritColor.push('yellow');

// console.log(favoritColor, copyColor);
// cloneColor = favoritColor.slice(0,6);

var cloneColor = [];
// 방법 1
// cloneColor[0] = favoritColor[0];
// cloneColor[1] = favoritColor[1];
// cloneColor[2] = favoritColor[2];
// cloneColor[3] = favoritColor[3];
// cloneColor[4] = favoritColor[4];
// cloneColor[5] = favoritColor[5];

// 방법 2
/*
for (var i = 0; i < favoritColor.length; i++){
  cloneColor[i] = favoritColor[i];
}
favoritColor.push('sky');
cloneColor.push('deep orange');

console.log(favoritColor,cloneColor);
*/



// 방법 4
/*
favoritColor.forEach(function(data, index){
  // cloneColor[index] = favoritColor[index];
  // cloneColor[index] = data;
  cloneColor.push(data);
});
favoritColor.push('sky');
cloneColor.push('deep orange');

console.log(favoritColor, cloneColor);
*/

// =====================================================================

var pc = {
  'dell' : '프리시전',
  'hp' : 'z시리즈',
  'apple' : 'mac book',
  'samsung' : 'galaxy book'
};

pc.lg = 'gear';
console.log(pc);

var clonePc = {};

for(var key in pc){
  clonePc[key] = pc[key];
}



pc.asus = 'gen book';
clonePc.lenovo = 'think pad';

console.log(clonePc);
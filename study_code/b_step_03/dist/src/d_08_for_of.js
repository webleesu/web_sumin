// d_08_for_of.js

const arr = [1,2,3,4,5,6,7];

console.log( arr );

for(let i=0; i<arr.length; i++){
  console.log(i);
}

arr.forEach((data)=> { console.log(data)} );

// for-of문은 해당하는 변수의 값이 순환처리가 되어야 작동
for(let i of arr){
  console.log(i);
}

// --------------------------------
let text = 'javascript';

for(let i of text){
  console.log(i);
}

const obj = {
  'samsung': 'galaxy',
  'apple'  : 'iphone',
  'lg'     : 'wing',
  'nokia'  : 'N serize'
};

// for(var i in obj){
//   console.log(i);
// }

const key = Object.keys(obj);
const val = Object.values(obj);
const ent = Object.entries(obj);
console.log(key, val);
console.log(ent);
for(let [i,v] of ent){
  console.log(`${i} : ${v}`);
}
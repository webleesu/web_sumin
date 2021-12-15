// iterator_time_check.js

// for, forEach, for-of 사용시간 체크

const arr = ['banana', 'apple', 'iphone', 'samsung', 'javascript', 1,2,3,4,5,6,7,89,523,153];

// console.time('log');
// console.log( arr );
// console.timeEnd('log');

console.log(arr);

console.time('for');
for(let d=0; d<arr.length; d++){
  console.log(arr[d]);
}
console.timeEnd('for');

console.time('forEach');
arr.forEach( (d) => {
  console.log(d);
});
console.timeEnd('forEach');

console.time('for-of');
for(let d of arr){
  console.log(d);
}
console.timeEnd('for-of');

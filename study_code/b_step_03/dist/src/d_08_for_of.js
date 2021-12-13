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
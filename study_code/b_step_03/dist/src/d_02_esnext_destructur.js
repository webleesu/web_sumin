// d_02_esnext_destructur.js
// 비구조화할당 (destructuring assignment)
// 배열/객체의 형태를 해체하여, 각각을 변수에 담아 사용하는 표현식

const fruits = ['banana', 'apple', 'graph', 'kiwi'];

// const summer = fruits[0];
// const apple = fruits[2];

let [ba, ap, gh, kw] = fruits;

// --------------------------------------

const obj = {
  'music' : 'mp3',
  'mouse' : 'track ball',
  'keyboard' : 'mechanic'
};

let { music, mouse, keyboard} = obj;

// --------------------------------------
{
  let i =0;
}

// 얕은 복사 : 참조변수의 위치를 할당
const arrFruits = fruits;
const arr2Fruits = [];


// 깊은 복사 수행
for(let i=0; i<fruits.length; i++){
  arr2Fruits[i] = fruits[i];
}

fruits[5] = 'orange';
console.log(fruits);
console.log( arr2Fruits );
// --------------------------------------
// 깊은 복사 수행 1-2
// 스프레드 오퍼레이터 (전개 연산자)
const arrCopyFruits = [...fruits]; // ...을 넣으면 안에 값만 넣겠다는 의미
console.log( arrCopyFruits );

// --------------------------------------
// 깊은 복사 수행 2

const obj2 = {};

for(let prop in obj){
  obj2[prop] = obj[prop];
}

obj.monitor = '120Hz';
console.log(obj);
console.log(obj2);

// --------------------------------------
// 깊은 복사 수행 2-2
const obj3 = {...obj};
console.log(obj3);

// --------------------------------------

// 비구조 할당 변수명 담기
const arrItBrand = ['samsung', 'lg', 'logitech', 'ms', 'apple'];
const [korea1, korea2, ...otherContury ] = arrItBrand;
console.log(otherContury);

// --------------------------------------
// 비구조 할당 : 배열값을 전달하면서 추가로 변수명에 값 채우기 (일반변수)
const [k1, k2, a1, a2, a3 = 'google', f1 = 'nokia'] = arrItBrand;
console.log(a3, f1);
console.log(arrItBrand);



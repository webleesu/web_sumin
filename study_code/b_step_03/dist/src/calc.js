// calc.js

/*
// 방법 1 - IIFE
let math = {};
(()=>{
  let sum = (a,b)=> {
    return a+b;
  };
  math.sum = sum;
})
*/

let sum = (a,b)=> {
  return a+b;
};

export default sum;

// css/scss 불러올때 import, 내보내는 기능 없이 그냥 쓰면됨
// js는 불러올때 import, 내보낼때 export

const multi = (a, b) => {
  return a*b;
}

const minus = (a, b) => {
  return a-b;
}

export {multi, minus};
// d_12_rwd.js

const elWrap = document.querySelector('#wrap');
const elMobile = document.querySelector('.mobile');
const elPc = document.querySelector('.pc');


// -------------------------------------------------------
const tab = 768; // 모든브라우저 사용 가능
const tabDevice = '(max-width: 768px)'; // 구형브라우저 X

const dataDevice = [
  {type : 'mobile', size: 600},
  {type : 'tablet', size: 768},
  {type : 'laptop', size: 1440},
  {type : 'pc'}
];

let CK_DEVICE;


let winWidth = window.innerWidth; // 브라우저 가로크기
console.log(winWidth);
/* 단순 display none/block 처리
const fnSwitchView = (type) =>{
  switch(type){
    case dataDevice[0].type:
    case dataDevice[1].type:
      elMobile.style.display = 'block';
      elPc.style.display = 'none';
      break;
    default:
      elMobile.style.display = 'none';
      elPc.style.display = 'block';
  }
};
*/
const fnSwitchView = (type) =>{
  switch(type){
    case dataDevice[0].type:
    case dataDevice[1].type:
      elWrap.append(elMobile);
      elPc.remove();
      break;
    default:
      elWrap.append(elPc);
      elMobile.remove();
  }
};

const fnRwd = (deviceType) => {
  let beforeDevice = CK_DEVICE;
  if(deviceType < dataDevice[0].size){
    CK_DEVICE = dataDevice[0].type;
  // }else if(deviceType >= dataDevice[0].size && deviceType < dataDevice[1].size){ // 앞부분은 이미 전 if에서 코드로 조건 걸어줌
  }else if(deviceType < dataDevice[1].size){
    CK_DEVICE = dataDevice[1].type;    
  }else if(deviceType < dataDevice[2].size){
    CK_DEVICE = dataDevice[2].type;
  }else {
    CK_DEVICE = dataDevice[3].type;
  }
  // -----------------------------------------

  if(beforeDevice !== CK_DEVICE){ // 환경이 변했을때만 체크
    fnSwitchView(CK_DEVICE);
    console.log(CK_DEVICE);
  }
};
fnRwd(winWidth);

window.addEventListener('resize', e=>{
  const winReWidth = window.innerWidth;
  // location.reload(); // 새로고침
  // console.log( winReWidth );
  fnRwd(winReWidth);
})
// d_12_rwd_matchMedia.js

// matchMedia를 이용하여 해당규격에 일치하는지(matches) 판단
// window.mathMedia('css크기를 그대로 옮겨놓은 형태').matches

const wrap = document.querySelector('#wrap');
const mobile = document.querySelector('.mobile');
const pc = document.querySelector('.pc');
mobile.remove();
pc.remove();
/*


const size = 'screen and (max-width: 768px)';
const mediaQuery = window.matchMedia(size);


// 지정규격과 체크해서 맞으면 true 아니면 false
const fnCKMedia = () => {
  if(mediaQuery.matches){
    console.log('768보다 작은크기');
    wrap.append(mobile);
    pc.remove();
  }else{
    console.log('768보다 큰 크기');
    wrap.append(pc);
    mobile.remove();
  }
};
fnCKMedia();
*/
// ------------------------------------
/* 사이즈가 변경될 때 마다 체크
window.addEventListener('resize', (e)=>{
  fnCKMedia();
});
*/
/*
// 규격(mediaQuery)이 기준(max-width: 768px)에서 변하면(change) 체크
mediaQuery.addEventListener('change', (e)=>{
  fnCKMedia();
  
});
*/
/**
 * 이전 버전에서는 무조건 브라우저 크기가 변할때마다(resize) 매번 확인해서 그 규격에 맞게 설정
 * matchMedia는 최초의 설정된 크기를 기준으로 해당내용이 변경(change)되면 바로 확인하여 설정
 */

const dataDevice = [
  {type : 'mobile', size: 599},
  {type : 'tablet', size: 767},
  {type : 'laptop', size: 1439},
  {type : 'pc'}
];

// 규격 하나씩 작성 - step 1
// const mobile = window.matchMedia(`screen and (max-width: ${dataDevice[0].size}px)`);
// const tablet = window.matchMedia(`screen and (min-width:${dataDevice[0].size + 1}px) and (max-width: ${dataDevice[1].size}px)`);
// const laptop = window.matchMedia(`screen and (min-width:${dataDevice[1].size + 1}px) and (max-width: ${dataDevice[2].size}px)`);
// const pc = window.matchMedia(`screen and (min-width:${dataDevice[2].size + 1}px)`);

// const mediaArray = [mobile, tablet, laptop, pc];

// 규격을 조금 더 확장 가능하도록 처리
const mediaArray = [];
for(let i=0; i<dataDevice.length; i++){
  let matchCode;
  
  if(i === 0){
    matchCode = window.matchMedia(`screen and (max-width: ${dataDevice[i].size}px)`);
  } else if(i === dataDevice.length - 1){
    matchCode = window.matchMedia(`screen and (min-width:${dataDevice[i-1].size + 1}px)`);
  } else {
    matchCode = window.matchMedia(`screen and (min-width:${dataDevice[i-1].size + 1}px) and (max-width: ${dataDevice[i].size}px)`);
  }
  mediaArray.push(matchCode);

}
console.log(mediaArray);

// ---------------------------------------------------------------------------------------------------------------
// 이벤트 하나씩 작성 - step 1
// mobile.addEventListener('change', e=>{
//   if(e.matches){
//     console.log('mobile');
//   }
// })
// tablet.addEventListener('change', e=>{
//   if(e.matches){
//     console.log('tablet');
//   }
// })
// laptop.addEventListener('change', e=>{
//   if(e.matches){
//     console.log('laptop');
//   }
// })
// pc.addEventListener('change', e=>{
//   if(e.matches){
//     console.log('pc');
//   }
// })

const fnInsertCode = (type) => {
  switch(type){
    case 'mobile':
    case 'tablet':
      wrap.append(mobile);
      pc.remove();
      break;
    case 'laptop':
    case 'pc':
      wrap.append(pc);
      mobile.remove();
      break;
  }
}

const fnCKDevice = (device, index) => {
  if(device.matches){
    let type = dataDevice[index].type;
    fnInsertCode(type);
  }
}

mediaArray.forEach( (type, index) => {
  fnCKDevice(type, index);
});

mediaArray.forEach( (type, index) => {
  type.addEventListener('change', (e) => {
    fnCKDevice(e, index);
  });
})
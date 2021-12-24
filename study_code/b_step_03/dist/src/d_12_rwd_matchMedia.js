// d_12_rwd_matchMedia.js

// matchMedia를 이용하여 해당규격에 일치하는지(matches) 판단
// window.mathMedia('css크기를 그대로 옮겨놓은 형태').matches

const wrap = document.querySelector('#wrap');
const mobile = document.querySelector('.mobile');
const pc = document.querySelector('.pc');
mobile.remove();
pc.remove();


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

// ------------------------------------
/* 사이즈가 변경될 때 마다 체크
window.addEventListener('resize', (e)=>{
  fnCKMedia();
});
*/

// 규격(mediaQuery)이 기준(max-width: 768px)에서 변하면(change) 체크
mediaQuery.addEventListener('change', (e)=>{
  fnCKMedia();
  
});

/**
 * 이전 버전에서는 무조건 브라우저 크기가 변할때마다(resize) 매번 확인해서 그 규격에 맞게 설정
 * matchMedia는 최초의 설정된 크기를 기준으로 해당내용이 변경(change)되면 바로 확인하여 설정
 */
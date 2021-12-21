// e_03_axis.js

/**
 * 마우스 움직였을 경우 해당위치 좌표 파악
 */

const elWrap = document.querySelector('#wrap');
const elBox = elWrap.querySelector('.box');

// 이벤트 ----------------------------------------
elBox.addEventListener('mousemove', (e) => {
  // console.log( 'clientX', e.clientX );
  // console.log( 'layerX', e.layerX );
  // console.log( 'movementX', e.movementX );
  console.log( 'offsetX', e.offsetX );
  console.log( 'pageX', e.pageX );
  // console.log( 'screenX', e.screenX );
  console.log( '-------------------------' );
  
})
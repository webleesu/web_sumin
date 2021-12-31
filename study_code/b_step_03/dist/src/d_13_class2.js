// d_13_class2.js

// 변수
const userId = document.querySelector('#userId');
const userPw = document.querySelector('#userPw');
const userRemember = document.querySelector('#userRemember');
const submitBtn = document.querySelector('button[type="submit"]');
const pwViewBtn = document.querySelector('.pw_view');
// --------------------------------------------------------------------

class CheckMember {
  constructor(id, pw, option){
    this.id = id,
    this.pw = pw,
    this.rememeber = option
  }
};

// --------------------------------------------------------------------
// 이벤트
// 비밀번호 확인버튼 클릭시 비번 확인
pwViewBtn.addEventListener('mousedown', (e)=>{
  // console.log( e.button ); // 왼버튼 0, 휠버튼 1, 오른버튼 2
  e.preventDefault();
  // 왼버튼 클릭 확인 (e.button에서 0)
  if(e.button === 0){ 
    userPw.type = 'text'; // 왼버튼 누르면 입력한 pw 보여지게
  }
});

const fnPwType = function(e){
  e.preventDefault();
  userPw.type = 'password'; // 왼버튼 떼면 다시 비밀번호 가려지게
}

pwViewBtn.addEventListener('mouseup',  fnPwType );

// 해당 버튼에서 벗어나도 비밀번호 가려지도록
pwViewBtn.addEventListener('mouseleave', fnPwType );



// data 전송시 객체로 처리
submitBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  const sendData = new CheckMember(userId.value, userPw.value, userRemember.checked);
  console.log(sendData);
})
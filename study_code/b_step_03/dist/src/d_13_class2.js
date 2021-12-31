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

const fnEvent = (element, handlerType, fn) => {
  handlerType.forEach( handler => {
    element.addEventListener(handler, (e) => {
      e.preventDefault();
      fn(e);
    });
  });
};

// --------------------------------------------------------------------
// 이벤트
// 비밀번호 확인버튼 클릭시 비번 확인
const fnPwType = function(e){
  e.preventDefault();
  if( e.button === 0 && e.type === 'mousedown'){ // 왼버튼 클릭 확인 (e.button에서 0)
    userPw.type = 'text'; // 왼버튼 누르면 입력한 pw 보여지게
  }else {
    userPw.type = 'password'; // 왼버튼 떼면 다시 비밀번호 가려지게
  }
};

// pwViewBtn.addEventListener('mousedown', fnPwType );
// pwViewBtn.addEventListener('mouseup',  fnPwType );
// // 해당 버튼에서 벗어나도 비밀번호 가려지도록
// pwViewBtn.addEventListener('mouseleave', fnPwType );
fnEvent(pwViewBtn, ['mousedown', 'mouseup', 'mouseleave'], fnPwType);


// data 전송시 객체로 처리
submitBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  const sendData = new CheckMember(userId.value, userPw.value, userRemember.checked);
  console.log(sendData);
});

const fnMkScript = (file)=>{
  const mkScript = document.createElement('style');
  mkScript.setAttribute('class', 'box');
  mkScript.setAttribute('src', file);
};

const fnMakeEl = (el, attribute, text)=>{
  const element = document.createElement(el);
  let check;
  // let name;
  class PropertySet{
    constructor (type, name){
      this.type = type,
      this.name = name
    }
  };
  let fnProps = (type, name)=>{ 
    check = new PropertySet(type, name); 
  };
  const fnAttr = (attr)=>{
    if(attr[0] === '.'){ 
      fnProps('class', attr.slice(1));
    }else if(attr[0] === '#'){
      fnProps('id', attr.slice(1));
    }else{
      fnProps('data-type', attr);
    }
  };
  if(!!attribute){
    if(typeof(attribute) === 'array'){ 
      fnAttr(attr) 
      element.setAttribute(check.type, check.name);
    }else{
      attribute.forEach((attr)=>{  
        fnAttr(attr)  
        element.setAttribute(check.type, check.name);
      });
    }
  }
    element.innerText = text;
    console.log( element );
}

fnMakeEl('div', ['.box','#test'], 'lorem text');
fnMakeEl('div', ['#box'], 'lorem text');
fnMakeEl('div', ['.box'], 'lorem text');
fnMakeEl('div', null, 'lorem text');
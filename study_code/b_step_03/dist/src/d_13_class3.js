// d_13_class3.js

const fnFirst = () => {
  return new Promise( (success, fail) => {
    setTimeout(() => {
      success(10)
    }, 1000);
  });
};

fnFirst() // (1)
.then((fnResult) => { // (2)
  console.log(fnResult);
  return fnResult * 10;
})
.then( (data) => { // (3)
  console.log(data);
})

// -----------------------------------------
const elHead = document.querySelector('head');
const elBody = document.querySelector('body');
const tempSlide = document.querySelector('.temp');
const slideData = '../temp/slide_area2.html';

fetch(slideData)
.then((importText) => { return importText.text(); })
.then( (data) => {
  let mkBox = document.createElement('div');
  mkBox.setAttribute('class', 'box');
  mkBox.innerHTML = data;
  tempSlide.append(mkBox);
})
.then(()=>{
  let elLink = document.createElement('link');
  elLink.setAttribute('rel', 'styleSheet');
  elLink.setAttribute('href', '../css/src/e_02_slide_area.css');
  elHead.append(elLink)
})
.then( () => {
  let elScript = document.createElement('script');
  elScript.setAttribute('src', '../dist/src/e_02_slide_area.js');
  elBody.append(elScript);
})
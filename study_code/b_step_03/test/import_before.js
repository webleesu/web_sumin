// import_ before.js

const data = ['banana', 'melon'];

const codeFile = () => {
  const fnLi = (data) => {
    const dataLen = data.length;
    data.forEach((el, idx) => {
      let li = document.createElement('li');
      li.innerText = rel;
      return li;
    });
  }

  return `
  <h1>hello</h1>
  <ul>
    ${fnLi(data)}
  </ul>
  `;
};

export default codeFile;
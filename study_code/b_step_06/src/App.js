import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import './App.css';
import { useState } from 'react/cjs/react.development';

function App() {
  const title = 'site';

  const style={
    backgroundColor: "#035", 
    color: "#fff", 
    padding: "1rem",
    border: "1px solid #333"
  };

  // let par = '내용 변경 전';
  const dataArr = [
    '내용 변경 전', 
    '값이 변경되었습니다.',
    '추가 변경되었습니다.',
    '또 바뀌었습니다.'
  ];
  let i=0;
  const [par, setPar] = useState(dataArr[i]);
  const pChange = (e) => {
    e.preventDefault();
    // const p = document.querySelector('p');
    setPar(dataArr[i+=1])

  }

  
  return (
    <div className="App">
      <button style={style} onClick={pChange}>클릭</button>
      <p>{par}</p>


      <Header heading={title} />
      <Main />    
      <Footer heading={title} />
    </div>
  );
}

export default App;

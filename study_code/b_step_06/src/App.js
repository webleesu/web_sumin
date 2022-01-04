import React from 'react'; // index.js에서 불러오고 있음
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
// import ContentBox from './component/ContentBox';
import './App.css';


function App() {
  
  const myName = 'leesu';
  const web = 'react';
  const h1Style = { color: '#f50', textTransform: 'uppercase'}

  // ------------------------------------
  return (
    <div className="App">
      <Header heading={web} name={myName} style={h1Style} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import Header from './component/Header';
import ContentBox from './component/ContentBox';
import './App.css';


function App() {
  
  const myName = 'leesu';
  const web = 'react';
  const h1Style = { color: '#f50', textTransform: 'uppercase'}

  // ------------------------------------
  return (
    <div className="App">
      <Header site = {myName} url = "http://naver.com" />
      <ContentBox name = {myName} web = {web} />
    </div>
  );
}

export default App;

import './App.css';

import Header from './component/Header';
import Section from './component/Section';
import './style/font.scss';
import './style/common/reset.scss';
import './style/common/common.scss';
import './style/app.scss';
import Footer from './component/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);


function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;

// Header.js
import Navigation from "./Navigation";
import '../style/header.scss';

export default function Header(){
  return (
    <header id="headBox">
      <div className="head_area">
        <h1><span className="blind">달콤커피</span></h1>
        <Navigation />
      </div>

    </header>
  );
}
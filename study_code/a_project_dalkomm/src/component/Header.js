// Header.js
import Navigation from "./Navigation";
import '../style/header.scss';

export default function Header(){
  return (
    <header id="headBox">
      <div className="head_area">
        <h1><a href="#"><span className="blind">달콤커피</span></a></h1>
        <Navigation />
      </div>

    </header>
  );
}
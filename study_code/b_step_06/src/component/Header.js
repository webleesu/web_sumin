// Header.js

import Gnb from "./Gnb";

// 첫번째 방법
// function Header() {}
// export default Header;

// 두번째 방법
// export default function Header(){}

// 세번째 방법
// const Header = function(){}
// export default Header;

// ----------------------------------------
// const props = 
export default function Header(props) {
  
  return(
    <header id="headBox">
      <h1 style={ props.style }>
        <a>{props.heading} 정보</a>
      </h1>
      <Gnb />
    </header>
  )
}

Header.defaultProps = {
  name : 'leesu'
}
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
export default function Header({site, url}) {

  const myName = 'leesu';
  const web = 'react';
  const h1Style = { color: '#f50', textTransform: 'uppercase'}
  
  
  return(
    <header id="headBox">
      <h1 style={ h1Style }>
        <a href={url} targe="_blank">{site}</a>
      </h1>
      <Gnb />
    </header>
  )
}

Header.defaultProps = {
  name : 'leesu'
}
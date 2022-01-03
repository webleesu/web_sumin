// Header.js

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

  const myName = 'leesu';
  const web = 'react';
  const h1Style = { color: '#f50', textTransform: 'uppercase'}
  const navList = ['about', 'product', 'gallery', 'notice'];
  
  return(
    <header id="headBox">
      <h1 style={ h1Style }>
        <a href={props.url} targe="_blank">{props.site}</a>
        </h1>
        <nav className="gnb">
          <h2>navigation</h2>
          <ul>
            {/* <li><a href="/about">about</a></li>
            <li><a href="/product">product</a></li>
            <li><a href="/gallery">gallery</a></li>
            <li><a href="/notice">notice</a></li> */}
            {navList.map( (li, idx)=> {
              return <li key={idx}>{li}</li>
            })}
          </ul>
        </nav>
    </header>
  )
}
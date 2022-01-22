// Navigation.js
import '../style/navigation.scss';

export default function Navigation(){
  const elUnderline = document.querySelector('.underline');
  const elNavigationLi = document.querySelectorAll('.gnb li'); // li를 선택하게 한 후 이벤트 캡쳐 이용

  const fnUnderlineClick = (e) => {
    // e.preventDefault();
    elUnderline.style.width = e.currentTarget.offsetWidth + 'px';
    elUnderline.style.left = e.currentTarget.offsetLeft + 'px';
    elUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 10 + 'px';
  }

  elNavigationLi.forEach(li => li.addEventListener('click', (e)=>fnUnderlineClick));
  
  return(
    <nav className="gnb">
        <div className='underline'></div>
      <ul>
        <li><a href="#" onClick={fnUnderlineClick}>Dal.Komm</a></li>
        <li><a href="#" onClick={fnUnderlineClick}>메뉴 · 매장</a></li>
        <li><a href="#" onClick={fnUnderlineClick}>창업안내</a></li>
        <li><a href="#" onClick={fnUnderlineClick}>새로운 소식</a></li>
        <li><a href="#" onClick={fnUnderlineClick}>SHOP</a></li>
      </ul>
    </nav>
  );
}

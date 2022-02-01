// Navigation.js
import '../style/navigation.scss';

export default function Navigation(){
  const elUnderline = document.querySelector('.underline');
  // const elNavigationLi = document.querySelectorAll('.gnb li'); // li를 선택하게 한 후 이벤트 캡쳐 이용

  const fnUnderlineClick = (e) => {
    // e.preventDefault();
    elUnderline.style.width = e.currentTarget.offsetWidth + 'px';
    elUnderline.style.left = e.currentTarget.offsetLeft + 'px';
    elUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 5 + 'px';
  }

  const fnMouseEnter = (e) => {
    elUnderline.style.width = e.currentTarget.offsetWidth + 'px';
    elUnderline.style.left = e.currentTarget.offsetLeft + 'px';
    elUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 5 + 'px';
  }
  const fnMouseLeave = (e) => {
    elUnderline.style.width = 0 + 'px';
    elUnderline.style.left = e.currentTarget.offsetLeft + 'px';
    elUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 5 + 'px';
  }

  
  return(
    <nav className="gnb_wrap">
      <div className='underline'></div>
      <ul className='gnb'>
        <li className='gnb_dalkomm' onMouseEnter={fnMouseEnter} onMouseLeave={fnMouseLeave}>
          <a href="#">Dal.Komm</a>
          <ul className='gnb_sub gnb_sub_dalkomm'>
            <li><a href="#">브랜드 이야기</a></li>
            <li><a href="#">App 소개</a></li>
          </ul>
        </li>
        <li className='gnb_menu' onMouseEnter={fnMouseEnter} onMouseLeave={fnMouseLeave}>
          <a href="#">메뉴 &#183; 매장</a>
          <ul className='gnb_sub gnb_sub_menu'>
            <li><a href="#">메뉴</a></li>
            <li><a href="#">매장 찾기</a></li>
            <li><a href="#">글로벌 달콤</a></li>
          </ul>
        </li>
        <li className='gnb_store' onMouseEnter={fnMouseEnter} onMouseLeave={fnMouseLeave}>
          <a href="#">창업안내</a>
          <ul className='gnb_sub gnb_sub_store'>
            <li><a href='#'>가맹점 개설 안내</a></li>
            <li><a href='#'>창업 상담 신청</a></li>
          </ul>
        </li>
        <li className='gnb_notice' onMouseEnter={fnMouseEnter} onMouseLeave={fnMouseLeave}>
          <a href="#">새로운 소식</a>
          <ul className='gnb_sub gnb_sub_notice'>
            <li><a href='#'>뉴스</a></li>
            <li><a href='#'>공지사항</a></li>
            <li><a href='#'>달콤 스토리</a></li>
          </ul>
        </li>
        <li className='gnb_shop' onMouseEnter={fnMouseEnter} onMouseLeave={fnMouseLeave}>
          <a href="#">SHOP</a>
        </li>
      </ul>
    </nav>
  );
}

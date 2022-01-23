// Footer.js
import React from 'react';
import '../style/footer.scss';

export default function Footer() {
  return (
    <footer id='footBox'>
      <ul className='footer_wrap'>
        <li>
          <strong>고객을 위한 달콤</strong>
          <ul className='footer_for footer_customer'>
            <li className='footer_contact'><a href="#">문의하기 (Contact Us)</a></li>
            <li><a href="#">고객상담센터 1661-1399</a></li>
          </ul>
        </li>

        <li>
          <strong>파트너를 위한 달콤</strong>
          <ul className='footer_for footer_partner'>
            <li><a href="#">협력업체 문의</a></li>
            <li><a href="#">가맹 문의</a></li>
            <li><a href="#">제휴&#183;마케팅 문의</a></li>
          </ul>
        </li>

        <li>
          <strong>개인정보 보호 및 약관</strong>
          <ul className='footer_for footer_privacy'>
            <li><a href='#'>개인정보 처리방침</a></li>
            <li><a href='#'>서비스 이용약관</a></li>
            <li><a href='#'>위치기반서비스 이용약관</a></li>
            <li><a href='#'>영상정보 처리기기 운영관리 방침</a></li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

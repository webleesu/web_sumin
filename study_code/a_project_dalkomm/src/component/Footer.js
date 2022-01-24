// Footer.js
import React from 'react';
import '../style/footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';

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

      <ul className='footer_info_wrap'>
        <li className='footer_family'>
          <select name='family site'>
            <option value='http://www.dalkomm.com/'>FAMILY SITE</option>
            <option value='https://danal.co.kr/Index.do'>다날</option>
            <option value='https://www.danalpay.com/main/main.aspx'>다날페이먼트</option>
            <option value='http://www.danalenter.co.kr/index.do'>다날엔터테인먼트</option>
          </select>
        </li>

        <li className='footer_infomation_wrap'>
          <address className='footer_infomation'>
            <a href='#'>주)다날에프엔비+</a>
            <span className='footer_info_address'>
            &#124; 주소지 &#58; 경기도 성남시 분당구 황새울로 359번길 7, 한국정보공학 3층 
            </span>
            <br />
            <span className='footer_info_ceo'>
              대표이사 &#58; 박경철 &#124; 사업자등록번호 &#58; 144-81-09353 &#124; 통신판매업신고 &#58; 제 2016-성남분당-0680호
            </span>
            <br />
            <span className='footer_info_copy'>
              Copyright &#169; 2022 (주)달콤 All Rights Reserved.
            </span>
          </address>
          <div className='footer_download'>
            <a href='#' className='footer_btn_appstore'>
              <FontAwesomeIcon icon={['fab', 'apple']} className='apple_icon' />
              App Store
            </a>
            <a href='#' className='footer_btn_googleplay'>
            <FontAwesomeIcon icon={['fab', 'google-play']} className='google_icon' />
              Google Play
            </a>
            <a href='#' className='footer_btn_qr'></a>
          </div>
        </li>
      </ul>
    </footer>
  );
}

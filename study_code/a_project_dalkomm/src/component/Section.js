// Section.js
import '../style/section.scss';
import Dal_K from '../image/Dal_K.svg';
import Fox_M from '../image/Fox_M.svg';

export default function Section() {
  return(
    <section id='viewBox'>
        <ul className="view_wrap">
          <li className='view_01'>
            <h2 className='jalnan'>
              <span className='red'>Dal.Komm</span>
              <span className='red'>Life Happens</span>
              <span className='red_stroke'>Coffee Helps</span>
            </h2>
            <div className='view_01_img'><span className='blind'>dal.Komm image</span></div>
            {/* <text>Dal.Komm CAFE Dal.Komm</text> */}
            {/* <circle>Dal.Komm CAFE Dal.Komm</circle> */}
          </li>

          <li className='view_02'>
            <div class="view_02_text_wrap">
              <h2 className='red elice'>
                <strong>달콤, 상상이 일상이 되는 곳</strong>
              </h2>
              <p className='red view_02_big hamlet'>
                Dal.Komm Life begins <br />
                with imagination
              </p>
              <p className='red view_02_normal'>
                가장 트랜디한 커피전문점, <br />
                그리고 다양한 음악과 문화를 소비하는 플랫폼으로서 맛과 식의 경험을 넘어 향유할 수 있는 공간이 되어 <br />
                여러분의 달콤한 상상, 행복한 상상을 응원하겠습니다.
              </p>
            </div>
            
            <div className='circle_01'></div>
            <div className='circle_02'></div>
            <div className='circle_03'></div>
          </li>

          <li className='view_03'>
            <section className="view_03_text_wrap">
              <h2 className='elice'>
                <strong>
                  환상의 바리스타&nbsp;
                  <img src={Dal_K} alt='Dal.K'/>
                  와 얼렁뚱땅 파티쉐&nbsp;
                  <img src={Fox_M} alt='Fox.M' />
                </strong>
              </h2>
              <p>
                그들의 이야기로 펼쳐지는
                <br />
                달콤의 상상력을 기대해주세요
              </p>
            </section>
            <div className='view_03_bg'></div>
          </li>

          <li className='view_04'></li>
          <li className='view_05'></li>
          <li className='view_06'></li>

          <li className='view_07'>
            <section className='view_07_text_wrap'>
              <h2 className='elice'>
                카페 창업의 꿈,
                <br />
                달콤이 서포터즈가 되겠습니다
              </h2>
              <p>
                달콤은 파트너 여러분들의 다양한 창업 조건에 맞는 '맞춤형 점포 개설'을 통해
                <br />
                카페 창업의 문턱을 낮추고 진정한 상생의 가치를 구현합니다.
              </p>
            </section>
            <button className='franchisee' href='#'>가맹점 개설 안내</button>
          </li>
        </ul>
      </section>
  );
}

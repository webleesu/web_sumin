// Section.js
import '../style/section.scss';

export default function Section() {
  return(
    <section id='viewBox'>
        <ul className="view_wrap">
          <li className='view_01'>
            <h2>
              <span className='red'>Dal.Komm</span>
              <span className='red'>Life Happens</span>
              <span className='red_stroke'>Coffee Helps</span>
            </h2>
            <div className='view_01_img'><span className='blind'>dal.Komm image</span></div>
            {/* <text>Dal.Komm CAFE Dal.Komm</text> */}
            {/* <circle>Dal.Komm CAFE Dal.Komm</circle> */}
          </li>
          <li className='view_02'>
            <h2 className='red'>
              <strong>달콤, 상상이 일상이 되는 곳</strong>
            </h2>
            <p className='red view_02_big'>
              Dal.Komm Life begins <br />
              with imagination
            </p>
            <p className='red view_02_normal'>
              가장 트랜디한 커피전문점, <br />
              그리고 다양한 음악과 문화를 소비하는 플랫폼으로서 맛과 식의 경험을 넘어 향유할 수 있는 공간이 되어 <br />
              여러분의 달콤한 상상, 행복한 상상을 응원하겠습니다.
            </p>
          </li>
          <li className='view_03'></li>
          <li className='view_04'></li>
          <li className='view_05'></li>
          <li className='view_06'></li>
          <li className='view_07'></li>
        </ul>
      </section>
  )
}
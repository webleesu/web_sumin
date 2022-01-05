// CardList.js
import { MdFavorite } from 'react-icons/md'
import '../style/CardList.scss';
const careListData = [
  {"id": "01", "imgUrl": "#44B161", "imgAlt": "Jesse Howell", "title": "lake", "content": "Thursday, 05 May 2022", "detailLink": "#"},
  {"id": "02", "imgUrl": "#58AD52", "imgAlt": "Sophia Vasquez", "title": "attitude", "content": "Friday, 04 November 2022", "detailLink": "#"},
  {"id": "03", "imgUrl": "#3F9EE2", "imgAlt": "Harold Griffin", "title": "clique", "content": "Thursday, 20 October 2022", "detailLink": "#"},
  {"id": "04", "imgUrl": "#B45EDB", "imgAlt": "Myrtle Ray", "title": "comfort", "content": "Friday, 14 January 2022", "detailLink": "#"},
  {"id": "05", "imgUrl": "#F867FB", "imgAlt": "Devin Ramos", "title": "leaflet", "content": "Wednesday, 06 April 2022", "detailLink": "#"}
];

export default function CardList(){
  // -----------------------------
  
  // -----------------------------
  return (
    <div className="card_area">
      <h3>card list</h3>
      <ul className='card_wrap'>

        {careListData.map((card) => {
          console.log(card);
          return (
            <li key={card.id}>
              <div className='img_set' style={ {backgroundColor: card.imgUrl} }>
                {card.imgAlt}
              </div>
              <dl>
                <dt>{card.title}</dt>
                <dd>{card.content}</dd>
              </dl>
              <div className='btns'>
                <button type='button'>좋아요 <MdFavorite /></button>
                <a className='link' href={card.detailLink}>상세보기</a>
              </div>
            </li>
          )
        })}
        {/* <li>
          <div className='img_set'></div>
          <dl>
            <dt>title</dt>
            <dd>content</dd>
          </dl>
          <div className='btns'>
            <button type='button'>좋아요 <MdFavorite /></button>
            <a className='link' href='#'>상세보기</a>
          </div>
        </li> */}
        
      </ul>
    </div>
  )
  // -----------------------------
} // CardList()

/*
<li>
  <div className='img_set'></div>
  <dl>
    <dt>title</dt>
    <dd>content</dd>
  </dl>
  <div className='btns'>
    <button type='button'>좋아요 <MdFavorite /></button>
    <a className='link' href='#'>상세보기</a>
  </div>
</li>
*/
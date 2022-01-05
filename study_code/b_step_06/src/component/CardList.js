// CardList.js
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';

import Card from './Card';
import '../style/CardList.scss';

export default function CardList(){
  // -----------------------------
  // const cardListData = ;
  const [cardData, setCardData] = useState([]);
  const dataUrl = './data/cardListData.json';

  // useEffect( async ()=>{
  //   const res = await axios.get('./data/cardListData.json')
  //               setCardData(res.data);
  //   // .then( setCardData )
  // }, []) // 밑에 에러 확인하기 위한 코드로 다시 작성
  
  useEffect( ()=>{
    axios.get(dataUrl)
    .then(res=> setCardData(res.data))
    .catch( console.log ) // 에러 확인
  })

  // -----------------------------
  return (
    <div className="card_area">
      <h3>card list</h3>
      <ul className='card_wrap'>
        {cardData.map( (card) =>{return <Card data={card} key={card.id} /> })}        
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
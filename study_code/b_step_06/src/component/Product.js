// Product.js

import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../style/Product.scss';

// ---------------------------------------------------
export default function Product() {
  const [num, setNum] = useState(0);
  const menuData = [
    {
      "pageTitle" : "coffee",
      "pageContent" : "coffee 내용에 따른 설명",
      "products": [
        { "product":"espresso"   , "narr": "espresso 설명" },
        { "product":"americano"  , "narr": "아메리카노 설명" },
        { "product":"latte"      , "narr": "latte 설명" },
        { "product":"cafe mocca" , "narr": "cafe mocca 설명" },
        { "product":"apogato"    , "narr": "apogato 설명" }
      ]
    },
    {
      "pageTitle" : "drink",
      "pageContent" : "drink 내용에 따른 설명",
      "products": [
        { "product":"orange" , "narr": "orange 설명" },
        { "product":"포도"   , "narr": "포도 설명" },
        { "product":"kiwi"   , "narr": "kiwi 설명" },
        { "product":"banana" , "narr": "banana 설명" }
      ]                      
    }
  ];

  let prCon = menuData[num];
  const fnTab = (e, i) => {
    e.preventDefault();
    setNum(i);
    prCon = menuData[num];
  }

// ---------------------------------------------------
  return (
    <div className='product_area'>
      <div className='btn_part'>
        <button type='button' onClick={(e)=>fnTab(e, 0)}>Coffee</button>
        {/* 위, 아래 같은 코드 */}
        <button type='button' onClick={(e)=> prCon=menuData[setNum(1)]}>Drink</button>
      </div>
      <div className='content_part'>
        <h2>{prCon.pageTitle}</h2>
        <p>{prCon.pageContent}</p>

        <ul>
          { prCon.products.map((pr, idx) => (
            <li key={idx}>
              <dl>
                <dt>{pr.product}</dt>
                <dd>{pr.narr}</dd>
              </dl>
            </li>  
            )
          )}          
        </ul>
      </div>

    </div>
  )
}




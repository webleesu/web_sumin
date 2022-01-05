// Card.js
import { MdFavorite } from 'react-icons/md';
import { useState } from 'react/cjs/react.development';

export default function Card(props) {
  const data = props.data;

  const btnStyleArr = [
    {color: '#333', fontWeight:700, backgroundColor: '#ada'},
    {color: '#157', fontWeight:700, backgroundColor: '#fff', border: '1px solid #777', boxSizing: 'border-box'}
  ];
  const styleArr = [ {color: '#333'}, {color: '#f00'}]
  const [ckN, setCkN] = useState(0);
  const [checking, setChecked] = useState(new Set());
  const fnCheck = () => {  // check 상태 확인 오류 잡기
    setCkN( ()=> ckN === 0 ? 1 : 0) 
    setChecked( () => ckN === 1 ? 'checked' : 'none')
  };

  return(
    <li>
      <div className='img_set' style={ {backgroundColor: data.imgUrl} }>
        {data.imgAlt}
      </div>
      <dl>
        <dt>{data.title}</dt>
        <dd>{data.content}</dd>
      </dl>
      <div className='btns'>
        <form className='blind'>
          <input type='checkbox' 
                  id={data.checkName} 
                  name={data.checkName} 
                  onChange={ fnCheck }
                  checked // check 상태 확인 오류 잡기
                  value='좋아요 체크' />
        </form>
        
        <button type='button' onClick={fnCheck} style={btnStyleArr[ckN]}>좋아요<MdFavorite style={styleArr[ckN]} /></button>
        <a className='link' href={data.detailLink}>상세보기</a>
      </div>
    </li>
  )
}
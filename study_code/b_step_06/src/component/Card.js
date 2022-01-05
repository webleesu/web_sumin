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
  const [checkState, setCheckState] = useState('');
  const fnCheck = (e) => { 
    setCkN( ()=> ckN === 0 ? 1 : 0) 
    setCheckState( e.target.checked );
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
        <input className='blind' 
                type='checkbox' 
                id={data.checkName} 
                name={data.checkName} 
                onChange={ fnCheck }
                data-checked={checkState}
                value='좋아요 체크' />
        
        <label htmlFor={data.checkName} type='button' style={btnStyleArr[ckN]}>좋아요<MdFavorite style={styleArr[ckN]} /></label>
        <a className='link' href={data.detailLink}>상세보기</a>
      </div>
    </li>
  )
}
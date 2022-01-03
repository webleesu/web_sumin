// ContentBox.js

export default function ContentBox(props){
  // const myName = 'leesu';
  const web = 'react';
  return(
    <article id="contentBox">
      <p style={ {color: "#f50"} }>{props.name}입니다</p> 
      {/* 따로 사용할 땐 최종적으로 중괄호 두번 */}

      <dl>
        <dt>{props.web} 커리큘럼</dt>
        <dd>{props.web} 이란...?</dd>
      </dl>
    </article>
  )
}
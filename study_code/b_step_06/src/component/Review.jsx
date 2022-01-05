import { useEffect, useState } from "react"
import '../style/Review.scss';
import axios from 'axios';

export default function Review(){
  const [review, setReview] = useState('');
  const fnReviewChange = (e) => {
    setReview(e.target.value);
  }

  // useEffect( async () => {
  //   // fetch('/data/dataSample.json') // data불러오는 형태 - 개발환경기반 x -> public기준
  //   // .then(res => res.json() )
  //   // .then(console.log)

  //   const resolve = await fetch('./data/dataSample.json'); // async필요
  //   const data = await resolve.json();
  //   console.log(data);

  //   // axios.get('./data/dataSample.json')
  //   // .then(res = res.data)
  //   // .then( console.log );
  // },[])

  useEffect(() => {
    axios.get('./data/dataSample.json')
    .then(res => res.data )
    // .then(console.log)

  },[])

  return(
    <div className="review_area">
      <form method="post" action="#">
        <fieldset>
          <legend>리뷰 작성</legend>
          <input id="reviewText" name="review__Text" onChange={fnReviewChange} />
          <p>{review}</p>

          {/* <button type="button">내용 전송</button> */}
        </fieldset>

      </form>
    </div>
  )
}
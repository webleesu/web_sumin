// d_11_sync_vs_Async.js

// let num = 0;

// console.log('1:', num );
// console.log('2:', num += 1 );
// console.log('3:', num += 3 );
// console.log('4:', num += 5 );
// console.log('5:', num );

// new Promise ( function (resolve, reject) {})
const prom = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve('ok'); // resolve 결과는 then에서 나옴
    reject('cancle'); // reject 결과는 catch에서 나옴
  }, 300);
});

prom
.then( (data)=> {
  console.log(data);
})
.catch( (error)=>{
  console.log(error);
})

const fnAge = (age) => {
  new Promise ( (resolve, reject) => {
    setTimeout(() => {
      if(age > 20){
        resolve('성인입니다.')
      }else {
        reject('미성년자입니다.')
      }
    }, 1000);
  });
}

fnAge(30)
  .then(console.log)
  .catch(console.log)
  .finally(()=>{ // 성공, 실패 여부에 관계없이 결과 도출
    console.log('promise의 개념이해');
  })
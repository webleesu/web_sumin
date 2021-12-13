// d_07_async.js

const fnTest = () => {  return 'test';}

console.log(fnTest());

const fnPromi = () => {
  return new Promise( (resolve, reject) => {
    resolve('test2');
  })
}

console.log( fnPromi() );
fnPromi().then(console.log);
// -------------------------------------------
async function fnTest3() { return 'test3' };
console.log( fnTest3() );
fnTest3().then(console.log);
// -----------------------------------------
const fnTest4 = async () => 'test4';
console.log(fnTest4());
fnTest4().then(console.log);
// -----------------------------------------

async function fnTest5() {
  await setTimeout(() => {}, 1000);
  return 'test5';
}
fnTest5().then(console.log);
// b_04_js_nesting_object.js

var a = 10;
var arr = []; // 참조변수 원본의 데이터는 따로 두고 그 값을 공유하여 체크

console.log( typeof arr );
var ck = (arr.constructor === Array) ? 'array' : 'other';
console.log(typeof arr, ck);

arr = ['과일', '고기', '깐풍기', '회', '냉면'];
console.log( arr[2] );

var arr2 = ['포도', '사과', '배', '감', '귤', '자몽'];
var arr3 = ['냉면', '라면', '우동', '회냉면', '쫄면', '밀면', '야끼우동', '국수'];

var arrList = [arr, arr2, '회', arr3];
console.log(arrList);
console.log(arrList[0][2]);

console.log(arrList[2], arrList[0][3]); // 회 찾기
console.log(arrList[3][0], arrList[0][3]); // 냉면 찾기

var phone = '010-1234-5678';
var addr = '서울시 영등포구 여의도동 kbs홀 본관 402호';
var myArr = phone.split('-');
var myAddr = addr.split(' ');
console.log(myArr.join('. '), myAddr);

// ========================================================================
console.clear();

var obj = {};
var objCk = (obj.constructor === Object)? '객체' : 'other';
console.log( typeof obj, objCk);

// var objOrigin = new Object(); // 원형의 형태를 복제한다는 의미 : new
// console.log(objOrigin);

obj = {"meat": "채끝살", "fruit": "머루포도", "국수": "쫄면", "mobile phone": "samsung" };
console.log(obj.fruit);
console.log(obj["mobile phone"]);

var obj2 = {"web": "frontEnd", "myobj": obj};

console.log(obj2.myobj.meat);
// ========================================================================
console.clear();

var drink = [
  {'coffee': ['esspresso', 'americano', 'latte', 'mocha', 'choco latte']},
  {'alcole': ['맥주', '소주', '막걸리', '청주', '데낄라']},
  {'juice': ['오렌지', '포도', '자몽', '망고']},
  {'tea': ['black first', 'green', 'red', 'lemon', 'elgray', 'papermint']},
  {'ade': ['자몽', '키위', '레몬']}
];

console.log( drink[3].tea[5] );
// console.log( drink[3]["tea"][5] );  // 위의 코드로 주로 사용

// ========================================================================
var data = {};

var mySet = {
  name: function(d){
    return data.user = d;
  },
  old: function(d){
    return data.old = d;
  },
  gender: function(d){
    return data.gender = d;
  }
};

console.log( data );

mySet.name('sumin');
console.log(data);

mySet.old('25');
console.log(data);

mySet.gender('female');
console.log(data);


// 반복수행( 객체(data) 안에 임의변수)
for (sam in data) {
  console.log(sam + ':' + data[sam]);
}

var js = 'javascript';
var jsArr = js.split('').reverse().join('');
console.log(jsArr);

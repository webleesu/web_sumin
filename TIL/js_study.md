## js 기본 규칙

1. script의 작성위치는 body의 끝(바로 전)에 src속성으로 불러오기

2. 주석은 한줄 주석(//), 여러줄 주석( /* */ )

3. 변수 선언은 var를 먼저 선언(한번 선언한 이름은 다시 var를 사용하지 않음)

4. ; 작성위치 - 변수 선언 또는 값 대입시, 함수실행, 메소드 실행

5. 변수는 일부 사용되는 용어를 피해서 작성

6. 호이스트 현상이 있으니 (변수를 선언하기도 전에 해당 변수가 미정의 되었다. 라는 의미) 유의

7. js는 다소 복잡한 구조들로 보이고 혼란이 있을 수 있으니 꼭 들여쓰기, 괄호체크 필수!



#### 작업의 순서

1. 변수 선언
2. 함수 정의
3. 기능 구현



#### 호이스트(hoist)현상

 호이스트(hoist) 현상이란, 변수 또는 함수를 만들 때 생성된 위치보다 이전에 호출/수행하면 

 그 내용이 에러가 아니라 무언가를 도출되게 만든다는 것

 변수/함수가 이름/기능이 상단으로 가상으로 끌어올려져서 처리되기 때문에.



#### 예약어

- 예약어 : 변수명으로 사용할 수 없는 용어는 미리 선정해놓은 용어 

- 예약어 후보 : name

- 예약어 및 키워드

```
abstract, arguments , boolean , break , byte, case  , catch , char  , class*  , const, continue  , debugger  , default , delete  , do, double  , else  , enum* , eval , export*, extends*  , false , final , finally , float, for , function  , goto  , if  , implements, import* , in  , instanceof  , int , interface, let , long  , native  , new , null, package , private , protected , public  , return, short , static  , super*  , switch  , synchronized, this  , throw , throws  , transient , true, try , typeof  , var , void  , volatile, while , with  , yield
```



- *는 ES6에서 추가된 예약어

- 위 예약어 및 키워드 외에도 매~~~우 많으로 변수명을 설정하는 가장 쉬운방법은

  1. 의미없는 변수는 사용하지 말것 (단, 숫자나 단순 값을 가져오기 위한 상황 제외)

  2. 각 변수를 'camelCase방식'으로 사용할것 

  3. js에서는 대시라인방식(-), 언더스코어(_) 방식의 이름을 권장하지 않음

 

#### ; 사용

- ;사용위치  

1. 변수 할당 또는 변경;  

2. ....기능();





## 데이터 타입

#### 기본형

- **숫자**(number) : js에서는 실수, 정수 구분없이 숫자

- **문자**(string) : 문자는 반드시 ' ' 내부에 글자를 작성하는 형태이며, 숫자로 보이더라도 ' ' 내부에 있으면 문자

- **논리형**(boolean) : 참(true), 거짓(true)을 의미하는 결과물을 도출 - true, false는 문자가 아님
  - 결과를 true/false로 확인하여 처리하지만, 그 결과를 확인하는 검증이 매우 많다.
  - `!` : 다르다
  - `===` : 일치한다(형태입까지)
  - 존재하는 값에 !를 붙이면 값이 없다는 의미로 -> false
    - 본 의도는 값이 있느냐 없느냐 판단용도로 쓰면 ! 한번더
    - `console.log(!!n)`

- **undifined** : 값이 지정되지 않은 상태, 변수나 그 무엇은 존재/유지

- **null** : 값이 없거나 값 전달시 없는 값



#### 특수형

다른 프로그래밍언어와 다른점 중 대표적 하나는 객체 내부에 배열을 담거나, 함수를 담을 수 있다.

Object/function 형타입은 단순 한가지의 개념을 가지고 있는 것이 아니고 여러 형타입을 담는 복합성의 특징

그렇기에 Object/function 형타입으로 사용할 변수처리는 참조변수 개념으로 처리

- **객체(배열/객체)**

  - **배열**(array) : html문서에서 말하는 ol처럼 여러개의 목록으로 [] 안에 내용을 나열하는 것

    - ```js
      var arr = ['키보드', '마우스', '태블릿', '모니터', '노트북', '웹캠'];
      console.log( arr, typeof(arr) );
      /* 
      0: "키보드"
      1: "마우스"
      2: "태블릿"
      3: "모니터"
      4: "노트북"
      5: "웹캠"
      length: 6
      */
      console.log( arr[3] ); // 모니터
      
      arr[5] = '마이크'; // 웹캠 -> 마이크
      console.log( arr[5] ); // 마이크
      ```

    - new Array()를 이용하여 배열을 생성하는 방식은 권장하지 않는다. -> 바로 [] 작성 후 바로 수행

    - `push` : 배열 맨 뒤에 추가

    - `unshift` : 배열 맨 앞에 추가

    - `pop` : 배열에서 마지막 하나를 제거

    - `shift` : 배열의 맨 앞 하나를 제거

    - ```js
      arA.push('커피');
      arA.push('쥬스');
      arA.push('밥');
      arA.unshift(5);
      arA.unshift(0);
      arA.unshift(0000);
      
      console.log( arA ); // [0, 0, 5, '물', '약', '커피', '쥬스', '밥']
      
      arA.pop(); // [0, 0, 5, '물', '약', '커피', '쥬스']
      arA.shift(); // [0, 5, '물', '약', '커피', '쥬스']
      ```

  

  - **객체**(object) : 객체: 배열처럼 나열하기는 하지만 순서는 없고, 해당하는 목록에 대한 정의를 하는것으로 html의 dl/css형태의 개념과 같다. {} 내부에 여러개의 내용을 담아서 그룹화 시킨다.
    - `obj.apple = 'iphone';`  : obj 뒤에 `.`하고 이름
    - `obj['한국 야쿠르트'] = '건국우유';` : 띄어쓰기가 있을땐 대괄호로 묶고 따옴표로 처리 / `.`없이 이름



- **함수**(function) : 바로 실행시키거나 내용을 담는 기능이라기보다는 어떠한 행동을 처리하기 위해 만들어놓은 묶음
  - `function(){}` : 함수의 기본 형태
    - `function 이름(){}` : 함수 선언식 (기명함수)
    - `var 변수명 = function(){}` : 함수 표현식 (익명함수)
  - (선언식, 표현식, 즉시실행함수)
  - return 마지막에 작성하는것으로 어쨋든간에 최종 결론
  - 즉시실행함수 : 익명함수의 기다림 없이 바로 실행
    - `(function(){})();`
    - `(function(){}());`



> js는 순서를 첫번째를 0부터 처리



#### 데이터 타입 관련 함수

- `typeof(literal)` : 형타입을 파악하는 기능

```js
var num = 7;
console.log( num, typeof(num) );
```

- `paseInt(변수)` : 문자형 숫자를 정수형 숫자로 변환
  - 50.7 -> 50 / 93.1% -> 93
- `paseFloat(변수)` : 문자형 숫자를 소수점형 숫자로 변환
  - 50.7-> 50.7 / 93.1% -> 93.1
- `Number(변수)` : NaN / Not a Number(숫자인걸 알지만 무슨 숫자인지 알지 못함)
  - 문자든 숫자든 관계없이 모두 숫자로 변환처리
- 위 세개 함수 모두 첫글자부터 숫자가 아닌 문자가 있으면 NaN처리
- **Math** 함수
  - `Math.ceil()` : 올림처리
  - `Math.floor()` : 내림처리
  - `Math.round()` : 반올림처리
  - `Math.random()` : 0~1까지의 난수
    - `parseInt( Math.random() * 10 )` : 1~10까지 랜덤으로 숫자 출력
  - `Math.abs()` : 절대값





#### 스코프(범위)

- 전역변수 : 광범위한 곳에서 다 사용 가능한 변수
- 지역변수 : 일부에서만 사용가능한 변수
  - ex) 함수 내부에 선언한 변수



**js에서 id명을 선택하는 방법**

- `document.getElementById(id이름);`
- `document.querySelector(css와 동일한 선택자);`

**js에서 요소를 생성하는 방법**

- `document.createElement();` 
  - 요소만 생성
  - 생성해서 어딘가에 넣을 준비
  - `document.createElement('div');`
- `선택자.innerHTML = '요소';` 
  - 요소를 생성하여 선택자 내부에 넣은것
  - 기존 선택자 내부에 존재하는것을 삭제 후 처리
  - `선택자.innerHTML = '<div></div>';`
- `선택자.append(요소);`
  - 선택자 내부 뒤에 요소를 삽입 (단, text형태는 글자로 삽입)



#### 할당

`+=` : 자기 자신에게 값을 할당/연산

- `n += 60;` 은 `n = n + 60;`과 같은 의미
- `-=`
- `*=`
- `/=`



#### 증감

`++` : 1씩 늘어남

- `n++` : 결과 도출 후 1 더하기 / 후치
- `++n` : 1 더한 후 결과 도출 / 전치

`--` : 1씩 줄어듬



#### 비교

- `a === b` : type 형식까지 동일한지 여부 (같으면 true / 다르면 false)

- `a !== b` : type 형식까지 다른지 여부 (다르면 true / 같으면 false)

- `a < b` : a가 b보다 작은가? (작으면 true / 크거나 같으면 false)
  - `a <= b` : a가 b보다 작거나 같은가? (작거나 같으면 true / 크면 false)

- `a > b` : a가 b보다 큰가? (크면 true / 작거나 같으면 false)
  - `a >= b` : a가 b보다 크거나 같은가? (크거나 같으면 true / 작으면 false)

- `||` : 또는 (or) / 둘중 하나 이상 참이면 true
  - `|` : 0/1로 결과 도출

- `&&` : 그리고 (and) / 둘다 참이면 true
  - `&` : 0/1로 결과 도출
- `!` : 부정(반대)



#### 삼항연산자

`(조건)? 참 : 거짓;` : 삼항연산자 기본 형태



#### 배열

- 참조변수 : 원본의 데이터는 따로 두고 그 값을 공유하여 체크

  - `var arr = [];`

- 이중배열

  - ```js
    var arr = ['과일', '고기', '깐풍기', '회', '냉면'];
    var arr2 = ['포도', '사과', '배', '감', '귤', '자몽'];
    var arr3 = ['냉면', '라면', '우동', '회냉면', '쫄면', '밀면', '야끼우동', '국수'];
    
    var arrList = [arr, arr2, '회', arr3];
    ```

  - ```js
    console.log(arrList[2], arrList[0][3]); // 회 찾기
    console.log(arrList[3][0], arrList[0][3]); // 냉면 찾기
    ```

- ```js
  // 배열 예시
  
  var phone = '010-1234-5678';
  var addr = '서울시 영등포구 여의도동 kbs홀 본관 402호';
  var myArr = phone.split('-');
  var myAddr = addr.split(' ');
  console.log(myArr, myAddr);
  console.log(myArr.join('. '), myAddr);
  ```



#### 객체

- `new` : 원형의 형태를 복제한다는 의미

  - `var objOrigin = new Object();`

- `obj = {meat: '채끝살', fruit: '머루포도', '국수': '쫄면', 'mobile phone': 'samsung'};`

  - meat는 property, 채끝살은 value

  - 한글은 property도 되도록 ' '로 묶기

  - 띄어쓰기 있으면 ' '로 묶기

  - 객체 내에는 ' '를 써도 되지만 웬만하면 " "로 사용하기 -> 추후 json 때문에

    - `{"meat": "채끝살", "fruit": "머루포도", "국수": "쫄면", "mobile phone": "samsung" };`

  - ```js
    console.log(obj.fruit); // 기본적인 방
    console.log(obj["mobile phone"]); // 띄어쓰기가 있을 경우
    ```

  - 이중객체 가능

#### 배열+객체

```js
var drink = [
  {'coffee': ['esspresso', 'americano', 'latte', 'mocha', 'choco latte']},
  {'alcole': ['맥주', '소주', '막걸리', '청주', '데낄라']},
  {'juice': ['오렌지', '포도', '자몽', '망고']},
  {'tea': ['black first', 'green', 'red', 'lemon', 'elgray', 'papermint']},
  {'ade': ['자몽', '키위', '레몬']}
];

console.log( drink[3].tea[5] ); // 페퍼민트
```

- 객체 내부에 함수사용도 가능

  - ```js
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
    
    mySet.name('sumin');
    mySet.old('25');
    mySet.gender('female');
    
    console.log(data);
    ```


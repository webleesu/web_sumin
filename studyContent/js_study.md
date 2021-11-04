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

- **객체(배열/객체)**
  - **배열**(array) : html문서에서 말하는 ol처럼 여러개의 목록으로 [] 안에 내용을 나열하는 것
  - **객체**(object) : 객체: 배열처럼 나열하기는 하지만 순서는 없고, 해당하는 목록에 대한 정의를 하는것으로 html의 dl/css형태의 개념과 같다. {} 내부에 여러개의 내용을 담아서 그룹화 시킨다.
- **함수**(function) : 바로 실행시키거나 내용을 담는 기능이라기보다는 어떠한 행동을 처리하기 위해 만들어놓은 묶음
  -  (선언식, 표현식, 즉시실행함수)



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
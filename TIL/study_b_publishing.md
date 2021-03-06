## 능력단위 : 웹퍼블리싱

## 21.09.14

#### html

`<!-- -->  주석`  첫번재 줄에 주석 넣으면 오류

`index.html` : 최초 인식하는 파일

단축키 `ctrl + [` : 들여쓰기

​			`ctrl + ]` : 내어쓰기

```html
    <p>내용을 작성할 경우, 필요시 강조의 표현을 사용을 하는 경우가 있다.</p>
    <p>
      <strong>강제성을 처리</strong>하고자 하는 강조의 경우, <br />
      <em>권유</em>의 강조, <br />
      기존 내용을 <del>처리완료</del>의 의미를 가지는 강조 <br />
      내용을 <ins>인식</ins>하게 하는 강조,
      <mark>내용을 형광펜으로 체크하는 듯한 형태</mark>
    </p>
```

```html
    <p>
      사용률이 줄거나 의미가 변해서 다른 의미로 사용되거나, 아예 삭제된 기능도 존재 <br />
      <b>굵은 글씨</b>를 표현하는 요소 <br />
      <i>기울임</i> 글씨를 표현하는 요소 이모티콘/아이콘의 의미로 감정의 표현 <br />
      <s>줄긋기</s>를 표현하는 요소는 삭제된 것 <br >
      <strike>줄긋기</strike>를 표현하는 요소도 삭제된 것 <br />
      <u>밑줄</u>을 처리하는 요소
    </p>
```

- `div` : 블럭요소
  - 블럭 안에 인라인 가능

- `span` : 인라인 요소
  - 인라인 안에 인라인 가능
  - 인라인 안에 블럭 기본적으로 불가능

- `<a href="">내용</a>` : a태그는 안에 내용이 없으면 영역이 안잡혀 클릭이 불가능, 이유불문 내용 써주기
  - target="_self"` 은 기본속성, 안써도 따라옴
  - a의 target 속성값
    - _self : 현재 창에서 열기
    - _blank : 새 창에서 열기
    - _parent : 현재 창의 상위프레임에서 열림
    - _top : 제일 상단 프레임에서 열림

- `<img src="" alt="">` : img태그는 src, alt 가 같이 따라옴



#### cli

`touch` : 파일 생성

`rm -rf` : 파일/디렉토리 강제삭제

`mkdir` : 폴더 생성

`makir -p` : 경로가 여러개라도 강제로 디렉토리 생성





---

## 21.09.15

#### html

class 이름에 띄어쓰기 하면 이름 두개됨

target="_blank" : 새창에서 띄우기 `<a target="_blank" href=""></a>`



#### list

- `<li>` 리스트를 뜻함

- `<ul>` 순서가 없는 리스트 (불릿기호)
  - `ul`안에는 자식으로 `li`만 가능

- `<ol>` 순서가 있는 리스트 (1, 2, 3, ...)

- `<dl>` 제목이 있는 리스트
  - `<dt>` 제목
  - `<dd>` 내용 - 한 탭 정도 들여쓰기

리스트 내부에는 반드시 `li`요소만 작성이 가능!!

`dl`의 경우에는 `dt/dd`의 요소만 작성 가능

다른 태그를 쓰고 싶다면 `<li><p></p></li>` 처럼 내부에 사용해야 함

- 다단리스트는 최대 3단계 권장



#### style

```css
<style>
      div {
        background-color: rgb(252, 232, 252); 
        border-width: 1px; border-color: #333; border-style: solid;
      }
      .ex_part {background-color: violet;}
</style>
```

```css
	<style>

      #wrap {
        width: 800px;
        border-radius: 8px;
        margin: auto; padding: 20px;
        box-shadow: 5px 5px 5px rgba(0,0,0,3);
        background-color: #dcf;
      }

      div {width:500px;}
      .ex_part {background-color:#fdf;}
      .other_part {border-radius: 5px;}
    </style>
```

````css
h1 { width: 200px; height: 50px; background-color: #ccf;}
h1 a { display: block; width:100%; height: 100%; color:#973; text-decoration: none;}
````

- 주석처리할때 /* */ 는 그냥 주석 /** */ 처럼 *이 두개들어가면 암묵적으로 설명
- class 를 적용시킬땐 class 이름 앞에 `.` 적음

- id를 적용시킬땐 id 이름 앞에 `#` 적음

- `<div>` 는 블럭요소
  - 블럭요소에서 `display: inline;` 하면 강제로 inline 형태로 변경 가능

- `<span>` 은 인라인 요소
  - 인라인 요소에서 `display: block;` 하면 블럭 형태로 변경 가능

  - `inline-block` : 블럭처럼 height는 갖지만 인라인처럼 width 는 갖지 못함/잘 사용 안함

- 기본 inline-block 요소 : img, button, input, select, textarea

- display 를 두번 사용하면 위에 display는 삭제처리

- 글씨 색은 다른거 쓰지말고`color` 만

- 자손선택자
  - 어느 부모 안의 자손만 선택해서 사용할 경우 `h1 a{ display: block; width:100%; height: 100%; color:#973;}` 처럼 한칸 띄고 사용

  - `.ex_part ul > li ` 에서 > 은 자손 선택자 라는 뜻

- `section.ex_part > h2 { color: #333;}` section 과 뒤에 class 이름을 붙이면 동급 (띄면 자식)
- 하나의 요소를 선택하여 css를 적용 : 타입/요소 선택자
  - ex: div {} || p {} || a {} || li {}
- 요소 (스페이스 요소를 선택하여 css적용 : 자손(후손) 선택자) 
  - ex: ul li {} || ol li {} || div a {} || #box li {} || .test a {}
- 요소 > 요소 선택자 : 자식 선택자.
  - ex: ul > li {} || div > h3 {} || #box > h2 {}
- id/class : id -> #id명 , class -> .class명

* 전체선택자 : 가급적 사용 x 



#### cli (git-bash)

`\` : window에서 폴더 이동

`/` : linux/unix(mac) 에서 폴더이동

`ipconfig` : ip주소 찾기

`컨트롤 insert` : 복사

`pwd` : 현재위치

`cd ..` : 한단계 위 디렉토리로

`cd -` : 이전 위치로

`ls` : 현재위치에서 목록보기

하드 디렉토리는 이동할때 하드 이름 뒤에 `:` 붙이기

`clear` : 화면 정리

`start .` : 해당 디렉토리 열기

`mkdir` : 디렉토리 만들기

`ls -a` : 숨겨진 모든 파일/디렉토리포함 리스트 보기

`cd /` : 현재위치에서 최상단

`cd ~` : 

`whoami` : 컴퓨터 이름 확인

`history` : 지금까지 썼던 명령어

- `!숫자` : 해당하는 라인의 명령어 수행

`touch` : 파일 만들기

`&&` : 명령어 한번에 수행

`ll` : 

`mv` : 파일 이동 (mv '이동할 파일이름' '이동할 디렉토리')

​		파일 이름 변경 (mv '변경할 파일' '변경할 파일 이름')

`cp` : 복사

- `cp -r 디렉토리 이름` : 디렉토리 안에 파일이 있어도 강제로 복사해라



#### 단축키

| 단축키                                                       |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ctrl + shift + l (L)                                         | 같은 단어 감싸기                                             |
| ctrl + shift + P (view -> comment palette) 하고 wrap검색 -> 태그 | 자동으로 넣어짐                                              |
|                                                              | ctrl + alt + = : 에 기능 넣어놓음                            |
|                                                              | 내부에 또다른 태그 넣고싶으면 > 넣고 태그 넣으면 계속 내부로 넣어짐 |
| ctrl + alt + i                                               | 숫자 자동으로 맞추기                                         |
| ctrl + enter                                                 | 밑에줄 엔터                                                  |
| shift + ctrl + enter                                         | 위에줄 엔터                                                  |
| shift + alt + 방향키                                         | 그 줄 끝으로 전체선택                                        |
| alt + 방향키(위,아래)                                        | 위 아래 줄 변경                                              |
| 선택 + shift + delete                                        | 잘라내기                                                     |



---

## 21.09.16

#### html

- `#` : 최상단으로 이동 `<a href="#"></a>`

- `#id이름` : css에서 적용하는것 처럼 a태그에 `href`에 #id이름 적용 가능(**마이크로 링크**)
  - 마이크로  링크는 id만 가능/class는 불가능
- class명에 **,** 넣으면 에러
- id명에 **띄어쓰기** 넣으면 에러
- html에서는 `<` `>` `&` 절대 사용 불가
  - 특수문자를 삽입하는 코드 : entity code
    - < : `&lt;` 으로 사용
    - `>` : `&gt;` 으로 사용
    - & : `&amp;` 으로 사용
    - &#8361; :  `&#8361;` 으로 사용
- emmet에서 `$`는 숫자를 뜻함



#### style

- `min-height` : 최소한의 높이 설정
- `border-spacing` : 보드 사이의 간격 조정 (오늘 table에는 0 이용)
- `border-collapse: collapse;` : 보더 선과 선 사이를 굳히기 (table)
- `border-color : transparent;` : 투명하게
- `opacity` : 투명도 / 100%을 1로 표현 



#### table

- `<table> </table>` : 으로 사용
  - `<caption>제목</caption>` : 테이블의 제목
    - 코드작성은 `<table>`안에 들어가지만 실제 보이기는 테이블 밖에 제목 써짐
  - `summary` 는 설명해주는 옵션 `<table summary="">` / 쓰지 말라고 권장 but 업계에서는 사용
  - `<tr></tr>` : 가로 한줄 (행) / <u>tr은 border 가 없음</u>
    - `<td></td>` : `<tr>` 안의 하나하나의 셀
  - `<thead> </thead>` : 테이블 머리
    - `<th></th>` : `<thead>` 안의 셀
  - `<tbody> </tbody>` : 테이블 내용
  - `<tfoot> </tfoot>` : 테이블 하단 / 생략가능
  - `colspan` : 가로로 셀 합치기
  - `rowspan` : 세로로 셀 합치기 





#### 기타

- favicon : 탭메뉴 옆에 뜨는 아이콘

```
  <link rel="shortcut icon" href="../favicon.png" type="image/png" />
  <link rel="apple-touch-icon" href="../favicon.png" />
```

- 두번째 줄은 애플에서만

- favicon은 svg불가능



- css 적용 우선순위 공부하기



---

## 21.09.23

[구형브라우저 대처](modernizr.com)



#### html

- class명 옆에 `hidden`  속성 : 속성이 안보이게 숨겨줌

- margin 
  - 외부여백 : 요소와 요소 사이의 공백
  - 부모가 border가 없으면 margin-top은 안먹음
  - float 가 있으면 두개 요소의 맞닿은 margin이 합쳐짐
  - `{ margin: 10px 30px;}` : 위,아래 : 10px / 오른쪽, 왼쪽 : 30px
  - `{ margin: 10px 50px 30px;}` : 위 : 10xpx / 오른쪽, 왼쪽 : 50px / 아래 : 30px
  - `{ margin: 5px 20px 40px 70px;}` : 위 : 5px / 오른쪽 : 20px / 아래 : 40px / 왼쪽 : 70px
  - 시계방향으로 돌아감
  - `{ margin: 20px; margin-bottom: 10px;}` : bottom 은 10px 나머지는 20px
    -  최종적으로 쓴 스타일이 적용됨
  - `{ margin: auto;}` : 위, 아래는 적용 안됨/ 가로만 auto 적용
  - `{ margin-left: 10%; margin-top: 10%;}` : 퍼센트는 사용 안함

- padding
  - `{ padding: 20px 40px;}` : 위, 아래 : 20px / 오른쪽, 왼쪽 : 40px
  - `{ padding: 10px 40px 5px;}` : 위 : 10px / 오른쪽, 왼쪽 : 40px / 아래 : 5px
  - `{ padding: 5px 10px 20px 40px;}` : 위 : 5px / 오른쪽 : 10px / 아래 : 20px / 왼쪽 : 40px
  - `{box-sizing: border-box;}` : 테두리 선까지 박스로 생각해서 정해진 사이즈로 맞춰라



#### css

`background-color: transparent;` : 배경색 투명하게

float : 부모의 높이값이 정해져있다면 clear 같은 것 불필요

clear: both; 는 block요소만 먹음 / inline은 안먹음

`background-image: linear-gradient(45deg, #07a, #5a7);` : 배경을 45도 각도로 2개의 컬러로 그라데이션을 줌



---

## 21.09.24

#### border

- border-style : soild || dotted || dashed || ridge

- `.b_02 { border: 10px dotted #fa0; }` : 한줄로 사용 가능 / width, style, color 순서

- `{box-sizing: border-box;}` : border 까지 박스 안쪽으로 넣어서 정해진 크기로 만듬

- `{background-clip: content-box;}` : border가 박스 밖에 생김 (padding 적용시키면 border와 내용물이 그만큼 떨어짐)

- `{background-clip: padding-box;}` : content와 같지만 padding도 내용물과 같은 색으로 처리

- background-clip: border-box || padding-box || content-box || inherit

  - inherit : 부모가 갖고 있는 속성을 따라감

- ```
  .b_05 {
    border: 5px soild #fac;
    border-top: 4px dashed #aff;
    border-left-color: #afc;
    border-right-width: 10px;
    border-bottom-width: 0;
  }
  ```

  사방에서 하나하나 조절 가능





#### outline

- 기본적으로 focus 잡혔을때 테두리
- margin, padding 에 영향을 주지 않음





#### nth 선택자

- `클래스명:nth-child() {}` : (숫자) 클래스 내부의 숫자의 자손을 선택하는것
  - css이기 때문에 숫자 그대로 순서 // js는 1이 두번째
  - (odd) / (2n-1) : 홀수
  - (even) / (2n) : 짝수
  - (2n+1) : 두개 중 첫번째꺼 / (3n+1) : 세개 중 첫번째꺼
  - `클래스명:first-child {}` : 첫번째는 nth 대신 first 사용할 수 있고 () 생략
  - `클래스명:last-child {}` : 마지막은 nth 대신 last 사용할 수 있고 () 생략

- `클래스명:nth-last-child() {}` : 뒤에서 부터 (숫자) 번째 선택

- `:nth-child(n+4):nth-child(-n+8)` : 4번째부터 8번째 까지 **뒤에n은 - 붙임**

  - `:nth-child(n+4)` : 4번째부터 전부 다
  - `:nth-child(-n+8)` : 8번째까지 전부 다
  - `:nth-last-child(-n+3)` : 뒤에서부터 3번째까지

- `dt:nth-of-tyle(2)` : dt 중에서 2번째 (클래스 명 안먹음/ dt 같은 타입을 써야함) 

- ```
  dd:first-of-type {}
  dd:last-of-type {}
  dd:nth-last-of-type() 
  ```

  전부 존재





#### css

- `.b_06 button { cursor: pointer; }` : button에 올리면 손가락 모양
- `{ list-style: none; }` : 리스트 마커를 없앨 수 있는 코드
- `text-decoration: none / underline;` : 글씨 데코 없애기 / 밑줄
- `transition: 300ms ease;` : 0.3초 애니메이션
- `::first-letter` : 해당 문자의 첫번째 글자
- `text-transform: uppercase;` : 대문자로

- `calc()` : 연산하는 코드 (*+-/)앞 뒤로 **꼭 띄어쓰기**

- 1rem = 16px



#### html

- `<a href="#" title="">` : 타이틀은 마우스 올렸을때 말풍선



---



## 21.09.27

##### 속성작성요령

- 선택자 { 

  ​	존재유무/형태 ► display, overflow

  ​	위치 ► position

  ​	크기 ► width ⇒ height 

  ​	공간 ► margin ⇒ box-sizing ⇒ padding ⇒ border

  ​	서체 ► font-weight, font-style, font-size, line-height, family....

  ​	배경처리 ► background-image, repeat, posion, size, clip ....

  ​	기타효과 ► shadow, ....

  ​	애니메이션 

  }



---



- float 사용하면 속성은 block로 바뀜

- background-clip : 배경색상을 칠하는 범위
  - content-box : 내용만 칠해라
  - padding-box : padding의 범위까지 칠해라
  - border-box : 외곽선까지 칠해라
  - 구형브라우저에서는 안되는 경우 많음

- line-height : 픽셀 
  - 행간 / 한 줄의 간격을 해당 픽셀만큼 맞춰줌 ( text를 중간쯤에 넣어줌)
  - 한 줄일 경우에만 사용 할 수 있음
  - 워드나 한글에서 쓰는 첫줄은 움직이지 않는 행간은 영어로 'leading' - 웹에서는 없음
  - ![](C:\work\a_sumin\web_sumin\studyContent\images\line-height.png) line-height를 분홍색 박스의 height 만큼 넣어줌
  - vertical align : 세로정렬을 뜻하지만 <u>잘 사용은 안함</u>
  - vertical align 속성 :![](C:\work\a_sumin\web_sumin\studyContent\images\vertical-align.png)





aria : 더 공부하기



---



## 21.09.28

#### html

- abbr 태그 : 축약형을 뜻하는 태그

  ex) `<abbr title="hyper text markup language">html</abbr>`

  - 마우스 올리고 있으면 뜻이 나타남

    ![](C:\work\a_sumin\web_sumin\studyContent\images\abbr.png)



#### semantic 태그 (의미가 있는 태그)

- semantic 태그를 사용하면 role은 삭제

- h태그 이용하여 이름 달아줘야 함 (footer는 자율)

- reset.css 에 `display: block;` 로 활용 (구형브라우저 / html5에 새로 생긴 태그)

- semantic 태그 종류

  ✔`<header> </header>` : 웹페이지의 상단에 주요 정보를 담고있는 부분

  ✔`<footer> </footer>` : 웹페이지의 하단에 주요 정보를 담고있는 부분 (기반이 되는 정보 / 회사의 정보)

  ✔`<article> </article>` : (기사, 최신 소식) 등

  ✔`<section> </section>` : 요약본, 광고, 임시목차

  ✔`<nav> </nav>` : 네비게이션

  ✔`<aside> </aside>` : 있어도 없어도 괜찮은 태그 / (최근본, 장바구니, 탑으로 이동)

  ✔`<main> </main>` : 본문에 들어가는 태그를 단순히 묶어주는 용도

  ✔`<figure> </figure>` : 조형물에 대한 설명 (보여주는것은 다 가능)

  ​	`<figcaption> </figcaption>` : figure 의 제목

  ```
  <figure>
  	<figcaption>이미지에 대한 설명</figcaption>
  	<img src="" art="">
  </figure>
  ```

- section 내부에는 작은 웹 구성이 가능 (header, article, footer 등 가능)



---



## 21.09.29

#### position

- position

  - static : 자신의 위치를 지킴
  - realtive : 자신의 위치를 지키고 위치 설정해주면 현재 자신의 자리로부터 배치됨, (자기자신을 기준으로 맞춤)
  - absolute : 자신의 위치를 잃어버리고 위치 설정해준 곳으로 고정됨, **스크롤 따라가지 않음**
  - fixed : 자신의 위치를 잃어버리고 위치 설정해준 곳으로 고정됨, **스크롤 따라감**

- 위치 설정

  - top
  - left
  - right
  - bottom
  - z-index : 단위x

- html은 나중에 쓴 코드가 위에 배치됨

  <img src="C:/work/a_sumin/web_sumin/studyContent/images/position_1.png" style="zoom:50%;" />









#### css

css 불러오는 순서 : font/icon -> reset.css -> common.css -> design.css

```
body {

 --color-gray1 : #c4c4c4;

}
```

- css내부에 body안에  `color-gray1` 이라는 변수 선언

  - 사용 : `background-color: var(--color-gray1);` 

- 변수가 적용되지 않는 브라우저가 있음

  - ```
      background-color: #c4c4c4;
      background-color: var(--color-gray1);
    ```

    컬러를 사용해주고 밑에 변수를 사용





#### 기타

IR : image replace 알아보기



---



## 21.09.30



position 에서 기준을 잡아주는 속성은 relative

그 기준에 맞춰 포지션을 넣는것은 absolute



`+` : 형제선택자

position 안에 position 또 사용 가능 / relative 기준 잡아놓은것 잘 확인하기

- 인접형제선택자 `+` : 선택요소 바로 뒤에 오는 요소

- ```html
  <dl class="siblings">
      <dt>dt-title</dt>
      <dd>data_01</dd>
      <dd>data_02</dd>
      <dd>data_03</dd>
      <dd>data_04</dd>
  
      <dt>dt-title</dt>
      <dd>data_01</dd>
      <dd>data_02</dd>
  
      <dt>dt-title</dt>
      <dd>data_01</dd>
      <dd>data_02</dd>
      <dd>data_03</dd>
  
    </dl>
  ```

- ```css
  .siblings {
    width: 400px; height: 800px;
    margin: auto;
    border: 1px solid #777;
  }
  
  .siblings:hover dt {
    background-color: #ccf;
  }
  
  .siblings > dt:hover + dd {
    background-color: #faa;
  }
  ```

  - dl에 마우스 올리면 dt배경색 변경

    <img src="E:\work\a_SM\web_sumin\studyContent\images\sibling_hover1.png" style="zoom : 80%" align="left" />

  - dt에 마우스 올리면 바로 뒤에있는 dd에만 배경색 변경

    <img src="E:\work\a_SM\web_sumin\studyContent\images\sibling_hover2.png" style="zoom : 80%"  align="left" />

    <img src="E:\work\a_SM\web_sumin\studyContent\images\sibling_hover3.png" style="zoom : 80%"  align="left" />





- 형제선택자 `~` : 선택요소 뒤에 오는 조건에 맞는 요소

- ```css
  .siblings > dt:hover ~ dd{
    background-color: #afa;
  }
  ```

  - 마우스를 올린 dt기준으로 뒤에 dd만 배경색 변경

    <img src="E:\work\a_SM\web_sumin\studyContent\images\sibling_hover4.png" style="zoom : 80%"  align="left" />

    <img src="E:\work\a_SM\web_sumin\studyContent\images\sibling_hover5.png" style="zoom : 80%"  align="left" />

  



---



- 핵사코드로 투명도
  - #aa00aa_ _ : 뒷자리에 16진수로 숫자 넣어서 투명도



- `text-transform: capitalize;` : 첫 글자를 대문자로



- 클래스나 id명에 ad, banner 사용 금지 : 광고차단프로그램에 막힘

- copyright 부분을 보통 `address` 사용



- chrome 에서 목차 확인하는 확장프로그램 : 웹스토어 ► outliner 

  ​																						   ► headingsmap : 주소가 localhost일때만 작동



- `box-shadow: 3px 3px 3px #333;` : 그림자의 x좌표, y좌표, 블러, 색상

- `autofocus` : 포커스를 먼저 잡아주기

  ```html
  <button type="button" autofocus>닫기</button>
  ```

  - 구형브라우저는 안먹음
  - 한 문서에 보통 최대 하나만 사용

---



## 21.10.01

#### 시멘틱구조 특징

- 웹페이지의 본문의 성격을 띄는 article/section의 형식은 내부에 다시 header/article/section/nav/aside/footer ... 을 가질 수 있다.
  - section/article은 하나의 작은 웹이란 개념을 갖고있기 때문
- 하지만 header/asdie/footer/nav의 특정 위치나 기능을 자체의 성향을 가지고 있는 요소는 내부에 section/article을 사용할 수 없다.
- header의 경우는 내부에 nav요소를 가질 수 있다.

<img src="C:/work/a_sumin/web_sumin/studyContent/images/semantic.jpg" style="zoom:70%" align="left"/>



#### html

- dl 안에는 꼭 dt와 dd가 있어야함
  - 제목은 있고 내용이 없으면 오류남 (dt는 있고 dd는 없는 경우 - 주로 네비게이션)





#### css

- `list-style-type: decimal;` : 리스트 앞에 숫자 쓰기

  - 영역 밖으로 숫자가 튀어나와서 보임
  - padding-left 주면 들어옴
  - `list-style: decimal;` 도 가능

- list-style 을 주지 않고 before으로도 가능

- ```css
  li::before {
    counter-increment: section;            /* 해당 인스턴스 안에서
                                              section 카운터 값 증가 */
    content: counters(section, ".") " ";   /* section 카운터 값을
                                              마침표(.)로 구분해 결합하여
                                              표시합니다. */
  }
  ```

- 학원에서 실습한 코드

  ```css
    .gallery_area {
      counter-reset: gal_li;
      background-color: #daf;
    }
  
    .gallery_area li::before {
      counter-increment: gal_li;
      content:counter(gal_li) ". ";
    }
  ```

  - 숫자는 increment로 해결 했지만 뒤에 . 은 " "안에 필요한 띄어쓰기 포함해서 넣어줌



- `display: flex;` : 옆으로 정렬 (최신기능이라 구형브라우저 구현 X)
- `justify-content: space-between;` : 플렉스와 같이 쓰면 가로로 사이간격 맞춰줌
- [flex 공부](https://heropy.blog/2018/11/24/css-flexible-box/)



- `:active` : 마우스 누르고 있는 경우(계속)



- headBox 를 상단에 고정 : `position: fixed`
  1. top: 0; 가로 가운데 배치 (전체 가로 꽉차게) : `left: 0; right: 0;`
  2. 다른 요소들 보다 앞에 배치 : `z-index: 100;` z-index로 위로 올려준다
  3. fixed를 처리함으로 인해 다른 요소(형제)들은 ? : 밑의 영역이 올라오기 때문에 상위영역에서 `padding-top`으로 잡아준다. / 반투명으로 보이게 하고싶을 경우는 따라 올라오게 냅둔 후 `rgba()`로 투명도를 조절해준다.
  4. 내부 요소는 가로 1200px 일때 가운데 배치? : 내부요소만 `div`로 묶어준 뒤 고정시켜주고 뒷 배경만 늘어나도록 한다.

---



## 21.10.05

#### git

git bash (cli)로 깃 첨부방법

- `git status` : 깃 상태 보기
- `git add *` : 모든 파일 첨부하기
  - `git add .` : 모든 파일 첨부하기
- `git commint -m " "` : "요약내용"
- `git push` : 푸쉬하기 
- `git reset` : undo와 같은 기능
- `git pull` : pull 받기



#### html

- `&copy;` : &copy; 
- 강조의 표현
  - strong : 강요성(위협, 무조건적인)을 띤 강조 - danger
  - em : 권유성 강조
  - ins : 추가 점부된 내용
  - del : 기존 내용에서 삭제된 것
  - mark : 인식 (형광펜)



#### css

- `text-indent: 10px;` : 첫 줄 10px 들여쓰기
- `transition: height 300ms linear;` : 
  - 단편성을 가진 애니메이션 기법 
  - 높이를 300ms 속도로 일직선으로 보여주기 
  - (알고만있고 사용은 x / 다른 방법 있음)
- `clip: rect(18px, 122px, 92px, 18px);` : top, right, bottom, left 순으로 사각형을 그려 처리
  - clip은 position이 같이 있어야함



---

###### 광고영역 잡기 (가로로 슬라이드)

```html
<!-- .view_area 영역의 위치를 잡기 위한 틀 -->
      <div class="view_area">
        <!-- .view_wrapper 광고영역의 나열 시 범위 -->
        <div class="view_wrapper">
          <!-- .view_content 광고 내용 -->
          <div class="view_content view_01">광고 01</div>
          <div class="view_content view_02">광고 02</div>
          <div class="view_content view_03">광고 03</div>
        </div>
      </div>
```

```css
.view_area {
  width: 100%; height: 100%;
  border: 1px solid #333;
  background-color: #afc;
}

.view_wrapper {
  width: 300%; height: 100%;
  background-color: #fca;
}

.view_content {
  float: left;
  width: calc(100% / 3); height: 100%;
}

.view_01 { background-color: #8D0909aa;}
.view_02 { background-color: #23BE93aa;}
.view_03 { background-color: #9A6DCAaa;}
```

- `.view_wrapper` 에 `margin-left : -100%` 하면 두번째 영역 보기

- `.view_wrapper` 에 `margin-left : -200%` 하면 세번째 영역 보기
- 변수 하나를 선언해서 calc 안에 나누는 숫자를 변수로 지정해버리면 다른곳에서도 그대로 사용 가능





###### 같은자리에 모여있는 형태로 사용 방법

```css
.view_wrapper {
  position: relative;
  width: 100%; height: 100%;
  background-color: #fca;
}

.view_content {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}

.view_01 { z-index: 10; background-color: #8D0909aa;}
.view_02 { z-index: 9; background-color: #23BE93aa;}
.view_03 { background-color: #9A6DCAaa;}
```

- 기준이 되는 요소에 relative
- 보여줄 요소에 absolute
- 처음 보여주어야 하는 요소에 z-index를 주어 앞으로 배치
- 이후에 (뒤에) 오는 요소에는 z-index를 앞에 오는 요소보다 낮은 값으로 주어 뒤에 배치
- 이외의 나머지는 보이지 않도록 처리





#### 기타

[background 속성 공부](https://blog.naver.com/qhfudwl/222465616274)


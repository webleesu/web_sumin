## 능력단위 : 웹퍼블리싱

#### 능력단위 시험

- 시험내용 : 레이아웃 구조 제작하기 (메인페이지 기준 - 고정형으로 이미지 삽입한 레이아웃)
  - 1차: 레이아웃 구조 제작하기 (메인페이지 기준 - 고정형으로 이미지 삽입한 레이아웃)
    - 1280px 보다 큰 규걱에 해당하는 경우 처리
  - 2차 : 레이아웃 구조 제작하기 (메인페이지 기준 - 고정형 레이아웃)
    - 1280px 고정 기준

- 시험시간 : 6시간

---

## 과정내용

## 21.09.14

#### 피드백 1

- 발표
- 수정사항 전반

#### 웹코드

- vscode 설치 - 세팅
  - 마우스 휠
  - 탭인덱스
  - word
  - 테마 (아이콘) - material iccon theme
  - 웹서버 설정 - live sever / browsersync
- 웹 프로토콜 포함 + html 구조/css 개념
  - 제목
  - 내용
  - 리스트
  - 링크
  - 이미지
  - id/class 개념

---

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

- ##### 코딩

  - html
    - [x] list ( 순서없는것, 순서가 있는것, 제목/내용이 있는것 )
    - [x] id/class 개념
  - style 
    - [x] 선택자 ( 모든선택자, 타입선택자, id선택자, class선택자, 부모, 자식 )
    - [x] 사이즈, 색상처리
    - [ ] margin(여백-시각적 공간), padding(여백-내장지방), border-radius(테두리 R값), box-shadow(그림자)
  - cli 
    - 파일 이동(`mv`)/ 파일 복제(`cp`)
    - 목록보기( `ls` , `ls -a` )
    - 화면정리( `clear` ) / 명령어 기록 보기 ( `history`) / 이전명령어 사용 ( `!숫자` )
    - 현재페이지 위치( `pwd` )/컴퓨터 이름파악( `whoami` )

---

### html

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

#### 코딩

- [ ] id/class : id의 역할, class의 역할(?)
- [ ] table (표만들기) - 게시판, 주식, 안내판, 경기표
- [ ] 이미지 + 글쓰기 (float, clear)
- [ ] 문제풀이 1-5



---

### html

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

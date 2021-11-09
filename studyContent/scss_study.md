## sass

#### 변수

- `$`

#### list

- 기본 형식 : `$blue: (#00f, #0af, #0df, #7af);`
- 사용 형식 : `nth($변수명, 숫자)`

#### map

- 기본 형식

  ```scss
  $psuedoCode: (
    "hover": #87f, 
    "focus": #4f3, 
    "active": #fda, 
    "selected": #dfd
    );
  ```

  

- 사용 형식 : `map-get($변수명, key);`



##### 기타

- 예시

  ```scss
  $yellow: #fa0;
  $blue: (#00f, #0af, #0df, #7af); // list
  $psuedoCode: (
    "hover": #87f, 
    "focus": #4f3, 
    "active": #fda, 
    "selected": #dfd
    ); //dic(map)
  ```

- 활용

  ```scss
  background-color: nth($blue, 2);
  &:hover { background-color: map-get($psuedoCode, "hover"); }
  &:focus { background-color: map-get($psuedoCode, "focus"); }
  ```

- 심화

  ```scss
  $coffee: ("esspresso", "latte", "choco", "vanila", "other");
  // #{변수명/숫자} 인터폴레이션 기법으로 내용을 담을 수 있게 처리하는 
  .coffee_#{nth($coffee, 1)} { width: 100%; }
  ```



#### 반복문 (@for)

```scss
// @for $임의변수 from 시작숫자 through 마지막 숫자 {}
// @for $임의변수 from 시작숫자 to 마지막 직전 숫자 {}

@for $key from 1 through 5 {
  .coffee_#{ nth($coffee, $key) } {
    background-color: nth($blue, $key);
  }
}
```



#### @mixin + @include

- 기본 형태

  ```scss
  @mixin 임의변수명(){
    내용
  }
  ```

- 불러오는 기본 형태

  ```scss
  @include 변수명();
  ```

- 활용

  ```scss
  @mixin blind(){
    display: block; width: 0; height: 0;
    position:absolute; z-index: -1; clip: rect(0 0 0 0); overflow: hidden;
  } // @mixin blind();
  
  @mixin bar(){
    &:after, &::after{
      content: ""; display: block; clear: both;
    }
  } // @mixin bar();
  
  @mixin full(){
    display: block; width: 100%; height: 100%;
    @content; // 코드에 추가할 수 있는 기능, 1개의 mixin안에는 1개만 사용 가능
    & > span { @include blind(); }
  } // @mixin full();
  
  .nav_area {
    width: 960px; height: auto;
    & > li {
      float: left; width: auto; height: 30px;
    }
    a { @include full(); { background-color: $yellow;}; } } // background는 위에 @content;때문에 내부로 들어갈 수 있는 것
  
    @include bar();
  }
  ```

  





#### 명령어

- `length(변수)` : 해당 변수의 갯수


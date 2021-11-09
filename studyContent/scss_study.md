## sass

#### 변수

- `$`

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

- 반복문 활용

  ```scss
  @for $key from 1 through 5 {
    .coffee_#{ nth($coffee, $key) } {
      background-color: nth($blue, $key);
    }
  }
  ```

- 


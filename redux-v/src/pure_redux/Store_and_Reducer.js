// import { configureStore } from "@reduxjs/toolkit";
// // Store란? 나의 state data를 넣는 곳
// // state란? 나의 application 에서 바뀌는 data ~ (data가 바뀌는 지점이 어디일지를 생각해보자)
// // redux에는 createStore 라는 함수가 있다. 나의 data 를 넣을 수 있는 장소를 생성한다.
// // (number.innerText = count;) => 우리가 가지고 있는 유일한 changable 한 data!
// // reducer 는 나의 data 를 찾고 수정 하는 함수다.
// // 오직 countModifier 만 data를 modify 할 수 있다.
// // actions 를 통해 count 를 ++ -- 할 수 있다.
// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");
// const countModifier = (state = 0, action) => {
//   //   count ++
//   //   count --
//   return state;
// };
// const countStore = configureStore(countModifier);
// console.log(countStore.getState());

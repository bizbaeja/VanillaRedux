import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// dispatch 와 함께 countModifier 로 메시지가 콘솔로 보내지는 것을 브라우저에서 확인했다.
// countModifier 가 return 하는 것은 모두 data 가 된다.
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countModifier);
// dispatch -> action  으로 보내는 타입은 객체여야 한다.
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });
console.log(countStore.getState());

// 만약 내가 state를 가지면 1이다.

// 1. data 의 store를 만들고.
// 2. dispatch = message를 보내면 된다.

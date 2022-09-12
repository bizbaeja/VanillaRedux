import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 우리는 minus 를 minuus 를 써서 오류에 빠져 혼란을 겪곤 합니다. 그럴땐 변수를 지정해 보아요
number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";
const countModifier = (count = 0, action) => {
  // 많은 if else 보다 switch 문을 써보는 것은 어떨까요?
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
// 왜 이게 맨 뒤에 가면 작동이 안되었을까?? -> 스토어에 저장된 애를 가지고 아래 계산식 들이 열심히 계산을 하는거니까..
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

countStore.subscribe(onChange);

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

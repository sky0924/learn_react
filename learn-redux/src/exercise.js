import { createStore } from "redux";

// Initial State
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// Action
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// Action Creator
const increase = () => ({
  type: INCREASE,
});
const decrease = () => ({
  type: DECREASE,
});
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});
const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// Store
const store = createStore(reducer);

// 스토어의 state가 바뀔 때마다 호출되는 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};

// subscribe(fn)
store.subscribe(listener);

// dispatch(action)
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("바뀐 문장이네요."));
store.dispatch(addToList({ id: 1, text: "첫 번째는 말을 하다 마는" }));

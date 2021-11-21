// Action
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// Action Creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// Initial State
const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

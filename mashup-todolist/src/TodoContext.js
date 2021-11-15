import React, { createContext, useContext, useReducer, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "Synerbab 프로젝트 마무리짓기",
    done: false,
  },
  {
    id: 2,
    text: "React & Redux 공부하기",
    done: true,
  },
  {
    id: 3,
    text: "기업은행 통장 개설하기",
    done: false,
  },
  {
    id: 4,
    text: "휴대폰 요금제 알아보기",
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  contextErrorMsg(context);
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  contextErrorMsg(context);
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  contextErrorMsg(context);
  return context;
}

export function contextErrorMsg(context) {
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
}

import React, { useCallback, useMemo, useReducer, useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';
import produce from 'immer';

function countActiveUsers(users) {
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'sbd0924',
      email: 'sbd0924@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'haneul',
      email: 'sbd0924@naver.com',
      active: false
    },
    {
      id: 3,
      username: 'sky',
      email: 'sky@sngy.io',
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user)
      });
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id !== action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  
  return (
    <UserDispatch.Provider value={ dispatch }>
      <CreateUser />
      <UserList users={ users } />
      <div>active user : { count } { count <= 1 ? 'people' : 'peoples' }</div>
    </UserDispatch.Provider>
  );
}

export default App;

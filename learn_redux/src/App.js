import React, { useCallback, useMemo, useReducer, useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';

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
      return {
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        users: state.users.map(
          user => user.id === action.id ? { ...user,active: !user.active } : user)
      };
    case 'REMOVE_USER':
      return {
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  const [{ username, email }, onChange, onReset] = useInputs({
    username: '',
    email: ''
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    onReset();
    nextId.current += 1;
  }, [username, email, onReset]);

  const count = useMemo(() => countActiveUsers(users), [users]);
  
  return (
    <UserDispatch.Provider value={ dispatch }>
      <CreateUser
        username={ username } 
        email={ email } 
        onChange={ onChange } 
        onCreate={ onCreate } />
      <UserList 
        users={ users } />
      <div>active user : { count } { count <= 1 ? 'people' : 'peoples' }</div>
    </UserDispatch.Provider>
  );
}

export default App;

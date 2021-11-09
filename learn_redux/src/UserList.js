import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{ user.username }</b> <span>/ { user.email }</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'sbd0924',
      email: 'sbd0924@gmail.com'
    },
    {
      id: 2,
      username: 'haneul',
      email: 'sbd0924@naver.com'
    },
    {
      id: 3,
      username: 'sky',
      email: 'sky@sngy.io'
    }
  ];

  return (
    <div>
      <div>
        { users.map((user, index) => (
          <User key={ index } user={ user } />
        )) }
      </div>
    </div>
  );
}

export default UserList;
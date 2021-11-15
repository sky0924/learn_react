import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Users from './User'

function App() {
  const user = {
    id: 1,
    username: 'sky'
  }

  return (
    <ErrorBoundary>
      <Users />
    </ErrorBoundary>
  );
}

export default App;

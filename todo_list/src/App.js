import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import User from "./routes/User";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={ true } component={ Home } />
      <Route path="/detail" component={ Detail } />
      <Route path="/user" component={ User } />
    </HashRouter>
  );
}

export default App;
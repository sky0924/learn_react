import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import User from "./routes/User";
import Login from "./routes/Login";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={ true } component={ Home } />
      <Route path="/detail" component={ Detail } />
      <Route path="/user" component={ User } />
      <Route path="/login" component={ Login } />
    </HashRouter>
  );
}

export default App;
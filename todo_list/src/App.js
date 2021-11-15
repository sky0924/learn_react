import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import User from "./routes/User";
import Login from "./routes/Login";
import Profile from "./routes/Profile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/detail/:id"
          render={(props) => (
            <Detail
              {...props}
              todos={[
                {
                  id: 0,
                  text: "할 일 1. Redux 이해 및 적용하기 ⭐️⭐️⭐️⭐️⭐️",
                  checked: false,
                },
                {
                  id: 1,
                  text: "할 일 2. react-router-dom 이용하기 ⭐️⭐️⭐️",
                  checked: true,
                },
                {
                  id: 2,
                  text: "할 일 3. image upload 기능 구현하기 ⭐️⭐️",
                  checked: true,
                },
                {
                  id: 3,
                  text: "할 일 4. color 추가 및 삭제 기능 구현하기",
                  checked: false,
                },
                {
                  id: 4,
                  text: "할 일 5. user id 및 password 입력 form 만들기 ⭐️",
                  checked: true,
                },
                {
                  id: 5,
                  text: `할 일 6. 두 줄이 넘어가면 어떻게 되는지 테스트할 아주 길다랗고 길다란 문장, 
          크게 나쁘진 않은데 check-mark가 toggle 전환될 때마다 items의 width가 변화함`,
                  checked: true,
                },
                { id: 6, text: "할 일 7. GitHub Page 만들기", checked: true },
              ]}
            />
          )}
        />
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

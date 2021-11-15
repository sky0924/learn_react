import React, { Component } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.push("/user");
  }

  render() {
    return (
      <main className="login">
        <button className="login-back" onClick={this.goBack}>
          <IoArrowBackCircle />
        </button>

        <div className="login-title">로그인</div>
        <section className="login-content">
          <div className="login-item">
            <div className="login-sub-title mg_l_2">아이디</div>
            <input placeholder="아이디를 입력해주세요." />
          </div>
          <div className="login-item">
            <div className="login-sub-title mg_l_1">비밀번호</div>
            <input placeholder="비밀번호를 입력해주세요." />
          </div>

          <div className="login-button">
            <button onClick={this.goBack}>확인</button>
          </div>
        </section>
      </main>
    );
  }
}

export default Login;

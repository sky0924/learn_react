import React, { Component } from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.history.push('/');
  }

  render() {

    return (
      <main className="login">
        <button className="login-back" onClick={ this.goHome }>
          <IoArrowBackCircle />
        </button>
        
        <div className="login-title">
          로그인
        </div>
        <section className="login-content">
          <div className="login-item">
            <div className="login-sub-title mg_l_2">아이디</div>
            <input size="25" />
          </div>
          <div className="login-item">
            <div className="login-sub-title mg_l_1">비밀번호</div>
            <input size="25" />
          </div>

          <div className="login-buttons">
            <button onClick={ this.goHome }>확인</button>
          </div>
        </section>
      </main>
    );
  }

}

export default Login;
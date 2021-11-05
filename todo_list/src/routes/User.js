import React, { Component } from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';
import './User.css';

class User extends Component {

  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.history.push('/');
  }

  render() {
    return (
      <main className="user">
        <button className="user-back" onClick={ this.goHome }>
          <IoArrowBackCircle />
        </button>

        <div className="user-title">
          나의 정보

          <div className="user-buttons">
            <button>로그아웃</button>
          </div>
        </div>

        <section className="user-content">

          <div className="user-profile">
            <div className="user-sub-title">
              프로필
              <button>변경</button>
            </div>
            <div className="user-item">사진</div>
            <div className="user-item">이름</div>
            <div className="user-item">이메일</div>
            <div className="user-item">설명</div>
          </div>

          <div className="user-setting">
            <div className="user-sub-title">
              설정
            </div>
            <div className="user-item">
              언어
            </div>
            <div className="user-item">
              테마
            </div>
          </div>
        </section>
      </main>
    );
  }

}

export default User;

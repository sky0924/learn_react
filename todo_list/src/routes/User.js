import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import './User.css';

class User extends Component {

  render() {
    return (
      <main className="user">
        <Link className="user-back" to="/"><IoArrowBackCircle /></Link>

        <div className="user-title">
          나의 정보

          <div className="user-buttons">
            {/* <button>회원가입</button> */}
            <button>로그인</button>
            {/* <button>로그아웃</button> */}
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

          {/* <div className="user-join">
            <div className="user-sub-title">
              Login/Logout
            </div>
            <div className="user-item">
              Id
            </div>
            <div className="user-item">
              Password
            </div>
          </div> */}

        </section>
      </main>
    );
  }

}

export default User;

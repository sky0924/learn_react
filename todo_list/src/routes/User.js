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
        </div>
        <section className="user-content">
          <div>
            login/logout
          </div>
          <div>
            information
          </div>
        </section>
      </main>
    );
  }

}

export default User;

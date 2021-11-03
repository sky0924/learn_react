import React, { Component } from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './Detail.css';

class Detail extends Component {

  render() {
    return (
      <main className="detail">
        <Link className="detail-back" to="/"><IoArrowBackCircle /></Link>
        <div className="detail-title">
          할 일 1. Redux 이해하기
        </div>
        <section className="detail-content">
          <div className="detail-textarea">
            <textarea placeholder="내용을 입력하세요." />
          </div>
        </section>
      </main>
    );
  }

}

export default Detail;
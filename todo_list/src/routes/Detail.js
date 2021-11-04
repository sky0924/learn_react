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
          {/* { text } */}
          할 일 1. Redux 이해 및 적용하기
        </div>
        <section className="detail-content">
          <div className="detail-textarea">
            <textarea placeholder="내용을 입력하세요." value="Redux란? &#13;- Redux는 오픈 소스 자바스크립트 라이브러리이다. &#13;- state를 이용한 웹 사이트 혹은 애플리케이션의 상태 관리를 목적으로 사용한다." />
          </div>
          <div className="detail-buttons">
            <button>취소</button>
            <button>저장</button>
          </div>
        </section>
      </main>
    );
  }

}

export default Detail;
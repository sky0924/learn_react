import React, { Component } from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';
// import { Link } from 'react-router-dom';
import './Detail.css';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.history.push('/');
  }

  render() {
    const { todos } = this.props;
    const id = this.props.match.params.id

    return (
      <main className="detail">
        <button className="detail-back" onClick={ this.goHome }>
          <IoArrowBackCircle />
        </button>
        <div className="detail-title">
        {todos[id].text}
        </div>
        <section className="detail-content">
          <div className="detail-textarea">
            <textarea placeholder="내용을 입력하세요." />
          
          
          </div>
          <div className="detail-buttons">
            <button onClick={ this.goHome }>취소</button>
            <button>저장</button>
          </div>
        </section>
      </main>
    );
  }

}

export default Detail;
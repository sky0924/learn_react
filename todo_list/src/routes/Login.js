import React, { Component } from 'react';
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
        <section className="login-content">
          <div className="login-item">
            id
            <input />
          </div>
        </section>
      </main>
    );
  }

}

export default Login;
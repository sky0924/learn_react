import React, { Component } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import "./User.css";

class User extends Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.goLogin = this.goLogin.bind(this);
    this.goProfile = this.goProfile.bind(this);
  }

  state = {
    switch: 0,
  };

  goHome() {
    this.props.history.push("/");
  }

  goLogin() {
    this.props.history.push("/login");
  }

  goProfile() {
    this.props.history.push("/profile");
  }

  toggleTheme() {
    const toggleText = document.getElementById("toggle-text");
    // let toggle = this.getState();
    // let toggle = 0;
    // if (toggle === 0) {
    toggleText.textContent = "π Dark";
    console.log(`ToggleText is Changed: ${toggleText.textContent} Mode`);
    //   this.setState({
    //     switch: 1
    //   });
    // } else if (toggle === 1) {
    //   toggleText.textContent = 'βοΈ Light';
    //   this.setState({
    //     switch: 0
    //   });
    // }
  }

  render() {
    return (
      <main className="user">
        <button className="user-back" onClick={this.goHome}>
          <IoArrowBackCircle />
        </button>

        <div className="user-title">
          λμ μ λ³΄
          <div className="user-buttons">
            <button onClick={this.goLogin}>λ‘κ·Έμμ</button>
          </div>
        </div>

        <section className="user-content">
          <div className="user-profile">
            <div className="user-sub-title">
              νλ‘ν
              <button onClick={this.goProfile}>λ³κ²½</button>
            </div>
            <div className="user-item">
              <div className="user-label mg-l-1">μ¬μ§</div>
              <div className="user-input">
                <img src={require("../cloud.png").default} alt="img" />
              </div>
            </div>
            <div className="user-item">
              <div className="user-label mg-l-1">μ΄λ¦</div>
              <div className="user-input">κΉνλ</div>
            </div>
            <div className="user-item">
              <div className="user-label">μ΄λ©μΌ</div>
              <div className="user-input">sky@sngy.io</div>
            </div>
            <div className="user-item">
              <div className="user-label mg-l-1">μκ°</div>
              <div className="user-input">
                μ£Όμνμ¬ μλμ§ νλ«νΌ κ°λ°ν / μΈν΄ κΉνλ
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <a href="https://www.sngy.io">https://www.sngy.io</a>
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <a href="https://github.com/sky0924">
                  https://github.com/sky0924
                </a>
              </div>
            </div>
          </div>

          <div className="user-setting">
            <div className="user-sub-title">μ€μ </div>
            <div className="user-item">
              <div className="user-label mg-l-1">μΈμ΄</div>
              <div className="user-input">
                <select name="language">
                  <option value="">language</option>
                  <option value="kor">Korean</option>
                  <option value="eng">English</option>
                </select>
              </div>
            </div>
            <div className="user-item">
              <div className="user-label mg-l-1">νλ§</div>
              <div className="user-input">
                <span id="toggle-text">βοΈ Light</span>
                <label className="toggle">
                  <input
                    id="toggle-check"
                    type="checkbox"
                    onClick={this.toggleTheme}
                  />
                  <span className="slider round" />
                </label>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default User;

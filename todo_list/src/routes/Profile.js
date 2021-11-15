import React, { Component } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.push("/user");
  }

  render() {
    const onChange = (e) => {
      const img = e.target.files[0];
      const formData = new FormData();
      formData.append("img", img);
      console.log(formData);
      for (const keyValue of formData) console.log(keyValue);
    };

    return (
      <main className="profile">
        <button className="profile-back" onClick={this.goBack}>
          <IoArrowBackCircle />
        </button>

        <div className="profile-title">나의 정보</div>

        <section className="profile-content">
          <div className="profile-sub-title">프로필</div>
          <div className="profile-item">
            <div className="profile-label mg-l-1">사진</div>
            <label className="input-file-button" for="input-file">
              사진 선택하기
            </label>
            <input
              id="input-file"
              className="input_img"
              type="file"
              accept="image/*"
              name="profile_img"
              onChange={onChange}
              style={{ display: "none" }}
            />
          </div>
          <div className="profile-item">
            <div className="profile-label mg-l-1">이름</div>
            <input placeholder="이름을 입력해주세요." />
          </div>
          <div className="profile-item">
            <div className="profile-label">이메일</div>
            <input placeholder="이메일 주소를 입력해주세요." />
          </div>
          <div className="profile-item">
            <div className="profile-label mg-l-1">소개</div>
            <input placeholder="자신을 간략하게 소개해주세요." />
          </div>

          <div className="profile-button">
            <button onClick={this.goBack}>확인</button>
          </div>
        </section>
      </main>
    );
  }
}

export default Profile;

import React from "react";

const profileData = {
  sky: {
    name: "김하늘",
    description: "프론트엔드 꿈나무",
  },
  gildong: {
    name: "홍길동",
    description: "동에 번쩍 서에 번쩍",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;

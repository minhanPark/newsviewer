import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  runningwater: {
    name: "박민한",
    desc: "민한이를 사랑한다. 최고다"
  },
  velopert: {
    name: "김민준",
    desc: "리액트 개발자"
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.desc}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;

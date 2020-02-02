import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white"
  };

  return (
    <div>
      <h3>사용자 목록 : </h3>
      <ul>
        <li>
          <NavLink
            activeStyle={activeStyle}
            activeClassName="selected"
            to="/profiles/runningwater"
          >
            러닝워터
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={activeStyle}
            activeClassName="selected"
            to="/profiles/velopert"
          >
            벨로퍼트
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact={true}
        render={() => <div>사용자를 선택하세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;

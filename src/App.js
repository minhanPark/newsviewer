import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/info">정보</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        {/* path에 배열을 전달해서 여러 경로에서 같은 컴포넌트를 보여줄 수 있음*/}
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

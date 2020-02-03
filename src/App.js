import React, { useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c2b0496873fe4f9c8a54ec24009b07e5"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Categories />
      <NewsList />
    </>
  );
}

export default App;

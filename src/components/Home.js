import React from "react";
import { trees } from './App';

function Home({ username, city }) {

  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home
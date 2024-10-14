import React from "react";
import About from './About';
import Home from './Home';
import NavBar from './NavBar';
// import userData from '../data/user';
import { username, city, image } from '../data/user';

function App() {

  return (
    <div>
      <NavBar
        username={username}
        city={city}
        image={image}
      />
      <Home
        username={username}
        city={city}
        image={image}
      />
      <About
        username={username}
        city={city}
        image={image}
      />
    </div>
  );
}

export default App;

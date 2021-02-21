import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      I am header
      <Link to="/quiz">
        <button className="try-again">quiz</button>
      </Link>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-center mb-5">Exam MCQ Preparation</h1>{" "}
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="try-again">Mechanics of material</button>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="try-again">Biology for Engineers</button>
      </Link>

      <Footer />
    </div>
  );
};

export default Home;

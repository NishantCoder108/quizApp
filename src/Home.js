import React from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import App from "./App";
import Quiz from "./Quiz";
const Home = () => {
  return (
    <main className="py-3">
      <Route path="/" component={Header} exact />
      <Route path="/makeq" component={Quiz} />
      <Route path="/quiz" component={App} />
    </main>
  );
};

export default Home;

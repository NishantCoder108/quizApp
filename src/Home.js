import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
// import App from "./App";
import Quiz from "./Quiz";
// import Footer from "./components/Footer";

const Home = () => {
  return (
    <main className="py-3">
      <Switch>
        <Route path="/header" component={Header} />
        {/* <Route path="/footer " component={Footer} exact /> */}
        <Route path="/" component={Quiz} exact />
      </Switch>

      {/* <Switch>
        <Route path="/">
          <Header />
        </Route>

        <Route exact path="/addqkk">
          <App />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/footer">
          <Footer />
        </Route>
      </Switch> */}
    </main>
  );
};

export default Home;

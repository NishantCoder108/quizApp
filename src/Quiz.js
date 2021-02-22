import React from "react";
import { Link } from "react-router-dom";
import Questions from "./components/questions";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.8base.com/cklf5o2e301s407jpa736htrt"
});

const Quiz = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Questions />

        <Link to="/header" style={{ textDecoration: "none" }}>
          <div>
            <button className="try-again">Home</button>
          </div>
        </Link>
      </div>
    </ApolloProvider>
  );
};

export default Quiz;

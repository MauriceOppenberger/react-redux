import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitalData } from "../actions/initalData";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import CreateTweet from "./CreateTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitalData());
  }, []);

  return (
    <div className="container">
      <Router>
        <LoadingBar />
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/new" component={CreateTweet} />
          <Route path="/tweet/:id" component={TweetPage} />
        </Switch>
      </Router>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}
export default connect(mapStateToProps)(App);

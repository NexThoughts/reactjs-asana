import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
// import LandingPage from "./Landing";
import SignUpPage from "../components/auth/SignUp";
import SignInPage from "../components/auth/SignIn";
import HomePage from "../components/auth/Home";
import * as routes from "../constants/Routes";
import CreateTask from "./createTask";
import CreateProject from "./CreateProject";
import TaskListPage from "../components/task/List";
import "bootstrap";
import { firebase } from "../components/firebase";
import SignOutPage from "./auth/SignOut";
import * as dexie from "./services/dexieDB";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authUser: null };
  }

  componentDidMount() {
    console.log("App Component  ***************");
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <div class="container">
            <Route
              exact
              path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />
            <Route
              exact
              path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact
              path={routes.TASK_LIST}
              component={() => <TaskListPage />}
            />
            <Route
              exact
              path={routes.SIGN_OUT}
              component={() => <SignOutPage />}
            />
            <Route exact path={routes.HOME} component={() => <HomePage />} />
          </div>
          <Route
            exact
            path={routes.CREATE_PROJECT}
            component={() => <CreateProject />}
          />
          <Route
            exact
            path={routes.CREATE_TASK}
            component={() => <CreateTask />}
          />
        </div>
      </Router>
    );
  }
}

export default App;

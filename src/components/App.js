import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
// import LandingPage from "./Landing";
import SignUpPage from "../components/auth/SignUp";
import * as routes from "../constants/Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authUser: null };
  }

  componentDidMount() {
    console.log("App Component  ***************");
    // firebase.auth.onAuthStateChanged(authUser => {
    //   authUser
    //     ? this.setState(() => ({ authUser }))
    //     : this.setState(() => ({ authUser: null }));
    // });
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <div class="container">
            <Route
              exact
              path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/Routes";
import { auth } from "../firebase";
import { SignUpLink } from "./SignUp";

const SignInPage = ({ history }) => (
  <div>
    <SignInForm history={history} />
  </div>
);

const INITIAL_STATE = {
  emailAddress: "",
  password: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { emailAddress, password } = this.state;
    const { history } = this.props;
    //Sign In Process
    auth
      .doSignInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
    event.preventDefault();
  };

  render() {
    const { emailAddress, password, error } = this.state;
    const isInvalid = password === "" || emailAddress === "";
    return (
      <div class="row">
        <div class="col-10 offset-lg-2">
          <div class="card" style={{ width: "80%" }}>
            <div class="card-body">
              <h3 class="card-title">Sign In</h3>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    class="form-control"
                    value={emailAddress}
                    onChange={event =>
                      this.setState(
                        byPropKey("emailAddress", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Email Address"
                  />
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    class="form-control"
                    value={password}
                    onChange={event =>
                      this.setState(byPropKey("password", event.target.value))
                    }
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button class="btn btn-primary" type="submit">
                  Sign In
                </button>
                <SignUpLink />

                {error && <p>{error.message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignInPage);

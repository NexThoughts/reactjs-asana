import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/Routes";
import { auth } from "../../firebase";

const SignUpPage = ({ history }) => (
  <div>
    <SignUpForm history={history} />
  </div>
);

const INITIAL_STATE = {
  emailAddress: "",
  password: "",
  confirmPassword: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { emailAddress, password } = this.state;
    const { history } = this.props;
    auth
      .doCreateUserWithEmailAndPassword(emailAddress, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        authUser.user.sendEmailVerification();
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
    event.preventDefault();
  };

  render() {
    const { emailAddress, password, confirmPassword, error } = this.state;
    const isInvalid =
      password !== confirmPassword || password === "" || emailAddress === "";
    return (
      <div class="row">
        <div class="col-10 offset-lg-2">
          <div class="card" style={{ width: "80%" }}>
            <div class="card-body">
              <h3 class="card-title">Regsiter to get started</h3>
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
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
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

                <div class="form-group">
                  <label for="confirmPassword">Confirm Password</label>
                  <input
                    class="form-control"
                    value={confirmPassword}
                    onChange={event =>
                      this.setState(
                        byPropKey("confirmPassword", event.target.value)
                      )
                    }
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>

                <button class="btn btn-primary" type="submit">
                  Sign Up
                </button>

                {error && <p>{error.message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };

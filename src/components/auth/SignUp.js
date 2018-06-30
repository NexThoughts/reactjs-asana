import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/Routes";

const SignUpPage = ({ history }) => (
  <div>
    <h1>SignUp Page</h1>
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
     event.preventDefault();
  };

  render() {
    const { emailAddress, password, confirmPassword, error } = this.state;
    const isInvalid =
      password !== confirmPassword || password === "" || emailAddress === "";
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={emailAddress}
          onChange={event =>
            this.setState(byPropKey("emailAddress", event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event =>
            this.setState(byPropKey("password", event.target.value))
          }
          type="password"
          placeholder="Password"
        />
        <input
          value={confirmPassword}
          onChange={event =>
            this.setState(byPropKey("confirmPassword", event.target.value))
          }
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
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

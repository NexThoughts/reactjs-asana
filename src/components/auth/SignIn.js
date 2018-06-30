import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/Routes";
import {auth} from "../firebase"

const SignInPage = ({ history }) => (
  <div>
    <h1>Sign In </h1>
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
    auth.doSignInWithEmailAndPassword(emailAddress,password).then(() =>{
      this.setState(()=>({...INITIAL_STATE}));
      history.push(routes.HOME)
    }).catch(error =>{
      this.setState(byPropKey('error',error));
    });
       event.preventDefault();
  };

  render() {
    const { emailAddress, password, error } = this.state;
    const isInvalid = password === "" || emailAddress === "";
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
        <button type="submit">Login</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignInPage);

export { SignInForm, SignInLink };

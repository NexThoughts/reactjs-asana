import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/Routes";
// import SignOutPage from "./SignOut";

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routes.ACCOUNT}>Account</Link>
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </li>
    <li>
      <Link to={routes.CREATE_PROJECT}>Create Project</Link>
    </li>
    <li>
      <Link to={routes.CREATE_TASK}>Create New Task</Link>
    </li>
  </ul>
);

export default Navigation;

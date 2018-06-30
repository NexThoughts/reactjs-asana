import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/Routes";
// import SignOutPage from "./SignOut";

const Navigation = ({ authUser }) => (
  <div style={{ marginBottom: "8%" }}>
    {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
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
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <Link
      class="navbar-brand"
      to={routes.LANDING}
      style={{ fontSize: "x-large" }}
    >
      HakRex
    </Link>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto offset-lg-8">
        <li class="nav-item">
          <Link to={routes.SIGN_IN} class="nav-link">
            Sign In
          </Link>
        </li>
        <li class="nav-item">
          <Link to={routes.SIGN_UP} class="nav-link">
            Sign Up
          </Link>
        </li>
        <li class="nav-item">
          <Link to={routes.TASK_LIST} class="nav-link">
            Task List
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;

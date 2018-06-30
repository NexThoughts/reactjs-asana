import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/Routes";
import SignOutPage from "../components/auth/SignOut";

const Navigation = ({ authUser }) => (
  <div style={{ marginBottom: "8%" }}>
    {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
);

const NavigationAuth = () => (
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
          <Link to={routes.HOME} class="nav-link">
            Home
          </Link>
        </li>
        {/* <li class="nav-item">
          <Link to={routes.TASK_LIST} class="nav-link">
            Task List
          </Link>
        </li> */}
    <li class="nav-item">
      <Link to={routes.CREATE_PROJECT} className="nav-link">Create Project</Link>
    </li>
    <li class="nav-item">
      <Link to={routes.CREATE_TASK} className="nav-link">Create New Task</Link>
    </li>
        <li class="nav-item">
          <Link to={routes.SIGN_OUT} class="nav-link">
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link
          class="navbar-brand" to={routes.LANDING}style={{ fontSize: "x-large" }}
    >
      HakRex</Link>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto offset-lg-8">
    <li
        class="nav-item">
      <Link to={routes.SIGN_IN}class="nav-link">Sign In</Link>
    </li>
    <li
        class="nav-item">
      <Link to={routes.SIGN_UP}class="nav-link">Sign Up</Link>
    </li>
  </ul>
  </div>
  </nav>
);

export default Navigation;

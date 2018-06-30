import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/Routes";
import {firebase} from '../firebase';

const HomePage = ({ history }) => (
    <div>
      <h1>Home Page</h1>
        <p>{firebase.auth.currentUser.uid}</p>
    </div>
  );
  export default HomePage;
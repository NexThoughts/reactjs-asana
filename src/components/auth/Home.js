import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/Routes";
import { auth } from "../firebase";
import ProjectList from './ProjectList';


const HomePage = ({ history }) => (
  <ProjectList/>
  
);

export default withRouter(HomePage);





  
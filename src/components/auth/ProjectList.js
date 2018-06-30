import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/Routes";
import { auth } from "../firebase";
import { SignUpLink } from "./SignUp";



class ProjectList extends Component {
  constructor(props) {
    super(props);
    
  }

render() {
    return (
      <div class="row">
        <div class="col-10 offset-lg-2">
          <div class="card" style={{ width: "80%" }}>
            <div class="card-body">
              <h3 class="card-title">Sign In</h3>
              <table class="table table-responsive table-condensed table-hover">
              <thead>
              <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              </tr>
              
              </thead>
                <tbody>
                    <tr><td >1</td><td>2</td><td>3</td></tr>
                    <tr><td>4</td><td>5</td><td>6</td></tr>
                    <tr><td>7</td><td>8</td><td>9</td></tr>
                    <tr><td>10</td><td>11</td><td>12</td></tr>
                    </tbody>            
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectList);

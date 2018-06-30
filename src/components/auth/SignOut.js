import React, { Component } from "react";
import { auth } from "../firebase";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/Routes";

class SignOutPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    auth.doSignOut();
  }

  render() {
    return (
      <div class="row">
        <div class="col-10 offset-lg-2">
          <div class="card" style={{ width: "80%" }}>
            <div class="card-body">
              <h4 class="text-center">
                You have been logged out successfully!
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignOutPage);

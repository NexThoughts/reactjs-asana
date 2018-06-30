import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/Routes";
import {firebase,db} from '../../firebase';

class HomePage extends Component{

    showdetails() {
        db.onceGetUsers(firebase.auth.currentUser.uid).
        then(user =>{console.log(user.json)})
            .catch(error=>{console.log("error occured")});
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                {this.showdetails()}
            </div>
        );
    }

}

export default HomePage
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/Routes";
import {db} from "../firebase";

const CreateProjectPage = ({ history }) => (
  <div>
    <h1>Create Project</h1>
    <CreateProjectForm history={history} />
  </div>
);

const INITIAL_STATE = {
  name: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class CreateProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { name } = "bhasi";
    const { history } = this.props;
    console.log("hshshshsh");
    db.doCreateProject('1324',name,'5677').then(authUser => {
      console.log("111111111")
      this.setState(() => ({ ...INITIAL_STATE }));
    })
    .catch(error => {
      console.log("222222222")
      // this.setState(byPropKey('error', error));
    });

    event.preventDefault();
  };

  render() {
    const { name,error } = this.state;
    console.log ("------------------"+name);
    console.log ("------------------"+name);
    
    const isInvalid = name === "" ;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={name}
          onChange={event =>
            this.setState(byPropKey("name", event.target.value))
          }
          type="text"
          placeholder="Project Name"
        />
       

        <button type="submit">Create Project</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const CreateProjectLink = () => (
  <p>
   Do you Want to create Project? <Link to={routes.CREATE_PROJECT}>Create Project</Link>
  </p>
);

export default withRouter(CreateProjectPage);

export { CreateProjectForm, CreateProjectLink };

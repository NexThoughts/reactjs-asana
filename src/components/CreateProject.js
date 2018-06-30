import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/Routes";
import {db} from "../firebase";

const CreateProjectPage = ({ history }) => (
  <div>
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

    const {name,} = this.state;

        db.doCreateProject('1324',name,'5677').then(() => {
      this.setState(() => ({ ...INITIAL_STATE }));
    })
    .catch(error => {
      this.setState(byPropKey('error', error));
    });

    event.preventDefault();
  };

  render() {
    const { name,error } = this.state;
    
    const isInvalid = name === "" ;
    return (

      <div className="row">
        <div className="col-10 offset-lg-2">
          <div className="card" style={{ width: "80%" }}>
            <div className="card-body">
              <h3 className="card-title">Create Project</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="name">Project Name</label>
                  <input
                    className="form-control"
                    value={name}
                    onChange={event =>
                      this.setState(
                        byPropKey("name", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Project Name"
                  />
                </div>

                <button className="btn btn-primary" type="submit">
                  Create
                </button>

                {error && <p>{error.message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
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

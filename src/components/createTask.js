import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/Routes";
import "../static/stylesheets/App.css";
import {db} from "../firebase";

const CreateTaskPage = ({ history }) => (
    <div>
      <CreateTaskForm history={history} />
    </div>
  );
const INITIAL_STATE = {
    name: "",
    description: "",
    assigned_to: "",
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class CreateTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            name,
            description,
            assigned_to,
            error,
        } = this.state;

        db.doCreateTask('134798',name,description,'5677',assigned_to).then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
        })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const { name, description, assigned_to, error, } = this.state;
        const isInvalid = name === '';

        return (

            <div class="row">
            <div class="col-10 offset-lg-2">
              <div class="card" style={{ width: "80%" }}>
                <div class="card-body">
                  <h3 class="card-title">Add Task</h3>
                  <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                     <input
                        class="form-control"
                        value={name}
                        onChange={event =>
                          this.setState(
                            byPropKey("name", event.target.value)
                          )
                        }
                        type="text"
                        placeholder="Enter Task"
                      />
                    </div>
    
                    <div class="form-group">
                      <input
                        class="form-control"
                        value={description}
                        onChange={event =>
                          this.setState(byPropKey("description", event.target.value))
                        }
                        type="text"
                        placeholder="Task Description"
                      />
                    </div>
    
                    <div class="form-group">
                      <input
                        class="form-control"
                        value={assigned_to}
                        onChange={event =>
                          this.setState(
                            byPropKey("assigned_to", event.target.value)
                          )
                        }
                        type="text"
                        placeholder="Assigned To User"
                      />
                    </div>
    
                    <button className="btn btn-primary" type="submit">
                      Add
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
const CreateTaskLink = () => (
    <p>
      Click To Create Task? <Link to={routes.CREATE_TASK}>Create Task</Link>
    </p>
  );
  
  export default withRouter(CreateTaskPage);
  
  export { CreateTaskForm, CreateTaskLink };
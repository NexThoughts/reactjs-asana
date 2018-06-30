import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/Routes";
import "../static/stylesheets/App.css";

const CreateTaskPage = ({ history }) => (
    <div>
      <h1>Create Task</h1>
      <CreateTaskForm history={history} />
    </div>
  );
const INITIAL_STATE = {
    name: "",
    description: "",
    assigned_to: "",
    comment:"",
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
            comment,
            error,
        } = this.state;

        // auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        //     .then(authUser => {
        // .try(
        // this.setState(() => ({ ...INITIAL_STATE }));
        // });
        // .catch(error => {
        // this.setState(byPropKey('error', error));
        // });

        event.preventDefault();
    }

    render() {
        const { name, description, assigned_to,comment, error, } = this.state;
        const isInvalid =
            assigned_to === '' || description === '' || name === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={name}
                    onChange={event => this.setState(byPropKey('name', event.target.value))}
                    type="text"
                    placeholder="Task Name"
                />
                <input
                    value={description}
                    onChange={event => this.setState(byPropKey('description', event.target.value))}
                    type="text"
                    placeholder="Description"
                />
                <input
                    value={assigned_to}
                    onChange={event => this.setState(byPropKey('assigned_to', event.target.value))}
                    type="text"
                    placeholder="Assigned To"
                />
                <input
                    value={comment}
                    onChange={event => this.setState(byPropKey('comment', event.target.value))}
                    type="textarea"
                    placeholder="Comment"
                />
                <button type="submit" disabled={isInvalid}>
                    Create Task
                </button>
                {error && <p>{error.message}</p>}
            </form>
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
import React, { Component } from "react";

const TaskListPage = () => <TaskList />;

function DisplayTaskList(props) {
  // console.log(props);
  const listContent = props.posts.map((post) =>
    <div>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.description}</td>
      <td><button class="btn btn-warning" type="button">Edit </button></td>
      <td><button class="btn btn-danger" type="button"> Delete </button></td>
    </div>
  );

  return (
    <tr>
      {listContent}
    </tr>
  );
}

const posts = [
  { id: 1, title: 'Hello World', description: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', description: 'You can install React from npm.' }
];

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div id="task_list">
        <label>Task Name </label>
        <table className="table table-responsive table-condensed table-hover">
          <thead>
            <th>Sr. No.</th>
            <th>Task Description </th>
            <th>Assigne </th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>
            <DisplayTaskList posts={posts} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskListPage;

export { TaskList };

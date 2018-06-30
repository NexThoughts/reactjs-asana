import React, { Component } from "react";

const TaskListPage = () => <TaskList />;

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        <li>dcdvfv</li>
        <li>dcdvfv</li>
        <li>dcdvfv</li>
      </ul>
    );
  }
}

export default TaskListPage;

export { TaskList };

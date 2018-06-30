import React, { Component } from "react";
import "../static/stylesheets/App.css";
import Tasks from './Tasks';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<h1>Hello World!</h1>*/}
        <Tasks/>
      </div>
    );
  }
}

export default App;

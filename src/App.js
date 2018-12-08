import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hii, This is react</h1>
        <Person name="Arpit" age="20" />
        <Person name="Divyank" age="22">
          My Hobbies is Playing Volleyball
        </Person>
        <Person name="Naman" age="21" />
      </div>
    );
  }
}

export default App;

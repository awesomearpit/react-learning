import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    person: [
      { name: "Arpit", age: "20" },
      { name: "Divyank", age: "21" },
      { name: "Naman", age: "20" }
    ],
    otherState: "some other Value"
  };

  clickHandler = () => {
    this.setState({
      person: [
        { name: "akash", age: "20" },
        { name: "Sarthak", age: "21" },
        { name: "Naman", age: "20" }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      person: [
        { name: "Arpit", age: "20" },
        { name: event.target.value, age: "21" },
        { name: "Naman", age: "20" }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hii, This is react</h1>
        <button onClick={this.clickHandler}>
          Click Here to Change the Name.....
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          // change={this.nameChangeHandler}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          change={this.nameChangeHandler}
        />
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
          // change={this.nameChangeHandler}
        />
      </div>
    );
  }
}

export default App;

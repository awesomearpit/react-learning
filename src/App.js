import React, { Component } from "react";
import Person from "./Person/Person";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    person: [
      { name: "Arpit", age: "20" },
      { name: "Divyank", age: "21" },
      { name: "Naman", age: "20" }
    ],
    otherState: "some other Value",
    showPerson: false
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

  toggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hii, This is react</h1>
        <button
          className="btn btn-default"
          style={{ "border-radius": "0" }}
          onClick={this.toggleHandler}
        >
          Click Here to Change the Name.....
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

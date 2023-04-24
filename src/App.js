import React, { Component } from "react";
import "./App.css";
import Test from "./componen/Test";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //create  Person object field
     
      shows: false,
     
    };
  }
  //toggleShow methode
  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Show</button>
        {this.state.shows && <Test />}
      </div>
    );
  }
}

export default App;

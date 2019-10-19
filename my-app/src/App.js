//task of 03 (understanding the base features Syntex)
//LEARN REACT VIDEOS COURSE

import "./App.css";
import Person from "./components/Person";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Person name="Max" age="29" />
        <Person name="Marry" age="26">
          {" "}
          Marry is my name{" "}
        </Person>
        <Person name="Sufia" age="19" />
      </div>
    );
  }
}

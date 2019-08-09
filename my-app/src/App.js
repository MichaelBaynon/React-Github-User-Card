import React from "react";

import "./App.css";
import axios from "axios";
import UserCard from "./UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userCard: []
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    fetch("https://api.github.com/users/MichaelBaynon")
      .then(response => {
        return response.json();
      })
      .then(users => this.setState({ userCard: users }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log("render");
    console.log(this.state.users);
    return (
      <div>
        <h1>GitHub Users</h1>
        <UserCard user={this.state.userCard} />
      </div>
    );
  }
}

export default App;

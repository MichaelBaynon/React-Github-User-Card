import React from "react";

import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/MichaelBaynon").then(res => {
      this.setState({ user: res });
      console.log(this.state.user);
    });
  }

  render() {
    return <div>Hello</div>;
  }
}

export default App;

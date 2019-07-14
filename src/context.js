import React, { Component } from "react";
// import Contacts from "./Components/Contacts";
// import Header from "./Components/Header";

// import {Provider } from './c'

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "J Pepper",
        email: "jpep@sweethots.com",
        phone: "1234567890"
      },
      {
        id: 2,
        name: "J Squepper",
        email: "jspep@sweethots.com",
        phone: "1234567890"
      },
      {
        id: 3,
        name: "J Pwepper",
        email: "jpwep@sweethots.com",
        phone: "1234567890"
      }
    ]
  };

  render() {
    const { children } = this.props;

    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;

import React, { Component } from "react";
// import { statement } from "../node_modules/@types/babel__template";
// import Contacts from "./Components/Contacts";
// import Header from "./Components/Header";

// import {Provider } from './c'

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    const { children } = this.props;

    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;

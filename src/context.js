import React, { Component } from "react";

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
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
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
      },
      {
        id: 4,
        name: "H Pwepper",
        email: "hpwep@sweethots.com",
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

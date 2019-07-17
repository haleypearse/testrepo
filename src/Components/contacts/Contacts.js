import React, { Component } from "react";
import Contact from "../contacts/Contact";
import { Consumer } from "../../context";
// import { tsThisType } from "../../node_modules/@babel/types";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact key={contact.key} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

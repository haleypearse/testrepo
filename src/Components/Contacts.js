import React, { Component } from "react";
import Contact from "./Components/Contact";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact name={contact.name} />
        ))}
      </div>
    );
  }
}

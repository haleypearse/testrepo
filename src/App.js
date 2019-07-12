import React, { Component } from "react";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="slinky" phone="5" email="haleyp@gmail.com" />
          <Contact
            name="winkly"
            phone="1234567890"
            email="winsquail@gmail.com"
          />
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>The App</h1>
//     </div>
//   );
// }

export default App;

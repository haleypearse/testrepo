import React, { Component } from "react";
import Contacts from "./Components/contacts/Contacts";
import Header from "./Components/layout/Header";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
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

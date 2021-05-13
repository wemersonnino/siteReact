import React, {Component} from "react";
import {BrowserRouter as Router, Switch, NavLink, Link} from "react-router-dom";
import logo from "./logo.svg";
import Topo from "./components/Topo";
import Principal from "./components/Principal";
import Rodape from "./components/Rodape";
class App extends Component{
  render() {
      return (
          <>
              <Topo/>
              <Principal/>
              <Rodape/>
          </>
      );
  }
}

export default App;

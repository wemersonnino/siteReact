import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topo from "./components/Topo";
import Rodape from "./components/Rodape";
import Home from "./components/Home";
import Catalogo from "./components/pages/Catalogo";
import Design from "./components/pages/Design";
import Frontend from "./components/pages/Frontend";
import NotFound from "./components/NotFound";
import Programacao from "./components/pages/Programacao";
class App extends Component{
  render() {
      return (
          <Router>
              <>
                  <Topo/>
                  <Switch>
                      <Route exact path="/" render={Home}/>
                      <Route exact path="/front-end" render={() => <Frontend/>}/>
                      <Route exact path="/programacao" render={() => <Programacao/>}/>
                      <Route exact path="/design" render={() => <Design/>}/>
                      <Route exact path="/catalogo" render={() => <Catalogo/>}/>
                      <Route component={NotFound}/>
                  </Switch>
                  <Rodape/>
              </>
          </Router>
      );
  }
}

export default App;

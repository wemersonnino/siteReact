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
import Livro from "./components/Livro";
import axios from "axios";
class App extends Component{
    state = {
        livros: []
    }
    async componentDidMount(){
        try {
         const {data: livros} = await axios.get("/api/todosOsLivros.json");
         this.setState({livros})
        } catch (error){
            console.log(error);
            document.querySelectorAll(".principal")[0].insertAdjacentHTML(
                "beforeend","<p class='erro'>mensagem de erro</p>"
            );
        }
    }
  render() {
      return (
          <Router>
              <>
                  <Topo/>
                  <Switch>
                      <Route exact path="/" render={() => <Home livros={this.state.livros}/>}/>
                      <Route exact path="/front-end" render={() => <Frontend livros={this.state.livros} />}/>
                      <Route exact path="/programacao" render={() => <Programacao livros={this.state.livros} />}/>
                      <Route exact path="/design" render={() => <Design livros={this.state.livros} />}/>
                      <Route exact path="/catalogo" render={() => <Catalogo livros={this.state.livros} />}/>
                      <Route path="/livro/:livroSlug" render={props =>{
                          const livro = this.state.livros.find(
                              livro => livro.slug === props.match.params.livroSlug
                          );
                          return livro ? <Livro livro={livro}/> : <NotFound/>;
                      }}/>
                      <Route exact component={NotFound}/>
                  </Switch>
                  <Rodape/>
              </>
          </Router>
      );
  }
}

export default App;

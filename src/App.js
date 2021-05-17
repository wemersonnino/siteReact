import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/pages/Frontend";
import Programacao from "./components/pages/Programacao";
import Design from "./components/pages/Design";
import Catalogo from "./components/pages/Catalogo";
import Rodape from "./components/Rodape";
import NotFound from "./components/NotFound";
import Livro from "./components/Livro";
import axios from "axios";

class App extends Component{
    state = {
        livros: []
    }
    async componentDidMount(){
        try {
            const {data: livros} = await axios.get("/api/todosOsLivros.json");
            this.setState({livros});
        } catch (error){
            console.log(error);
            document.querySelectorAll(".principal")[0].insertAdjacentHTML(
                "beforeend","<p class='erro'>Mensagem de erro</p>"
            )
        }
    };
    /*async   componentDidMount() {
        fetch("/api/todosOsLivros.json")
            .then(response => response.json())
            .then(livros => this.setState({ livros }))
            .catch(function(error) {
                document
                    .querySelectorAll("main")[0]
                    .insertAdjacentHTML("beforeend", "<p>Mensagem de erro</p>");
            })
            .finally(function() {
                console.log("Sempre retorna");
            });
    };*/
    render() {
        return (
            <Fragment>
                <Router>
                    <Topo />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Home livros={this.state.livros} />}
                        />
                        <Route
                            exact
                            path="/front-end"
                            render={() => <Frontend livros={this.state.livros} />}
                        />
                        <Route
                            exact
                            path="/programacao"
                            render={() => <Programacao livros={this.state.livros} />}
                        />
                        <Route
                            exact
                            path="/design"
                            render={() => <Design livros={this.state.livros} />}
                        />
                        <Route
                            exact
                            path="/catalogo"
                            render={() => <Catalogo livros={this.state.livros} />}
                        />
                        <Route
                            path="/livro/:livroSlug"
                            render={props => {
                                const livro = this.state.livros.find(
                                    livro => livro.slug === props.match.params.livroSlug);
                                return livro ? <Livro livro={livro}/> : <NotFound/>;
                            }}
                        />
                        <Route component={NotFound} />
                    </Switch>
                    <Rodape />
                </Router>
            </Fragment>
        );
    }
}


export default App;

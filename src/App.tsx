import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Pokemon from "./components/pages/Pokemon";
import About from "./components/pages/About";
import PokemonPage from "./components/search/PokemonPage";
import PokemonProfile from "./components/pages/PokemonProfile";
import Alert from "./components/layout/Alert";
import PokemonState from "./context/pokemon/PokemonState";
import AlertState from "./context/alert/AlertState";
import "./App.scss";

const App = () => {
  return (
    <PokemonState>
      <AlertState>
        <Router>
          <Fragment>
            <Header />
            <div className="container mt-3">
              <Alert />
              <Switch>
                <Route exact path="/" component={Pokemon} />
                <Route exact path="/about" component={About} />
                <Route exact path="/pokemon" component={PokemonPage} />
                <Route exact path="/pokemon/:name" component={PokemonProfile} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </PokemonState>
  );
};

export default App;

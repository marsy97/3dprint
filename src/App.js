import React from 'react';
import "./style.scss";
import Home from './Components/Home.js';
import Kontakt from './Components/Kontakt.js';
import Cjenik from './Components/Cjenik.js';
import Galerija from './Components/Galerija.js';
import Navigation from "./Components/Navigation.js";
import Footer from "./Components/Footer.js";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="content">
          <Switch>

            <Route exact path="/">
             <Home/>
            </Route>

            <Route path="/kontakt">
             <Kontakt/>
            </Route>

            <Route path="/cjenik">
             <Cjenik/>
            </Route>

            <Route path="/galerija">
             <Galerija/>
            </Route>

            
          </Switch>
        </div>

        <Footer/>        
      </div>
    </Router>
  );
}

export default App;
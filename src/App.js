import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import GenerarReporte from "./pages/GenerarReporte";
import ConsultarReporte from "./pages/ConsultarReporte";
import Inicio from './pages/Inicio';
import BuscarReporte from './pages/BuscarReporte';


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link to="/" className="navbar-brand">
            REPORTES
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/crearReporte" className="nav-link">
                  Crear Reporte
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/reportes" className="nav-link">
                  Reportes
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/buscarReportes" className="nav-link">
                  Buscar Reportes
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/crearReporte">
            <GenerarReporte />
          </Route>
          <Route path="/reportes">
            <ConsultarReporte />
          </Route>
          <Route path="/buscarReportes">
            <BuscarReporte />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

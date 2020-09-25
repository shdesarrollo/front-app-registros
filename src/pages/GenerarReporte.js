import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const API = "http://localhost:8080/registros";

class GenerarReporte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      fecha: '',
      hora: '',
      descripcion: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const target = e.target;
    const nombre = target.name;
    const fecha = target.name;
    const hora = target.name;
    const descripcion = target.name;

    this.setState({
      [nombre]: e.target.value,
      [fecha]: e.target.value,
      [hora]: e.target.value,
      [descripcion]: e.target.value
    });

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    
    fetch(API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: this.state.nombre,
        fecha: this.state.fecha,
        hora: this.state.hora,
        descripcion: this.state.descripcion
      })
    })
    .then(res => res.json())
    .then(response => {
      if (response.succes) { // exito
        alert('Categoría creada');
      }
    }).catch((err) => {
        console.log(err);
      });

    e.preventDefault();
    
  }

  
  render() {
    return (
      <div className="container">
        <br></br>
        <header>
          <div className="card col-sm-6 offset-sm-3 text-center">
            <div className="card-body">
              <h5 className="card-title">CREAR REPORTE</h5>
            </div>
          </div>
        </header>
        <br></br>
        <section>
          <form className="form" onSubmit={this.onSubmit.bind(this)}>
            <div className="card col-sm-6 offset-sm-3 text-center">
              <div className="card-body">
                <div className="form-group">
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    value={this.state.nombre}
                    onChange={this.onInputChange.bind(this)}
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="fecha"
                    className="form-control"
                    value={this.state.fecha}
                    onChange={this.onInputChange.bind(this)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="time"
                    name="hora"
                    className="form-control"
                    value={this.state.hora}
                    onChange={this.onInputChange.bind(this)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="descripcion"
                    className="form-control"
                    placeholder="Descripcion"
                    value={this.state.descripcion}
                    onChange={this.onInputChange.bind(this)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  name="enviar"
                  className="btn btn-primary mb-2 btn-block"
                >
                  CREAR
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default GenerarReporte;
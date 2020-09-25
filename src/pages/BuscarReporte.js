import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//const API = "http://localhost:8080/registros";

class BuscarReporte extends React.Component {

  constructor(props) {
    super(props);
    this.state = { id: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const target = e.target;
    const id = target.name;

    this.setState({
      [id]: e.target.value
    });

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {

    fetch(`http://localhost:8080/registros/${this.state.id}`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then(response => {
        const data = response;
        console.log(data);
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
          <div className="card col-sm-8 offset-sm-2 text-center">
            <div className="card-body">
              <h5 className="card-title">BUSCAR REPORTES</h5>
            </div>
          </div>
        </header>
        <br></br>
          <section>
            <div className="card col-sm-8 offset-sm-2 text-center">
              <div className="card-body">
                <form className="form" onSubmit={this.onSubmit.bind(this)}>
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                      </div>
                      <input 
                        type="number"
                        name = "id"
                        className="form-control" 
                        value={this.state.id}
                        onChange={this.onInputChange.bind(this)} 
                        placeholder="Buscar"
                        required
                      />
                      <div className="input-group-append">
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                      </div>
                    </div>
                    
                  </div>
                </form>
              </div>
            </div>
          </section>
          <br></br>
          <section>
            <div className="card col-sm-8 offset-sm-2 text-center">
              <div className="card-body">
                <table className="table">
                  <thead className='table-dark bg-primary text-center'>
                    <tr>
                      <td>NOMBRE</td>
                      <td>FECHA</td>
                      <td>HORA</td>
                      <td>DESCRIPCION</td>
                      <td>OPCIONES</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {
                      
                      
                      
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </section>
      </div>
    )
  }

}

export default BuscarReporte;
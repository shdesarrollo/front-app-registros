import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const API = "http://localhost:8080/registros";

function ConsultarReporte() {

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(response => {
        const datos  = response;
        setDatos(datos);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])

    return (
      <div className="container">
        <br></br>
        <header>
          <div className="card col-sm-8 offset-sm-2 text-center">
            <div className="card-body">
              <h5 className="card-title">REPORTES</h5>
            </div>
          </div>
        </header>
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
                    
                    datos.map(items => {
                      return (
                        <tr key={items.id}>
                          <td>{items.nombre}</td>
                          <td>{items.fecha}</td>
                          <td>{items.hora}</td>
                          <td>{items.descripcion}</td>
                          <td><button className="btn btn-outline-primary my-2 my-sm-0"><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                        </tr>
                      )
                    })
                    
                  }
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
}

export default ConsultarReporte;
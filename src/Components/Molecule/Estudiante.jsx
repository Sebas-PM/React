import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Estudiante = ({ nombre, edad, genero, id, foto }) => (
    <>
        <div className="card d-flex justify-Content-center mt-5 m-auto text-primary" style={{ width: '250px' }}>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Edad: {edad}</p>
                <p className="card-text">Genero: {genero}</p>
                <img style={{ width: '250px' }} src={foto} alt="" />
                <center>
                    <Link to={`/estudiantes/${id}`}>Detalle</Link>
                </center>
            </div>
        </div>
    </>
);

Estudiante.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

Estudiante.defaultProps = {
    nombre: "nombre no asignado",
    edad: 0
}

export default Estudiante;
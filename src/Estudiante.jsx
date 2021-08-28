import React from 'react';
import PropTypes from 'prop-types';


const Estudiante = ({nombre,edad,genero}) => (
    <>
       <div className="card d-flex justify-Content-center mt-5 m-auto text-primary" style={{ width: '250px'}}>
            <div className="card-body">
                <h5 className="card-title">Nombre: {nombre}</h5>
                <p className="card-text">Edad: {edad}</p>
                <p className="card-text">Genero: {genero}</p>
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
    nombre: "Nombre no asisgando",
    edad: 0,
    genero: "Genero no definido"
}
export default Estudiante;
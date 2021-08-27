import React from 'react';
import PropTypes from 'prop-types';

let estudiante = {
    nombre: "Juan",
    edad: "12"
}

const ComponentePrueba = ({nombre,edad,genero}) => (
   <>
    <div className="card" style={{with: '18rem'}}>
    <div className="card-body">
        <h5 className="card-title">Nombre: {nombre}</h5>
        <p className="card-text">Edad: {edad}</p>
        <p className="card-text">Genero: {genero}</p>
    </div>
    </div>
   </>
);

ComponentePrueba.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

ComponentePrueba.defaultProps = {
    nombre: "Nombre no asisgando",
    edad: 0,
    genero: "Genoro no definido"
}

export default ComponentePrueba;
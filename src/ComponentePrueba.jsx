import React from 'react';
import PropTypes from 'prop-types';


// let estudiante = {
//     nombre: "juan",
//     edad : 12
// }

// var genero = "M";

const ComponentePrueba = ({nombre, edad, genero}) => (
    <>
        <div className="card" style={ {width: '18rem'}}>
            <div className="card-body">
                <h5 class="card-title">{nombre}</h5>
                <p className="card-text">Edad: { edad }</p>
                <p className="card-text">Genero: { genero }</p>
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
    nombre: "nombre no asignado",
    edad: 0
}

export default ComponentePrueba;
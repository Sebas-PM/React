import React from 'react';
import Estudiante from './Estudiante';

const estudiantes = [
    {
        "nombre": "Sebastian",
        "edad" : 18,
        "genero" : "M"
    },
    {
        "nombre" : "David",
        "edad" : 18,
        "genero" : "M"
    },
    {
        "nombre" : "Julian",
        "edad" : 18,
        "genero" : "M"
    },
    {
        "nombre" : "Yurny",
        "edad" : 17,
        "genero" : "M"
    },
    {
        "nombre" : "Daniela",
        "edad" : 20,
        "genero" : "F"
    },
    {
        "nombre" : "Carolina",
        "edad" : 3,
        "genero" : "F"
    }
]

const Contenedor = () =>(
    <>
        {
            estudiantes.map( c => <Estudiante nombre={ c.nombre } edad={c.edad} genero={ c.genero} /> )
        }
    </>
);

export default Contenedor;
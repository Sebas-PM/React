import React from 'react';
import Estudiante from '../Molecule/Estudiante';

const estudiantes = [
    {
        "id": 1,
        "nombre": "Gumball",
        "edad" : 12,
        "genero" : "M",
        "foto":"http://assets.stickpng.com/images/5a830430abc3d121aba71237.png"
    },
    {
        "id": 2,
        "nombre" : "Darwin",
        "edad" : 12,
        "genero" : "M",
        "foto" : "http://assets.stickpng.com/images/5a8303ebabc3d121aba7122e.png"
    },
    {
        "id": 3,
        "nombre" : "Anais",
        "edad" : 5,
        "genero" : "F",
        "foto" : "http://assets.stickpng.com/images/5a8303dcabc3d121aba7122c.png"
    }
]

const Contenedor = () =>(
    <>
        {
            estudiantes.map( c => <Estudiante nombre={ c.nombre } edad={c.edad} genero={ c.genero} id = {c.id} foto={ c.foto} /> )
        }
    </>
);

export default Contenedor;
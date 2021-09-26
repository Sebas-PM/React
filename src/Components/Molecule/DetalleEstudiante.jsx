import React from "react";
import { Link } from "react-router-dom";

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


const DetalleEstudiante= ({match, location, history}) => {

    console.log(history)

    let estudiante = estudiantes.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <>
            {
                estudiante ? (
                    <div className="card d-flex justify-Content-center mt-5 m-auto text-primary" style={{ width: '250px'}}>
                    <div className="card-body">
                            <h5 className="card-title">{ estudiante.nombre }</h5>
                            <p className="card-text">Edad: { estudiante.edad }</p>
                            <p className="card-text">Genero: { estudiante.genero }</p>
                            <img style={{ width: '250px'}} src={estudiante.foto} alt="" />
                            <center>
                            <Link to={`/estudiantes`}>Ver Todos</Link>
                            </center>
                        </div>
                    </div>
                ):
                <h1>Estudiante no encontrado</h1>
            }

            
        </>
    )
};

export default DetalleEstudiante;
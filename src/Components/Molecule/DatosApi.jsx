import React, { Component } from "react";
import axios from "axios";

class DatosApi extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/Sebas-PM/Personajes/blob/master/personajes')
            //axios.get('https://my-json-server.typicode.com/javierortegon/datajson/characters')
            .then(resp => {
                this.setState({
                    posts: resp.data
                })
            })
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts', {method:'get'})
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({
    //             posts: data
    //         })
    //     })
    // }

    render() {
        const { posts } = this.state
        return (
            <>
                {
                    posts.map(u => (
                        <>
                            <div className="card d-flex justify-Content-center mt-5 m-auto text-primary" style={{ width: '250px' }}>
                                <div className="card-body">
                                    <center><h5 className="card-title">{u.nombre}</h5></center>
                                    <p className="card-text">Edad: {u.edad}</p>
                                    <p className="card-text">Genero: {u.genero}</p>
                                    <img style={{ width: '250px' }} src={u.foto} alt="" />
                                </div>
                            </div>
                        </>
                    ))
                }
            </>
        )
    }

}

export default DatosApi;
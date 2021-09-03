import React, {Component} from "react";

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state={
            nombre:"nombre state"
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }
    render(){
        return(
            <div id="contenedor">
                <h1>Formulario</h1>
                <form action="#">
                    <label htmlFor="">Nombre</label>
                    <br />
                    <input type="text" name="" id="" onChange={this.cambiarNombre} />
                    <br />
                    <input type="submit" name="" id="" value="Enviar" />
                </form>
                <h3>{`hola ${this.state.nombre}`}</h3>
            </div>
        )
    }
    componentDidMount(prevProps,prevState){
        console.log(prevProps);
        console.log()
    }
}
export default Formulario;
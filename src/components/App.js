import React, { Component } from 'react'
import axios from 'axios';
import '../styles/App.css'

//Componente clase
class App extends Component {
  
  constructor(){
    super();
    this.state = {
      usuarios: []
    }
  }

  async componentDidMount() { //se necesita async para obtener una promesa
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({ usuarios: res.data })
  }

  ponerFilas = () => (
    this.state.usuarios.map((usuario) => (  //map: iterar por la cantidad de elementos
      <tr key={ usuario.id }>
        <td>{ usuario.name }</td>
        <td>{ usuario.email }</td>
        <td>{ usuario.website }</td>
      </tr>
    )) 
  );

  render() {
    //console.log(this.state.usuarios); //el render corre 2 veces
    return (
      <div className='margen'>
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            { this.ponerFilas() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;

// th -> columna strong
// tr -> fila
// td -> columna
import React from 'react';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Apredius from './formulario/Apredius';
import './App.css'

const  App = () => {
  return ( 
      <div className="container">
        <div className="row">
          <div className="col">
            <Login />
            <Registro />
            <Apredius />
          </div>
        </div>
      </div>
   );
}
 
export default App;
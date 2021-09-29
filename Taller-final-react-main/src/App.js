import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './Menu.js';
import Contactenos from './Contactenos';
import Formulario from './Formulario';
import Listarpersonajes from './listapersonajes';
import Personajes from './personajes';



class  App extends Component {
  render(){
      <h1>Hola xD</h1>
  
  return (
   
    <Router>
     
    <Switch>
  
    
  <Route path="/Personajes"  exact component >
   <Personajes/>
  </Route>
  <Route path="/Contactenos"  exact component >
    <Contactenos/>
  </Route>
  <Route path="/Formulario"  exact component >
    <Formulario/>
    
   
  </Route>
  
  </Switch>
    

  
     
      
     
    </Router>
   
    
  )
        

        
     
  
}
}

export default App;

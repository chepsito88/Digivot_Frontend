import React  from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Sidebar from './componentes/sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './paginas/Home';
import Servicios from './paginas/Servicios';
import Nosotros from './paginas/Nosotros';
import Contacto from './paginas/Contacto';
import Login from './paginas/Login';
import Plataforma from './paginas/Plataforma';
import Principal from './paginas/Principal';
import Local from './paginas/Local';
import Reportes from './paginas/Reportes';
function App() {
  return (    
    <>
    <Router>
    <Sidebar />
     <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Servicios' component={Servicios}/>
        <Route path='/Nosotros' component={Nosotros}/>
        <Route path='/Contacto' component={Contacto}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Plataforma' component={Plataforma}/>
        <Route path='/Principal' component={Principal}/>
        <Route path='/Local' component={Local}/>
        <Route path='/Reportes' component={Reportes}/>
      </Switch>
    </Router>
    </>
  );
}
export default App;

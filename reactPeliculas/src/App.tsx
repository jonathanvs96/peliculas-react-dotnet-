import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';
import Menu from './utils/Menu';
import rutas from './route-config';
import configurarValidaciones from './validaciones';

configurarValidaciones();

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu /> 
        <Routes>
            {rutas.map(ruta => 
            <Route 
                  key={ruta.path} 
                  path={ruta.path} 
                  element={<ruta.componente/>} 
            />)}
        </Routes>     
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
//PARA MANEJAR LA NAVEGACION DE LA APLICACION
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//COMPONENTES QUE USA EL COMPONENTE APP
import Barra from './components/Barra';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';
//COMPONENTE APP
const App = () => {
  console.log('yerko abarras');
  return (
     
    <Router>
      <div>
        <Barra />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componentes/Inicio';
import SobreMim from './Componentes/Sobre Mim';
import Nav from './Componentes/Inicio/Nav';
import Footer from './Componentes/Inicio/Footer';



function App() {
  return (    
      <BrowserRouter>
        <Nav   />    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Routes>
        <Footer />  
      </BrowserRouter>
  );
}

export default App;
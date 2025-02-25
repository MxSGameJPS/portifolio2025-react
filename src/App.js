import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componentes/Inicio';
import SobreMim from './Componentes/Sobre Mim';



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Routes>  
    </BrowserRouter>  
  );
};

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componentes/Inicio';



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>  
    </BrowserRouter>  
  );
};

export default App;

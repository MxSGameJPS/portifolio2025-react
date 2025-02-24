import './App.css';
import Contatos from './Componentes/Contatos';
import Footer from './Componentes/Footer';
import Header from './Componentes/header';
import Nav from './Componentes/Nav';
import Projetos from './Componentes/Projetos';
import Skills from './Componentes/Skills';
import SobreMim from './Componentes/SobreMim';


function App() {
  return (  
    <div className="Appdiv">
      <Nav/>    
      <Header />
      <SobreMim />
      <Skills/>
      <Projetos/>
      <Contatos/>
      <Footer/> 
    </div>    
  );
};

export default App;

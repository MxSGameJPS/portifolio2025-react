import './Inicio.css';
import Nav from './Nav';
import Header from './header';
import SobreMim from './SobreMim';
import Skills from './Skills';
import Projetos from './Projetos';
import Contatos from './Contatos';
import Footer from "./Footer";



const Home = () => {
  return (    
    <div className="Appdiv">
      <Nav/>     
      <Header/> 
      <SobreMim/> 
      <Skills/> 
      <Projetos/> 
      <Contatos/>
      <Footer/> 
    </div>     
  );
};

export default Home;

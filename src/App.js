import './App.css';
import Contatos from './Contatos';
import Footer from './Footer';
import Header from './header';
import Projetos from './Projetos';
import Skills from './Skills';
import SobreMim from './SobreMim';


function App() {
  return (  
    <div>  
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

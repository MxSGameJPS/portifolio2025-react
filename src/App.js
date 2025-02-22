import './App.css';
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
    </div>    
  );
};

export default App;

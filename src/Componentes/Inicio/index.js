import "./Inicio.css";
import Header from "./header";
import SobreMim from "./SobreMim";
import Skills from "./Skills";
import Projetos from "./Projetos";
import Contatos from "./Contatos";

const Home = () => {
  return (
    <div className="Appdiv">
      <Header />
      <SobreMim />
      <Skills />
      <Projetos />
      <Contatos />
    </div>
  );
};

export default Home;

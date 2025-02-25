import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaCode } from "react-icons/fa6";
import "./header.css";
import RedesSociais from "../../RedeSociais";
import Button from "Componentes/Botao";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="title-nome">
        <SlArrowLeft className="icon" size={100} color="#4B3D10" /> <h1><Button /></h1>
        <SlArrowRight className="icon" size={100} color="#4B3D10" />
        </div>
        <div className="title-dev">
        <FaCode className="icon" size={100} color="#4B3D10" />
        <h1>Font-End developer</h1>
        <FaCode className="icon" size={100} color="#4B3D10" />
        </div>
       <RedesSociais/>
      </div>
    </header>
  );
};

export default Header;

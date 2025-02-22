import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaCode } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="title-nome">
        <SlArrowLeft className="icon" size={100} color="#4B3D10" /> <h1>Saulo Pavanello</h1>
        <SlArrowRight className="icon" size={100} color="#4B3D10" />
        </div>
        <div className="title-dev">
        <FaCode className="icon" size={100} color="#4B3D10" />
        <h1>Font-End developer</h1>
        <FaCode className="icon" size={100} color="#4B3D10" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="https://github.com/MxSGameJPS" target="_blank" rel="noreferrer"><VscGithub size={30} color="#4B3D10"></VscGithub> </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/saulopavanello" target="_blank" rel="noreferrer"><TbBrandLinkedin size={30} color="#4B3D10" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/mxsgamejps/" target="_blank" rel="noreferrer"><FaInstagram size={30} color="#4B3D10" /></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

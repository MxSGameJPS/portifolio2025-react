import { TbBrandLinkedin } from "react-icons/tb";
import "./RedesSociais.css";
import { VscGithub } from 'react-icons/vsc';
import { FaInstagram } from "react-icons/fa";

export default function RedesSociais() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a
            href="https://github.com/MxSGameJPS"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub size={30} color="#4B3D10"></VscGithub>{" "}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/saulopavanello"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandLinkedin size={30} color="#4B3D10" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mxsgamejps/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} color="#4B3D10" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

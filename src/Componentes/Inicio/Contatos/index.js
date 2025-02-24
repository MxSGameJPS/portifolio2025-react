import "./Contatos.css";
import { MdOutlineMail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";import { IoLogoWhatsapp } from "react-icons/io";

const Contatos = () => {
    return (
        <section className="contatos">
            <h2>Contatos</h2>
            <div className="contato">
                <ul>
                    <li>
                        <MdOutlineMail size={30} />
                        <span>mxsgamejps@gmail.com</span>
                        
                    </li>
                    <li>
                        {/* <RiLinkedinBoxFill size={30} /> */}
                        <a href="https://www.linkedin.com/in/saulopavanello/" target="_blank" rel="noreferrer"><RiLinkedinBoxFill size={30} /></a>
                        <span>LinkedIn</span>
                    </li>
                    <li>                        
                        <a href="https://github.com/MxSGameJPS" target="_blank" rel="noreferrer"><FaGithub size={30} /></a>
                        <span>GitHub</span>
                    </li>
                    <li>
                        <IoLogoWhatsapp size={30} />
                        <span>+55 51 99339-2983</span>                        
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Contatos;
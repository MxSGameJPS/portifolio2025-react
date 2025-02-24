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
                        <span>Email</span>
                        <p>mxsgamejps@gmail.com</p>
                    </li>
                    <li>
                        <RiLinkedinBoxFill size={30} />
                        <span>LinkedIn</span>
                        <a href="https://www.linkedin.com/in/saulopavanello/" target="_blank" rel="noreferrer"><p>Linkedin</p></a>
                    </li>
                    <li>
                        <FaGithub size={30} />
                        <span>GitHub</span>
                        <a href="https://github.com/MxSGameJPS" target="_blank" rel="noreferrer"><p>GitHub</p></a>
                    </li>
                    <li>
                        <IoLogoWhatsapp size={30} />
                        <span>WhatsApp</span>
                        <p>+55 51 99339-2983</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Contatos;
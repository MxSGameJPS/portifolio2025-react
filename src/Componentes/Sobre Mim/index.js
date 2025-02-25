import { TbBrandLinkedin } from "react-icons/tb";
import "./SobreMim.css";
import { VscGithub } from 'react-icons/vsc';
import { FaInstagram } from "react-icons/fa";

const SobreMim = () => {
  return (
    <section className="sobremim">
      <h2>Sobre mim</h2>
      <nav className="rede">
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
      <div className="biografia">
        <span>
           Oi, eu sou o Saulo Pavanello! Um ex-UI Designer apaixonado
          por criar interfaces incríveis que agora mergulhou de cabeça no mundo
          do desenvolvimento Front-End. Com uma base sólida em HTML, CSS, SASS e
          JavaScript, hoje eu passo meus dias codando com React, trazendo
          designs à vida e aprendendo algo novo a cada projeto.  <br/> <br/> Nasci em 1988,
          sou casado e pai de dois pequenos — um de 4 e outra de 7 —, que me
          inspiram todos os dias. <br/> <b>Meu grande sonho?</b>  Levar minha família pra
          Portugal em 2025, onde quero construir uma vida melhor e crescer como
          desenvolvedor no mercado europeu. Por isso, decidi migrar de carreira:
          troquei o Figma pelo código, mas carrego comigo o olhar afiado pra
          design e a vontade de criar soluções práticas e modernas pra web e
          mobile. <br/><br/> Fora do código, você me encontra jogando game (sou o
          MxSGameJPS nas lives!) ou pensando em como deixar o mundo digital mais
          bonito e funcional. <br/> Atualmente, tô afiando minhas skills na <strong>Alura</strong>,
          trabalhando em projetos com React e já de olho em TypeScript e
          Next.js. <br/><br/> <b>Meu objetivo é simples:</b>  transformar ideias em experiências
          digitais que façam a diferença. <br/> Quer conhecer meu trabalho ou trocar
          uma ideia? Dá uma olhada nos meus projetos aqui no site ou me chama no
          LinkedIn. <br/> <h3>Vamos construir algo incrível juntos?</h3> 
        </span>
      </div>
    </section>
  );
};

export default SobreMim;

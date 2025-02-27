import "./Projetos.css";
import { IoLogoJavascript } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiVite, SiReact  } from "react-icons/si";

const Projetos = () => {
  return (
    <section className="projetos">
      <h2>Projetos</h2>
      <div className="cards">
        <div className="card">
          <iframe
            title="Video Flow Sigma"
            src="https://video-flow-sigma.vercel.app"
            width="400"
            height="282"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <a href='https://video-flow-sigma.vercel.app'>Visit Video Flow Sigma</a>
          <p>Um projeto de aplicação de fluxo de vídeo, onde é possível criar, editar e deletar fluxos de vídeo.</p>
          <div className="techs">
            <span><IoLogoJavascript size={30} /></span>
            <span><TbApi size={30} /></span>
            <span><FaGithub size={30} /></span>
          </div>
          <p className="borda"></p>
          <div className="ferramentas">
            <span>HTML5</span>
            <span>SASS</span>
            <span>JavaScript</span>
          </div>
        </div>
        <div className="card">
          <iframe
            title="Space App"
            src="https://space-app-theta-gules.vercel.app"
            width="400"
            height="282"
            frameBorder="0"
            allowFullScreen
            overflow="hidden"
          ></iframe>
          <a href='hhttps://alurabooks-iota-red.vercel.app' target ="_blank" rel="noreferrer">Space App</a>
          <p>Um projeto incrível, com fotos do espaço, onde podemos filtrar por tags e por palavras. Vamos navegar pelo espaço?</p>
          <div className="techs">
            <span><SiReact  size={30} /></span>
            <span><SiVite size={30} /></span>
            <span><FaGithub size={30} /></span>
          </div>
          <p className="borda"></p>
          <div className="ferramentas">
            <span>VITE</span>
            <span>REACT</span>
            <span>JavaScript</span>
          </div>
        </div>
        <div className="card">
          <iframe
            title="Fokus"
            src="https://fokus-blond-tau.vercel.app"
            width="400"
            height="282"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <a href='https://fokus-blond-tau.vercel.app' target ="_blank" rel="noreferrer">Visite Fokus</a>
          <p>Aplicativo para auxiliar nos momentos de concentração e descanso. Interação com cronômetro e musica.</p>
          <div className="techs">
            <span><IoLogoJavascript size={30} /></span>
            <span><TbApi size={30} /></span>
            <span><FaGithub size={30} /></span>
          </div>
          <p className="borda"></p>
          <div className="ferramentas">
            <span>HTML5</span>
            <span>SASS</span>
            <span>JavaScript</span>
          </div>
        </div>
        <div className="card">
          <iframe
            title="Link na Bio"
            src="https://link-na-bio-seven.vercel.app"
            width="400"
            height="282"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <a href='https://link-na-bio-seven.vercel.app' target ="_blank" rel="noreferrer">Visite Link na Bio</a>
          <p>Link para biografia pessoal de redes socias e sites.</p>
          <div className="techs">
            <span><IoLogoJavascript size={30} /></span>
            <span><TbApi size={30} /></span>
            <span><FaGithub size={30} /></span>
          </div>
          <p className="borda"></p>
          <div className="ferramentas">
            <span>HTML5</span>
            <span>SASS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;

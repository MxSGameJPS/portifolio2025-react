import "./SobreMim.css";
import Foto from "../images/Group1.png"

const SobreMim = () => {
  return (
    <section className="sobre-mim">
    <div>
      <h1>Olá! Me chamo Saulo Pavanello</h1>
      <p>
        Sou apaixonado por tecnologia e desenvolvimento de software, com foco em
        UI/UX Design e Front-End Development. Minha experiência inclui a criação
        de interfaces intuitivas e otimizadas, utilizando React, JavaScript,
        HTML, CSS e SASS. Sempre em busca de inovação, estou aprofundando meus
        conhecimentos em Next.js, Node.js e Web3 para criar aplicações modernas
        e escaláveis. Meu objetivo é desenvolver soluções que unam design
        funcional e alta performance, proporcionando a melhor experiência para
        os usuários. 🚀
      </p>
    </div>
    <img src={Foto} alt='foto minha'/>
    </section>
  );
};

export default SobreMim;

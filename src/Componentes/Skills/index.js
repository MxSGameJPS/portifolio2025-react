import "./Skills.css";
import Iconhtml from "../images/html.svg";
import Iconcss from "../images/css.svg";
import Iconjs from "../images/javascript.svg";
import Iconsass from "../images/sass.svg";
import Iconreact from "../images/React.svg";
import Iconnode from "../images/nodejs.svg";
import IconFireBase from "../images/firebase.svg";
import IconExpress from "../images/expert.svg";
import IconMongo from "../images/mongo.svg";
import Iconfigma from "../images/Figmaskil.svg"
import IconAdobe from "../images/adobexd.svg"
import IconWp from "../images/wordpress.svg"
import IconGitHub from "../images/githubskil.svg"
import IconDocker from "../images/docker.svg"


const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          <img src={Iconhtml} alt="html5" />
          <p>HTML5</p>
        </li>
        <li>
          <img src={Iconcss} alt="" />
          <p>CSS3</p>
        </li>
        <li>
          <img src={Iconsass} alt="" />
          <p>SASS</p>
        </li>
        <li>
          <img src={Iconjs} alt="" />
          <p>JavaScript ES6+</p>
        </li>
        <li>
          <img src={Iconreact} alt="" />
          <p>React</p>
        </li>
      </ul>
      <ul> 
        <li>
          <img src={Iconnode} alt="html5" />
          <p>Node.JS</p>
        </li>
        <li>
          <img src={IconFireBase} alt="" />
          <p>FireBase</p>
        </li>
        <li>
          <img src={IconExpress} alt="" />
          <p>Express</p>
        </li>
        <li>
          <img src={IconMongo} alt="" />
          <p>Mongo DB</p>
        </li>
        <li>
          <img src={Iconreact} alt="" />
          <p>ReactNative</p>
        </li>
      </ul>
      <h2>Ferramentas</h2>
      <ul>
        <li>
            <img src={Iconfigma}  alt=''/>
            <p>Figma</p>
        </li>
        <li>
            <img src={IconAdobe} alt=''/>
            <p>Adobe XD</p>
        </li>
        <li>
            <img src={IconWp} alt=''/>
            <p>Wordpress</p>
        </li>
        <li>
            <img src={IconGitHub} alt=''/>
            <p>GitHub</p>
        </li>
        <li>
            <img src={IconDocker} alt=''/>
            <p>Docker</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;

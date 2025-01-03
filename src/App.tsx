import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import {Link} from "react-router-dom";
import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi"; // Ícones de sol e lua
import './App.css'

import imageJs from './assets/logo-javascript-512.png';
import imageReact from './assets/logo-react-512.png';
import imageNode from './assets/logo-node-js-512.png';
import imageTypescript from './assets/typescript-512.png';
import imageVuejs from './assets/vue-js-512.png';
import imagehtml from './assets/logo-html-5-512.png';
import imagemysql from './assets/mysql-512.png';
import imagepython from './assets/logo-python-512.png';
import imagejava from './assets/logo-java-512.png';
import imagecss from './assets/logo-css-3-512.png';
import imagetailwindcss from './assets/tailwind-css-512.png';

import audioshow from './assets/som_troca.mp3'


// import imagecss from './assets/css.jpg';





import  ProjectCard from "./components/ProjectCard"

export default function App() {
  const audio = new Audio(audioshow)

  function play():void{
    audio.volume = 1;
    audio.play();
    return;
  }

  const [darkMode, setDarkMode] = useState(true); // Estado para o modo escuro



  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Alterna entre os modos
  };

  return (
    <div className={`portifolio ${darkMode ? "dark" : ""}`}>
      <header className={`${darkMode ? "hearderBlack" : "hearderWithe"} hearderButton`}>
        <button onClick={() => {toggleDarkMode(); play()}} className="toggle-button">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        </header>
      <section className={`one ${darkMode ? "" : "bb"}`}>
        <audio src={`${audio}`}>oi</audio>
        <img src="https://avatars.githubusercontent.com/u/100085923?s=400&u=553fccd9a5d1b75b22ce0911a66b16532a78a10a&v=4" alt="" />
        <h1>Kauan Silva</h1>
        <p>Desenvolvedor Full Stack</p>
        <div className="icons">
          <Link to="https://github.com/Kauan678f" target="_blanl">
            <FiGithub className="icon"/>
          </Link>
          <Link to="https://www.linkedin.com/in/kauan-silva-926306233/" target="_blank">
            <SlSocialLinkedin className="icon"/>
          </Link>
          <Link to="mailto:kauancosta7898@gmail.com">
            <MdEmail className="icon"/>
          </Link>
        </div>
        
      </section>
      <section className={`sec two ${darkMode ? "" : "bb"}`}>
          <h1>Sobre Mim</h1>
          <div>
            <p>Desenvolvedor Full Stack com 5 anos de experiência em desenvolvimento web e mobile. Especializado em criar soluções escaláveis e responsivas usando tecnologias modernas.</p>
          </div>
      </section>
      <section className={`sec three ${darkMode ? "" : "bb"}`}>
        <h1>Habilidades</h1>
        <div className="container">
          <div>
            <img src={imageJs} alt="" className="item"/>
          </div>
          <div>
            <img src={imageReact} alt="" className="item"/>
          </div>
          <div>
            <img src={imageNode} alt="" className="item"/>
          </div>
          <div>
            <img src={imageTypescript} alt="" className="item"/>
          </div>
          <div>
            <img src={imageVuejs} alt="" className="item"/>
          </div>
          <div>
            <img src={imagepython} alt="" className="item"/>
          </div>
          <div>
            <img src={imagemysql} alt="" className="item"/>
          </div>
          <div>
            <img src={imagejava} alt="" className="item"/>
          </div>
          <div>
            <img src={imagehtml} alt="" className="item"/>
          </div>
          <div>
            <img src={imagecss} alt="" className="item"/>
          </div>
          <div>
            <img src={imagetailwindcss} alt="" className="item"/>
          </div>
        <div/>
        </div>
      </section>
      <section className={`sec four ${darkMode ? "" : "bb"}`}>
        <h1>Projetos</h1>
        <div className="container">
          <h2>Destaques</h2>
          <div className="containerProject" style={{ display: 'flex', gap: '20px'}}>
            <ProjectCard
                image="https://github.com/Kauan678f/portifolio/blob/main/Imagem%20do%20WhatsApp%20de%202024-12-26%20%C3%A0(s)%2012.24.05_dab3d5b7.jpg?raw=true"
                tags={['React JS', "CSS", 'JavaScript']}
                link="https://findercep.bacode.com.br/"
            />
            <ProjectCard
                image="https://github.com/Kauan678f/searchimages/blob/main/Imagem%20do%20WhatsApp%20de%202024-11-05%20%C3%A0(s)%2010.02.22_36d171cb.jpg?raw=true"
                tags={['React JS', "CSS", 'JavaScript']}
                link="https://kauan678f.github.io/searchimages/"
            />
          </div>
          <h2>Todos os projetos</h2>
          <div className="containerProject" style={{ display: 'flex', gap: '20px'}}>
            <ProjectCard
              image="https://github.com/Kauan678f/Pokedex-ReactJS/blob/main/Imagem%20do%20WhatsApp%20de%202024-11-05%20%C3%A0(s)%2010.13.45_366c3462.jpg?raw=true"
              tags={['React', 'CSS', 'JavaScript']}
              link="https://kauan678f.github.io/Pokedex-ReactJS/"
            />
            <ProjectCard
              image="https://github.com/Kauan678f/searchimages/blob/main/Imagem%20do%20WhatsApp%20de%202024-11-05%20%C3%A0(s)%2010.02.22_36d171cb.jpg?raw=true"
              tags={['React JS', "CSS", 'JavaScript']}
              link="https://kauan678f.github.io/searchimages/"
            />
            <ProjectCard
              image="https://github.com/Kauan678f/portifolio/blob/main/Imagem%20do%20WhatsApp%20de%202024-12-26%20%C3%A0(s)%2012.24.05_dab3d5b7.jpg?raw=true"
              tags={['React JS', "CSS", 'JavaScript']}
              link="https://findercep.bacode.com.br/"
            />
          </div>
        </div>
        <div>
          
    </div>
      </section>
      <section className={`sec five ${darkMode ? "" : "bb"}`}>
        <h1>Contato</h1>
        <div className="buttons">
          <Link to="mailto:kauancosta7898@gmail.com" className="button email"><MdEmail className="i"/> kauancosta7898@gmail.com</Link>
          {/* <Link to="/cv.pdf" download className="button download"><BsDownload className="i"/> Download CV</Link> */}
        </div>
    </section>
    <footer className={darkMode ? "footerBlack": "footer"}>
      <p>© 2024 Kauan Silva. Todos os direitos reservados.</p>
    </footer>
    </div>
  );
}

import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


const Home = () => {
  return (
    <section id="home" className="section home" data-aos="fade-up">
      <div className="home-content">
        <div className="home-text">
          <h1><span>Vinicius</span> | Software Engineer</h1>
          <p>Formado em Engenharia de Software com paixão por backend, full-stack e soluções criativas. Focado em construir sistemas robustos e escaláveis para a web moderna.</p>
          <div className="home-buttons">           
            <a href="#projetos" className="btn primary">Ver Projetos</a>
            <a
              href="/Curriculo.pdf"
              download="Curriculo.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baixar Currículo
            </a>
          </div>
         <div className="social-icons-home flex gap-4 mt-4">
  <a href="https://www.instagram.com/viniciusfroggel/" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={30} />
  </a>
  <a href="https://www.linkedin.com/in/viniciusfroggel/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={30} />
  </a>
  <a href="https://github.com/ViniciusFroggel" target="_blank" rel="noopener noreferrer">
    <FaGithub size={30} />
  </a>
  <a href="mailto:seuemail@example.com">
    <HiOutlineMail size={30} />
  </a>
</div>

        </div>
        <div className="home-img" data-aos="fade-left">
          {/* Usando caminho direto da pasta public */}
          <img src="/img/foto.png" alt="Foto Vinicius" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;

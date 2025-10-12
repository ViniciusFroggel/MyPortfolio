import React from 'react';
import profileImg from '../assets/img/foto.png'; // Importa a imagem

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
          <div className="social-icons-home">
            <a href="https://www.instagram.com/viniciusfroggel/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/viniciusfroggel/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/ViniciusFroggel" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            <a href="mailto:seuemail@example.com"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <div className="home-img" data-aos="fade-left">
          <img src={profileImg} alt="Foto Vinicius" class="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;

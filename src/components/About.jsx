import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="section sobre" data-aos="fade-up">
      <h2>Sobre Mim</h2>
      <div className="sobre-content">
        <div className="sobre-text">
          <p>Formado em Engenharia de Software pela UniBrasil em 2024. 
            Atualmente estou me especializando em Engenharia de Software, DevOps e transformação digital pela PUC-PR, 
            onde em 2026 vou estar concluindo minha Pós-Graduação aos 23 anos.</p>
            
          <p>tenho experiência em desenvolvimento full-stack, 
            criação de APIs robustas e implementação de soluções escaláveis que fazem a diferença no mundo real.</p>
        </div>
        <div className="sobre-cards">
          <div className="card-sobre" data-aos="zoom-in">
            <h3>&lt;/&gt;<br />Desenvolvimento Full-Stack</h3>
            <p>Frontend e Backend modernos</p>
          </div>
          <div className="card-sobre" data-aos="zoom-in">
            <h3>⚡<br />Performance & Otimização</h3>
            <p>Código eficiente e escalável</p>
          </div>
          <div className="card-sobre" data-aos="zoom-in">
            <h3>🚀<br />Inovação & Criatividade</h3>
            <p>Soluções criativas para problemas complexos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

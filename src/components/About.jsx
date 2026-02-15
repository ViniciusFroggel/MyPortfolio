import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="section sobre" data-aos="fade-up">
      <h2>Sobre Mim</h2>
      <div className="sobre-content">
        <div className="sobre-text">
          <p>Sou bacharel em Engenharia de Software e atualmente aprofundo meus conhecimentos através de uma Pós-Graduação em DevOps e Estratégia Cloud pela PUC-PR. Minha trajetória é marcada pelo desenvolvimento de soluções Backend robustas, com foco total em arquiteturas escaláveis. Acredito que a excelência de um software reside na sua eficiência operacional; por isso, integro práticas de automação e deploy contínuo para otimizar o ciclo de entrega. Sou movido pelo desafio de gerenciar infraestruturas resilientes que suportam o crescimento acelerado de produtos digitais.</p>

          <p>Além da construção de APIs, minha atuação estende-se à observabilidade e resiliência de sistemas. Enxergo o desenvolvimento e a infraestrutura como uma unidade, onde a segurança (DevSecOps) e o monitoramento proativo são requisitos fundamentais desde a primeira linha de código. Utilizo tecnologias de containerização e orquestração para garantir que o software seja portátil e performático em qualquer ambiente, sempre buscando a redução da dívida técnica através de automações inteligentes que permitem ao time de engenharia focar no que realmente importa: a entrega de valor contínua e a inovação tecnológica.</p>

        </div>
        <div className="sobre-cards">
          <div className="card-sobre" data-aos="zoom-in">
            <h3>&lt;/&gt;<br />Arquitetura Backend</h3>
            <p>Desenvolvimento de sistemas distribuídos e APIs RESTful focadas em segurança e escalabilidade.</p>
          </div>
          <div className="card-sobre" data-aos="zoom-in">
            <h3>⚡<br />DevOps & Automação</h3>
            <p>Orquestração de infraestrutura e pipelines de integração e entrega contínua (CI/CD) para alta produtividade.</p>
          </div>
          <div className="card-sobre" data-aos="zoom-in">
            <h3>🚀<br />Estabilidade & Cloud</h3>
            <p>Gerenciamento de ambientes em nuvem com foco em performance, monitoramento e disponibilidade.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

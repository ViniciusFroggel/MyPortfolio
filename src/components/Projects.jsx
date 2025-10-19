import React from "react";
import crudClientesImg from "../assets/img/crud-clientes.jpg";
import projeto2Img from "../assets/img/projeto2.jpg";
import projeto3Img from "../assets/img/projeto3.jpg"; // caso tenha imagem, senão pode remover

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "CRUD de Clientes",
      description:
        "Sistema completo de cadastro, edição e exclusão de clientes com PHP + PostgreSQL, hospedado no Render.",
      demo: "https://crud-clientes-vktg.onrender.com",
      github: "https://github.com/ViniciusFroggel/crud-clientes",
      topics: ["PHP", "PostgreSQL", "Docker"],
      image: crudClientesImg,
    },
    {
      id: 2,
      name: "Projeto 2",
      description: "Descrição breve do projeto 2.",
      demo: "#",
      github: "#",
      topics: ["React", "API"],
      image: projeto2Img,
    },
    {
      id: 3,
      name: "Projeto 3",
      description: "Descrição breve do projeto 3.",
      demo: "#",
      github: "#",
      topics: ["Node", "Express"],
      image: projeto3Img,
    },
  ];

  return (
    <section id="projetos" className="section projetos" data-aos="fade-up">
      <h2>Meus Projetos</h2>
      <div className="cards">
        {projects.map((project) => (
          <div
            className="card"
            key={project.id}
            data-aos="zoom-in"
            style={{
              backgroundImage: project.image ? `url(${project.image})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff", // texto visível sobre a imagem
            }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
            <div className="buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn github"
              >
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn demo"
                >
                  Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

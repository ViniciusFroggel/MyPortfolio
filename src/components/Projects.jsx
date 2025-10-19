import React from "react";

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
      image: "/img/crud-clientes.jpg",
    },
    {
      id: 2,
      name: "Projeto 2",
      description: "Descrição breve do projeto 2.",
      demo: "#",
      github: "#",
      topics: ["React", "API"],
      image: "/images/projeto2.jpg",
    },
    {
      id: 3,
      name: "Projeto 3",
      description: "Descrição breve do projeto 3.",
      demo: "#",
      github: "#",
      topics: ["Node", "Express"],
      image: "/images/projeto3.jpg",
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
              color: "#fff",
              padding: "20px",
              borderRadius: "12px",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
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

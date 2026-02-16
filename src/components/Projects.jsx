import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1, // Incremente o ID conforme sua lista
      name: "API REST Estruturada",
      description:
        "Desenvolvimento de uma API REST robusta utilizando Node.js e Express, focada em boas práticas de roteamento e persistência de dados.",
      demo: "", // Geralmente APIs não têm interface visual direta, então mantemos apenas o GitHub
      github: "https://github.com/ViniciusFroggel/API-rest",
      topics: ["C#", "ASP.NET", "JWT", "Swagger", "DTO"],
      image: "/img/teste.jpg", // Sugestão: Use um print do Insomnia, Postman ou do código das rotas
    },
    {
      id: 2, // ou o próximo ID disponível
      name: "Agente de Vendas IA",
      description:
        "Agente inteligente que processa e-mails recebidos, classifica prioridades e sugere respostas automáticas usando Gemini 3 Flash e Next.js.",
      demo: "https://ai-sales-agent-ashy.vercel.app",
      github: "https://github.com/ViniciusFroggel/AgentAI",
      topics: ["Next.js","TypeScript", "Gemini IA", "Prisma", "PostgreSQL", "CI/CD"],
      image: "/img/images.jpg", // Lembre-se de salvar um print do dashboard nesta pasta
},,
    {
      id: 3,
      name: "Infraestrutura Kubernetes & HPA",
      description:
        "Arquitetura de cluster multi-node resiliente com auto-scaling (HPA) e monitoramento via Kubernetes Dashboard.",
      demo: "", // Deixe vazio pois é infraestrutura, o botão 'Site' não aparecerá
      github: "https://github.com/ViniciusFroggel/Kubernetes-project",
      topics: ["Kubernetes", "Docker", "DevOps", "HPA", "SRE"],
      image: "/img/kubernetes-infra.jpg", // Lembre de salvar um print do dashboard com este nome
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
    borderRadius: "12px",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)", // ajuste a opacidade se quiser
      zIndex: 1,
    }}
  ></div>

  {/* Conteúdo do card */}
  <div style={{ position: "relative", zIndex: 2, color: "#fff", padding: "20px" }}>
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
        GitHub
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
</div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

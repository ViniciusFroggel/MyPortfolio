import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ViniciusFroggel/repos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const filteredProjects = data
          .filter(repo => !repo.fork && repo.description)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            topics: repo.topics || [],
          }));

        setProjects(filteredProjects);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '50px' }}>Carregando projetos...</p>;
  if (error) return <p style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '50px', color: 'red' }}>Erro ao carregar projetos: {error.message}</p>;

  return (
    <section id="projetos" className="section projetos" data-aos="fade-up">
      <h2>Meus Projetos</h2>
      <div className="cards">
        {projects.length > 0 ? (
          projects.map(project => (
            <div className="card" key={project.id} data-aos="zoom-in">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.topics.length > 0 && (
                <div className="tags">
                  {project.topics.map(topic => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
              )}
              <div className="buttons">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="btn github">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
                {project.homepage && (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="btn demo">
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--secondary)' }}>Nenhum projeto encontrado ou filtrado.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import './Projects.css';
import { FaPython, FaReact, FaDocker, FaRust, FaExternalLinkAlt } from 'react-icons/fa';
import { SiCplusplus, SiPrometheus, SiPostgresql, SiRedis, SiFastapi, SiPytorch, SiScikitlearn } from 'react-icons/si';
import { MdCable } from 'react-icons/md';
import { projectsData } from '../data';

const techIcons: { [key: string]: JSX.Element } = {
  "Rust": <FaRust />,
  "TCP": <FaRust />,
  "LZ4": <FaRust />,
  "Async I/O": <FaRust />,
  "C++20": <SiCplusplus />,
  "Compilers": <SiCplusplus />,
  "Bytecode": <SiCplusplus />,
  "GC": <SiCplusplus />,
  "Python": <FaPython />,
  "FastAPI": <SiFastapi />,
  "PyTorch": <SiPytorch />,
  "LoRA": <SiPytorch />,
  "LLMs": <SiPytorch />,
  "React": <FaReact />,
  "WebSocket": <MdCable />,
  "Prometheus": <SiPrometheus />,
  "PostgreSQL": <SiPostgresql />,
  "Redis": <SiRedis />,
  "Docker": <FaDocker />,
  "XGBoost": <SiScikitlearn />,
  "Pandas": <FaPython />,
  "Scikit-learn": <SiScikitlearn />,
};

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            onClick={() => project.link && window.open(project.link, '_blank')}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title} {project.link && <FaExternalLinkAlt style={{ fontSize: '0.7rem', marginLeft: '6px' }} />}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

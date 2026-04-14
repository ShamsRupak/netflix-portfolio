import React from 'react';
import './GitHubRepos.css';
import { FaGithub, FaExternalLinkAlt, FaRust, FaPython } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { githubRepos } from '../data';

const langIcons: { [key: string]: JSX.Element } = {
  'Rust': <FaRust />,
  'C++': <SiCplusplus />,
  'Python': <FaPython />,
};

const langColors: { [key: string]: string } = {
  'Rust': '#dea584',
  'C++': '#f34b7d',
  'Python': '#3572A5',
};

const GitHubRepos: React.FC = () => {
  return (
    <div className="github-container">
      <div className="github-header">
        <FaGithub className="github-main-icon" />
        <h2>GitHub Repositories</h2>
        <a href="https://github.com/ShamsRupak" target="_blank" rel="noopener noreferrer" className="github-profile-link">
          @ShamsRupak <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />
        </a>
      </div>

      <div className="repos-grid">
        {githubRepos.map((repo, index) => (
          <a
            key={index}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card"
            style={{ '--delay': `${index * 0.12}s` } as React.CSSProperties}
          >
            <div className="repo-card-header">
              <FaGithub className="repo-icon" />
              <h3>{repo.name}</h3>
            </div>
            <p className="repo-description">{repo.description}</p>
            <div className="repo-footer">
              <span className="repo-language">
                <span className="lang-dot" style={{ backgroundColor: langColors[repo.language] || '#ccc' }}></span>
                {langIcons[repo.language]} {repo.language}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GitHubRepos;

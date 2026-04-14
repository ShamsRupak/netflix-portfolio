import React from 'react';
import './Skills.css';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaLinux, FaDatabase, FaRust, FaBrain, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiPostgresql, SiRedis, SiPrometheus, SiCmake, SiPytorch, SiScikitlearn } from 'react-icons/si';
import { skillsData } from '../data';

const iconMap: { [key: string]: JSX.Element } = {
  FaPython: <FaPython />,
  SiCplusplus: <SiCplusplus />,
  SiRust: <FaRust />,
  SiTypescript: <SiTypescript />,
  FaDatabase: <FaDatabase />,
  SiPytorch: <SiPytorch />,
  SiScikitlearn: <SiScikitlearn />,
  FaBrain: <FaBrain />,
  SiPython: <FaPython />,
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  SiPostgresql: <SiPostgresql />,
  SiRedis: <SiRedis />,
  FaDocker: <FaDocker />,
  FaGitAlt: <FaGitAlt />,
  SiPrometheus: <SiPrometheus />,
  FaLinux: <FaLinux />,
  SiCmake: <SiCmake />,
  FaJava: <FaJava />,
};

const Skills: React.FC = () => {
  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: string, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaGraduationCap, FaCode, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope, FaGithub } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'engineer' | 'researcher' | 'explorer';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Education", imgSrc: "https://picsum.photos/seed/education-sr/250/200", icon: <FaGraduationCap />, route: "/education" },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills-sr/250/200", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/experience-sr/250/200", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/projects-sr/250/200", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/certs-sr/250/200", icon: <FaCertificate />, route: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/contact-sr/250/200", icon: <FaEnvelope />, route: "/contact-me" },
  ],
  engineer: [
    { title: "Projects", imgSrc: "https://picsum.photos/seed/eng-projects/250/200", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/eng-skills/250/200", icon: <FaCode />, route: "/skills" },
    { title: "GitHub", imgSrc: "https://picsum.photos/seed/eng-github/250/200", icon: <FaGithub />, route: "/github" },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/eng-exp/250/200", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/eng-contact/250/200", icon: <FaEnvelope />, route: "/contact-me" },
  ],
  researcher: [
    { title: "Projects", imgSrc: "https://picsum.photos/seed/res-projects/250/200", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/res-skills/250/200", icon: <FaCode />, route: "/skills" },
    { title: "Education", imgSrc: "https://picsum.photos/seed/res-education/250/200", icon: <FaGraduationCap />, route: "/education" },
    { title: "GitHub", imgSrc: "https://picsum.photos/seed/res-github/250/200", icon: <FaGithub />, route: "/github" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/res-certs/250/200", icon: <FaCertificate />, route: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/res-contact/250/200", icon: <FaEnvelope />, route: "/contact-me" },
  ],
  explorer: [
    { title: "GitHub", imgSrc: "https://picsum.photos/seed/exp-github/250/200", icon: <FaGithub />, route: "/github" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/exp-projects/250/200", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/exp-skills/250/200", icon: <FaCode />, route: "/skills" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/exp-contact/250/200", icon: <FaEnvelope />, route: "/contact-me" },
  ],
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;

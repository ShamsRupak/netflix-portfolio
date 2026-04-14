import React from 'react';
import './Education.css';
import { FaGraduationCap, FaFlask, FaChartLine, FaRobot } from 'react-icons/fa';

const Education: React.FC = () => {
  return (
    <div className="education-container">
      <h2 className="education-headline">🎓 Education</h2>

      <div className="education-card education-card-primary">
        <div className="edu-icon-wrapper"><FaRobot className="edu-icon" /></div>
        <div className="edu-content">
          <h3>M.S. Engineering Artificial Intelligence</h3>
          <h4>Stony Brook University</h4>
          <span className="edu-date">Aug 2025 – Dec 2026 (Expected)</span>
          <p>Coursework: Machine Learning, Deep Learning, Robotics, Policy Gradients (REINFORCE), Computer Vision, Motion Planning, Behavior Cloning.</p>
          <p>Research focus on production ML systems — model monitoring, drift detection, and deployment pipelines.</p>
          <div className="edu-highlights">
            <span className="highlight-badge">Teaching Assistant — C++ OOP</span>
            <span className="highlight-badge">HW Scores: 95–100/100</span>
            <span className="highlight-badge">MuJoCo / PyTorch / Colab</span>
          </div>
        </div>
      </div>

      <div className="education-card">
        <div className="edu-icon-wrapper"><FaChartLine className="edu-icon" /></div>
        <div className="edu-content">
          <h3>B.S. Applied Mathematics & Statistics</h3>
          <h4>Stony Brook University</h4>
          <span className="edu-date">2020 – 2024</span>
          <p>Foundation in linear algebra, probability, statistical inference, optimization, and numerical methods.</p>
          <p>Strong quantitative reasoning applied to machine learning, data science, and algorithmic problem-solving.</p>
          <div className="edu-highlights">
            <span className="highlight-badge">Linear Algebra</span>
            <span className="highlight-badge">Probability & Statistics</span>
            <span className="highlight-badge">Optimization</span>
          </div>
        </div>
      </div>

      <div className="coursework-section">
        <h3 className="coursework-title">Key Technical Coursework</h3>
        <div className="coursework-grid">
          {[
            { icon: <FaRobot />, name: 'Machine Learning (ESE 564)', detail: 'Logistic regression, SVMs, neural nets, gradient descent' },
            { icon: <FaRobot />, name: 'Deep Learning (ESE 577)', detail: 'CNNs, transformers, attention, policy gradients' },
            { icon: <FaFlask />, name: 'Robotics & Motion Planning', detail: 'C-space, RRT, ICP, Minkowski sums' },
            { icon: <FaGraduationCap />, name: 'C++ Object-Oriented Programming', detail: 'Inheritance, polymorphism, templates, STL (as TA)' },
          ].map((course, idx) => (
            <div key={idx} className="coursework-card" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="coursework-icon">{course.icon}</div>
              <h4>{course.name}</h4>
              <p>{course.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { timelineData } from '../data';

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(229, 9, 20)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(30, 30, 30)', color: '#fff', border: '1px solid #e50914' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(229, 9, 20)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(30, 30, 30)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(229, 9, 20)', color: '#fff' }
                : { background: 'rgb(30, 30, 30)', color: '#e50914' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: index === 0 ? '#fff' : '#000' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                {item.techStack && <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>}
                {item.summaryPoints.map((point, i) => (
                  <p key={i} style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{point}</p>
                ))}
              </div>
            ) : (
              <div style={{ color: '#e6e6e6' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                {item.summaryPoints.map((point, i) => (
                  <p key={i} style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{point}</p>
                ))}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(229, 9, 20)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;

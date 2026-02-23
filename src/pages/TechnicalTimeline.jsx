import React from "react";

const TechnicalTimeline = () => {
  const timeline = [
    {
      year: "M.Tech",
      title: "RTOS Task Management for EV Systems",
      description:
        "Designed and implemented task scheduling logic in an RTOS environment for EV control systems. Focused on concurrency handling, priority management, and system responsiveness.",
      tech: "RTOS • Embedded C • Task Scheduling"
    },
    {
      year: "M.Tech",
      title: "Automated Intruder Detection System",
      description:
        "Integrated sensor inputs with embedded control logic to create a real-time intrusion detection and alert system.",
      tech: "Embedded C • Sensors • Real-Time Processing"
    },
    {
      year: "B.E",
      title: "Solar-Based Wireless EV Charging Station",
      description:
        "Developed a solar-powered wireless charging architecture for electric vehicles. Worked on embedded control integration and power system coordination.",
      tech: "Embedded Systems • Power Electronics • Control Logic"
    },
    {
      year: "B.E",
      title: "PCB Defect Detection using Image Processing",
      description:
        "Built an automated defect detection pipeline using image processing techniques to improve inspection accuracy and reduce manual errors.",
      tech: "Python • OpenCV • Image Processing"
    }

  ];

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <h2 className="section-heading">Technical Evolution</h2>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="timeline-tech">{item.tech}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalTimeline;
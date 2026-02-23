import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <h2 className="section-heading">About</h2>

        <p className="about-text">
          I am an Embedded Systems Engineer focused on firmware development,
          low-level system design, and hardware–software integration. My work
          spans RTOS-based task management, control logic implementation,
          and performance optimization in constrained environments.
        </p>

        <p className="about-text">
          I have built systems including PCB defect detection using image
          processing, solar-based wireless EV charging architecture, RTOS-driven
          embedded modules, and automated intrusion detection systems.
          I approach engineering with structured debugging, architectural
          clarity, and a strong emphasis on reliability.
        </p>

      </div>
    </section>
  );
};

export default About;
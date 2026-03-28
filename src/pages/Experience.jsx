import React from "react";

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">

        <h2 className="section-heading">Experience</h2>

        <div className="experience-item">

          <div className="experience-header">
            <h3>Graduate Technical Trainee – SoC Firmware</h3>
            <span className="experience-company">
              Intel Corporation, Bengaluru • July 2025 – Present
            </span>
          </div>

          <div className="experience-block">
            <h4>Overview</h4>
            <p>
              Working on client SoC firmware development within graphics configuration
              and feature enablement flows across multiple platform variants.
            </p>
          </div>

          <div className="experience-block">
            <h4>Key Contributions</h4>
            <ul>
              <li>
                Contributed to firmware feature development and platform configuration
                across multiple client SKUs.
              </li>
              <li>
                Implemented platform-specific logic for graphics-related feature enablement.
              </li>
              <li>
                Performed low-level debugging and root-cause analysis across firmware
                initialization and configuration flows.
              </li>
              <li>
                Collaborated in structured code reviews and cross-team issue resolution
                within a large modular firmware codebase.
              </li>
            </ul>
          </div>

          <div className="experience-block">
            <h4>Learning & Exposure</h4>
            <ul>
              <li>
                Gained exposure to firmware architecture, build systems, and platform
                configuration pipelines.
              </li>
              <li>
                Developed understanding of hardware–software interaction in production
                firmware environments.
              </li>
            </ul>
          </div>

          <div className="experience-tech">
            C++ • Firmware Development • Platform Configuration • Debugging • System-Level Thinking
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
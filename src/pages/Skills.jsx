import React from "react";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">

        <h2 className="section-heading">Technical Skills</h2>

        <div className="skills-grid">

          <div className="skill-block">
            <h4>Firmware & Embedded Systems</h4>
            <p>
              SoC firmware configuration, feature enablement flows,
              hardware–software interaction, ARM Cortex-M, firmware
              initialization sequences.
            </p>
          </div>

          <div className="skill-block">
            <h4>Programming</h4>
            <p>
              C, C++, Embedded C, Python.
            </p>
          </div>

          <div className="skill-block">
            <h4>RTOS Concepts</h4>
            <p>
              Zephyr RTOS, task scheduling, multi-threading,
              inter-process communication (IPC).
            </p>
          </div>

          <div className="skill-block">
            <h4>Architecture Exposure</h4>
            <p>
              Power configuration flows, platform SKUs,
              fuse overrides, soft straps, firmware build systems.
            </p>
          </div>

          <div className="skill-block">
            <h4>Development Tools</h4>
            <p>
              Git, Makefiles, Linux development environment,
              Visual Studio, CLion.
            </p>
          </div>

          <div className="skill-block">
            <h4>Hardware / HDL (Academic)</h4>
            <p>
              Verilog, VHDL, FPGA fundamentals,
              Cadence Virtuoso, Quartus Prime, Eagle.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
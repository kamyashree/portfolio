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
            <h4>Scope</h4>
            <p>
              Contributing to client SoC production firmware within graphics
              configuration and feature enablement flows across multiple client SKUs.
            </p>
          </div>

          <div className="experience-block">
            <h4>Key Contributions</h4>
            <ul>
              <li>
                Designed and integrated <strong>Dynamic Graphics Branding</strong>,
                implementing platform-specific configuration logic across SKU variants.
              </li>
              <li>
                Investigated and resolved a <strong>PL4 power limit HSD issue</strong>
                by tracing configuration paths across firmware source, build artifacts,
                and generated binaries.
              </li>
              <li>
                Performed low-level debugging involving configuration flags,
                soft straps, fuse overrides, and initialization sequences.
              </li>
              <li>
                Participated in structured code reviews and cross-team issue triage
                within a large modular firmware codebase.
              </li>
            </ul>
          </div>

          <div className="experience-block">
            <h4>Architecture & Refactoring Work</h4>
            <ul>
              <li>
                Analyzed workstation-class firmware variants (Razor Lake platform)
                to understand platform deltas and reuse boundaries.
              </li>
              <li>
                Refactoring firmware-to-ucode mailbox subsystem to remove deprecated
                HGS command handling by eliminating inheritance coupling and resolving
                build-time dependency impacts.
              </li>
            </ul>
          </div>

          <div className="experience-tech">
            C++ • Production Firmware • Graphics Subsystem • Platform Configuration •
            Soft Straps • Fuse Overrides • Build System • Debug & Root Cause Analysis
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
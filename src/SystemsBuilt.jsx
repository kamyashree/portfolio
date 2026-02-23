import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SystemsBuilt = () => {
  const sectionRef = useRef(null);
  const modulesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      modulesRef.current.forEach((module) => {
        const content = module.querySelector(".system-content");

        gsap.fromTo(
          content,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: module,
              start: "top 75%",
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const systems = [
    {
      title: "PCB Defect Detection System",
      problem: "Manual inspection was inconsistent and slow.",
      work: "Built image processing pipeline for automated defect classification.",
      tech: "OpenCV • C++ • Image Processing",
      result: "Improved detection speed and consistency."
    },
    {
      title: "Wireless EV Charging Architecture",
      problem: "Need for efficient contactless charging.",
      work: "Designed solar-powered wireless EV charging prototype.",
      tech: "Embedded Control • Power Electronics",
      result: "Functional prototype with optimized power transfer."
    },
    {
      title: "RTOS Task Management for EV",
      problem: "Coordinating concurrent tasks in embedded environment.",
      work: "Implemented task scheduling and priority handling.",
      tech: "RTOS • Embedded C • Scheduling",
      result: "Improved system responsiveness."
    },
    {
      title: "Automated Intruder Detection",
      problem: "Real-time surveillance automation.",
      work: "Integrated sensor input with alert system logic.",
      tech: "Embedded Systems • Sensors • Control Logic",
      result: "Real-time alert triggering system."
    }
  ];

  return (
    <section ref={sectionRef} className="systems-built">
      <div className="systems-container">
        <h2 className="systems-title">Systems I’ve Built</h2>

        {systems.map((system, index) => (
          <div
            key={index}
            className="system-module"
            ref={(el) => (modulesRef.current[index] = el)}
          >
            <div className="system-header">
              {system.title}
            </div>

            <div className="system-content">
              <p><strong>Problem:</strong> {system.problem}</p>
              <p><strong>Core Work:</strong> {system.work}</p>
              <p><strong>Stack:</strong> {system.tech}</p>
              <p><strong>Outcome:</strong> {system.result}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default SystemsBuilt;
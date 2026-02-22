import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/Hero";
import Section from "../components/Section";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Hero />

      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <Section>
          <div>
            <h2>Curiosity</h2>
            <p className="section-description">
              I dismantle systems to understand them.
            </p>
          </div>
        </Section>
      </div>

      <div ref={(el) => (sectionsRef.current[1] = el)}>
        <Section>
          <div>
            <h2>Systems</h2>
            <p className="section-description">
              Architecture before implementation.
            </p>
          </div>
        </Section>
      </div>

      <div ref={(el) => (sectionsRef.current[2] = el)}>
        <Section>
          <div>
            <h2>Growth</h2>
            <p className="section-description">
              Iteration is intelligence in motion.
            </p>
          </div>
        </Section>
      </div>

      <div ref={(el) => (sectionsRef.current[3] = el)}>
        <Section>
          <div>
            <h2>Contact</h2>
            <p className="section-description">
              Thinking in public. Learning in layers.
            </p>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Home;
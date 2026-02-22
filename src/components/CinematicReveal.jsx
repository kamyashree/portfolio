import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CinematicReveal = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Pin section for cinematic pause
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            scrub: true,
            pin: true
          }
        }
      );

      // Slow drifting glow movement
      gsap.to(glowRef.current, {
        x: 100,
        duration: 30,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cinematic-reveal">

      <div ref={glowRef} className="reveal-glow" />

      <div className="reveal-overlay">
        <h2 ref={textRef}>
          Engineering Quiet Systems That Expand Beyond The Visible.
        </h2>
      </div>

    </section>
  );
};

export default CinematicReveal;
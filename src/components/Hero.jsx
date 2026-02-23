import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const roomRef = useRef(null);
  const heroTextRef = useRef(null);
  const bgRef = useRef(null);
  const obj1Ref = useRef(null);
  const obj2Ref = useRef(null);
  const characterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Fade-in text
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );

      // Subtle object drift
      gsap.to(obj1Ref.current, {
        rotation: 2,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(obj2Ref.current, {
        rotation: -3,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(characterRef.current, {
        y: -6,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Engineered parallax (inertia-based)
      const bgX = gsap.quickTo(bgRef.current, "x", { duration: 0.8, ease: "power3.out" });
      const bgY = gsap.quickTo(bgRef.current, "y", { duration: 0.8, ease: "power3.out" });

      const obj1X = gsap.quickTo(obj1Ref.current, "x", { duration: 0.6, ease: "power3.out" });
      const obj1Y = gsap.quickTo(obj1Ref.current, "y", { duration: 0.6, ease: "power3.out" });

      const obj2X = gsap.quickTo(obj2Ref.current, "x", { duration: 0.6, ease: "power3.out" });
      const obj2Y = gsap.quickTo(obj2Ref.current, "y", { duration: 0.6, ease: "power3.out" });

      const handleMouseMove = (e) => {
        const dx = e.clientX / window.innerWidth - 0.5;
        const dy = e.clientY / window.innerHeight - 0.5;

        bgX(dx * 12);
        bgY(dy * 12);

        obj1X(dx * 32);
        obj1Y(dy * 32);

        obj2X(dx * 22);
        obj2Y(dy * 22);
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Scroll-based depth system
      gsap.to(roomRef.current, {
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: roomRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(bgRef.current, {
        filter: "blur(18px)",
        ease: "none",
        scrollTrigger: {
          trigger: roomRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to([obj1Ref.current, obj2Ref.current], {
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: roomRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };

    }, roomRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={roomRef} className="hero-room">

      <div ref={bgRef} className="room-background" />

      <div ref={obj1Ref} className="room-object object-1">
        <svg viewBox="0 0 100 100" className="room-icon">
          <rect x="20" y="25" width="60" height="50" rx="4"
            fill="none" stroke="white" strokeWidth="2" />
          <line x1="50" y1="25" x2="50" y2="75"
            stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      <div ref={obj2Ref} className="room-object object-2">
        <svg viewBox="0 0 100 100" className="room-icon">
          <circle cx="50" cy="50" r="20"
            fill="none" stroke="white" strokeWidth="2" />
          <circle cx="50" cy="50" r="8"
            fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div ref={characterRef} className="character-placeholder">
  <svg viewBox="0 0 200 300" className="character-svg">
    <ellipse cx="100" cy="80" rx="40" ry="45" fill="#1a0033" />
    <rect x="60" y="120" width="80" height="120" rx="40" fill="#14002b" />
  </svg>
</div>

      <div ref={heroTextRef} className="hero-text">
        <h1>Kamyashree T</h1>
        <p>Embedded Systems Engineer • Firmware Developer</p>
      </div>

      <div className="room-floor" />

    </section>
  );
};

export default Hero;
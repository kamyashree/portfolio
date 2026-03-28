import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroTextRef = useRef(null);
  const coreRef = useRef(null);
  const terminalRef = useRef(null);
  const cpuCoreRef = useRef(null);
  const cpuOutlineRef = useRef(null);

  // 🔥 FIX: prevent double execution in React StrictMode
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    // TEXT ENTRY
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // FLOATING CORE
    gsap.to(coreRef.current, {
      y: -8,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 🔥 INITIAL SLOW PULSE (booting)
    const pulse = gsap.to(cpuCoreRef.current, {
      scale: 1.12,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      transformOrigin: "center"
    });

    // OUTLINE BREATH
    gsap.to(cpuOutlineRef.current, {
      opacity: 0.6,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 🧹 CLEAR TERMINAL (important)
    terminalRef.current.innerHTML = "";

    // TERMINAL LOGS
    const lines = [
      "Initializing firmware...",
      "Loading modules...",
      "Establishing hardware interface...",
      "System ready."
    ];

    let i = 0;

    const typeLine = () => {
      if (i >= lines.length) return;

      const line = document.createElement("div");
      line.className = "terminal-line";
      terminalRef.current.appendChild(line);

      let j = 0;

      const typing = setInterval(() => {
        if (j < lines[i].length) {
          line.textContent += lines[i][j];
          j++;
        } else {
          clearInterval(typing);

          // 🔥 WHEN SYSTEM READY
          if (lines[i] === "System ready.") {
            // speed up pulse
            pulse.timeScale(2.2);

            // glow boost
            gsap.to(cpuCoreRef.current, {
              boxShadow: "0 0 35px rgba(150,0,255,0.9)",
              duration: 0.4
            });

            // subtle flash
            gsap.fromTo(
              cpuOutlineRef.current,
              { opacity: 1 },
              { opacity: 0.6, duration: 0.6 }
            );
          }

          i++;
          setTimeout(typeLine, 400);
        }
      }, 25);
    };

    setTimeout(typeLine, 800);

  }, []);

  return (
    <section className="hero-room">

      {/* CPU CORE */}
      <div ref={coreRef} className="hero-core">
        <svg viewBox="0 0 200 200" className="cpu-svg">

          {/* OUTER CHIP */}
          <rect
            ref={cpuOutlineRef}
            x="60"
            y="60"
            width="80"
            height="80"
            rx="16"
            className="cpu-outline"
          />

          {/* INNER CORE */}
          <rect
            ref={cpuCoreRef}
            x="85"
            y="85"
            width="30"
            height="30"
            rx="6"
            className="cpu-core"
          />

          {/* CONNECTION LINES */}
          <line x1="100" y1="20" x2="100" y2="60" className="cpu-line" />
          <line x1="100" y1="140" x2="100" y2="180" className="cpu-line" />
          <line x1="20" y1="100" x2="60" y2="100" className="cpu-line" />
          <line x1="140" y1="100" x2="180" y2="100" className="cpu-line" />

        </svg>
      </div>

      {/* TEXT */}
      <div ref={heroTextRef} className="hero-text">
        <h1>Kamyashree T</h1>
        <p>Embedded Systems Engineer • Firmware Developer</p>

        <div ref={terminalRef} className="hero-terminal"></div>
      </div>

    </section>
  );
};

export default Hero;
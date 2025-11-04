import React, { useEffect, useRef, memo } from "react";
import "../styles/About.css";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about-section fade-in">
      <section className="about-section">
        <div className="about-wrapper">
          <div className="about-content">
            <h1 className="about-heading">
              DEVELOPER,
              <br /> DESIGNER, <br /> CREATOR /
            </h1>
            <p className="about-text">
              With a passion for design and development, I take projects
              from ideation to launch, ensuring a seamless journey that
              leaves a lasting positive impact on the digital land scape
              and your business.
            </p>

            <h2 className="about-me-title">(ABOUT ME)</h2>

            <p className="about-me">
              I'm a Saad, a developer, designer, and a brand strategist with a
              passion for crafting seamless digital experiences.
              <br />
              <br />
              <br />
              Fueled by caffeine and creativity, I thrive on solving complex
              problems—because debugging at 3 AM is just a puzzle with higher
              stakes! Whether it's designing sleek interfaces or developing
              scalable digital solutions, I bring ideas to life with clean,
              efficient code.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default memo(About);

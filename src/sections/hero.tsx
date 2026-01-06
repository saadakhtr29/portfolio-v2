"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import BubbleMenu from "../components/BubbleMenu";
import DotGrid from "../components/DotGrid";
import TextPressure from "../components/TextPressure";
import TextType from "../components/TextType";
import StaggerTestimonials from "../components/StaggerTestimonials";
import "../styles/Hero.css";
import "../styles/AnimatedSections.css";

const items = [
  {
    label: "home",
    href: "",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "about",
    href: "about",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "projects",
    href: "projects",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "blog",
    href: "blogs",
    ariaLabel: "Blog",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "contact",
    href: "contact",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

// Props for each animated section
interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

// === SECTION 1 (Hero) ===
const HeroSection: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section style={{ scale, rotate }} className="section section-light">
      <BubbleMenu
        logo={
          <span
            style={{ fontWeight: 400, color: "white", fontFamily: "monospace" }}
          >
            Saad Akhtar
          </span>
        }
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#000"
        menuContentColor="#fff"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />

      <div className="hero-section">
        <div className="floating-shapes">
          <div style={{ width: "100%", height: "890px", position: "relative" }}>
            <DotGrid
              dotSize={5}
              gap={8}
              baseColor="#e6e6e6ff"
              activeColor="#a5a5a4ff"
              proximity={110}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
        </div>

        <div className="hero-content">
          <div
            style={{
              position: "relative",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextPressure
              text="Hello!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#000000ff"
              strokeColor="#ff0000"
              minFontSize={36}
            />

            <TextType
              text={[
                "I’m Saad Akhtar, a Full-Stack Developer, Designer and open source contributor powered by caffeine.",
              ]}
              typingSpeed={65}
              pauseDuration={1200}
              showCursor={true}
              cursorCharacter="|"
              className="hero-subtitle"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};


const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section style={{ scale, rotate }} className="section section--dark">
      <div className="section__grid-overlay"></div>
      <article className="section__content">
        <h1 className="section__heading">
          Look At The Cool Stuff I Made So
          <br /> You Don’t Have To
        </h1>
        <p className="project-sub-head">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          repellendus commodi fugit tempore.
          <br /> Perferendis dicta neque inventore tenetur. Esse expedita enim
          voluptatibus,
          <br /> ut sunt exercitationem sapiente aperiam quae repellendus
          minima?
        </p>
        <StaggerTestimonials />
      </article>
    </motion.section>
  );
};


const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="animated-sections">
      <HeroSection scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default Hero;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "../styles/TestimonialCarousel.css";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  ProjectUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    title: "Senior Software Engineer, Cloud Infrastructure",
    description:
      "Working with this team completely changed our infrastructure game. The support and expertise were incredible. They delivered beyond our expectations and helped us scale to millions of users.",
    imageUrl:
      "",
    githubUrl: "#",
    ProjectUrl: "#",
  },
  {
    name: "Jessica Roberts",
    title: "Lead Data Scientist, InsightX",
    description:
      "The data analytics platform they built gave our team the confidence and tools needed for true data-driven decisions. Their dashboarding capabilities went above and beyond our expectations.",
    imageUrl:
      "",
    githubUrl: "#",
    ProjectUrl: "#",
  },
  {
    name: "William Carter",
    title: "VP Product, NovaLabs",
    description:
      "NovaLabs helped our products find the perfect market fit. Their engineering team exceeded every delivery milestone and provided exceptional technical leadership.",
    imageUrl:
      "",
    githubUrl: "#",
    ProjectUrl: "#",
  },
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((i) => (i + 1) % testimonials.length);
  const handlePrevious = () =>
    setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  const socialIcons = [
    { icon: Github, url: current.githubUrl, label: "GitHub" },
    { icon: Twitter, url: current.ProjectUrl, label: "Twitter" },
  ];

  return (
    <div className="carousel">
      <div className="carousel-container">
        {/* Left (Image) */}
        <div className="carousel-avatar">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={current.imageUrl}
                alt={current.name}
                width={470}
                height={470}
                className="carousel-img"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right (Card) */}
        <div className="carousel-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="carousel-name">{current.name}</h2>
              <p className="carousel-title">{current.title}</p>
              <p className="carousel-desc">{current.description}</p>

              <div className="carousel-socials">
                {socialIcons.map(
                  ({ icon: Icon, url, label }) =>
                    url && (
                      <a
                        href={url}
                        key={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="social-btn"
                      >
                        <Icon size={20} />
                      </a>
                    )
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="carousel-nav">
        <button onClick={handlePrevious} aria-label="Previous">
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>

        <button onClick={handleNext} aria-label="Next">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/StaggerTestimonials.css";

const SQRT_5000 = Math.sqrt(5000);

interface Testimonial {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
}

interface TestimonialCardProps {
  position: number;
  testimonial: Testimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const testimonials: Testimonial[] = [
  { tempId: 0, testimonial: "My favorite solution in the market. We work 5x faster with COMPANY.", by: "Alex, CEO at TechCorp", imgSrc: "" },
  { tempId: 1, testimonial: "I'm confident my data is safe with COMPANY.", by: "Dan, CTO at SecureNet", imgSrc: "" },
  { tempId: 2, testimonial: "We were lost before we found COMPANY. Can't thank you guys enough!", by: "Stephanie, COO at InnovateCo", imgSrc: "" },
  { tempId: 3, testimonial: "COMPANY makes planning for the future seamless.", by: "Marie, CFO at FuturePlanning", imgSrc: "" },
  { tempId: 4, testimonial: "If I could give 11 stars, I'd give 12.", by: "Andre, Head of Design at CreativeSolutions", imgSrc: "" },
  { tempId: 5, testimonial: "If I could give 11 stars, I'd give 12.", by: "Andre, Head of Design at CreativeSolutions", imgSrc: "" }
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      className={`testimonial-card ${isCenter ? "center" : ""}`}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -40%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0 8px 0 4px #ccc" : "none",
      }}
      onClick={() => handleMove(position)}
    >
      <span
        className="decor-line"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img src={testimonial.imgSrc} alt={testimonial.by} className="testimonial-img" />
      <h3>"{testimonial.testimonial}"</h3>
      <p>- {testimonial.by}</p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
   <>
    <div className="stagger-wrapper">
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      
    </div>
    <div className="controls">
        <button onClick={() => handleMove(-1)} aria-label="Previous testimonial">
          <ChevronLeft />
        </button>
        <button onClick={() => handleMove(1)} aria-label="Next testimonial">
          <ChevronRight />
        </button>
      </div>
   </>
  );
};

export default StaggerTestimonials;

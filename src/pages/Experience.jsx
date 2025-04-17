import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaBriefcase,
  FaCode,
  FaVideo,
  FaBullhorn,
  FaPen,
} from "react-icons/fa";
import ufo from "../assets/icons8-ufo-96.png"; // Keep UFO icon
import "../styles/experience.scss";

function Experience() {
  const experiences = [
    {
      year: 2018,
      title: "Freelance Content Creator",
      description:
        'Began creating <span class="highlight">social media content</span> and experimenting with video editing tools.',
      icon: <FaPen />, // Placeholder icon
    },
    {
      year: 2020,
      title: "Content Creator",
      description:
        'Developed skills in <span class="highlight">video editing</span> and content creation for social media platforms.',
      icon: <FaVideo />,
    },
    {
      year: 2021,
      title: "App Developer",
      description:
        'Built <span class="highlight">Thin Thai</span>, a Thai language learning app for Burmese speakers using Flutter.',
      icon: <FaCode />,
    },
    {
      year: 2022,
      title: "Translator & Developer",
      description:
        'Worked on translation projects and advanced <span class="highlight">app development</span> skills.',
      icon: <FaBriefcase />,
    },
    {
      year: 2023,
      title: "Digital Marketer",
      description:
        'Expanded expertise in <span class="highlight">digital marketing</span> and Photoshop for content creation.',
      icon: <FaBullhorn />,
    },
    {
      year: 2024,
      title: "Portfolio & Open Source",
      description:
        'Created this <span class="highlight">portfolio</span> and contributed to open-source projects.',
      icon: <FaCode />,
    },
  ];

  const controls = useAnimation();
  const [hoveredYear, setHoveredYear] = useState(null);
  const timelineRef = useRef(null);

  // Animation for UFO based on hovered year
  const handleHover = (yearIndex) => {
    setHoveredYear(yearIndex);
    // Adjusted positions for 6 years
    const positions = [50, 240, 450, 657, 862, 1072]; // SVG units
    controls.start({
      x: positions[yearIndex],
      rotate: [0, 5, -5, 0], // UFO wobble
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const handleHoverEnd = () => {
    setHoveredYear(null);
    controls.start({
      x: 50, // Start at 2018
      rotate: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hoveredYear === null) {
          controls.start({ x: 50, transition: { duration: 0 } });
        }
      },
      { threshold: 0.5 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, [controls, hoveredYear]);

  return (
    <motion.section
      className="experience-section"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="timeline-container" ref={timelineRef}>
        <svg
          className="timeline-path"
          viewBox="0 0 1200 100" // Expanded for 6 years
          preserveAspectRatio="none"
        >
          <path
            d="M50,50 Q150,20 250,50 T450,50 T650,50 T850,50 T1050,50" // Adjusted for 6 points
            fill="none"
            stroke="rgba(0, 183, 235, 0.3)"
            strokeWidth="8"
            strokeDasharray="10,10"
          />
          {experiences.map((exp, index) => (
            <g key={exp.year}>
              <circle
                cx={50 + index * 200} // Closer spacing for 6 years
                cy="50"
                r="12"
                fill={hoveredYear === index ? "#00b7eb" : "#f1f5f9"}
                className="year-marker"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleHoverEnd}
              />
              <text
                x={50 + index * 200}
                y="80"
                fill="#f1f5f9"
                textAnchor="middle"
                fontSize="14"
              >
                {exp.year}
              </text>
            </g>
          ))}
        </svg>
        <motion.div
          className="submachine"
          initial={{ x: 50 }}
          animate={controls}
        >
          <img src={ufo} alt="UFO" className="submachine-img" />
        </motion.div>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              className={`experience-card ${
                hoveredYear === index ? "active" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleHoverEnd}
            >
              <div className="year">{exp.year}</div>
              <div className="card-content">
                <div className="icon">{exp.icon}</div>
                <h3>{exp.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: exp.description }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import zannyPhoto from "../assets/1.png";
import "../styles/home.scss";

function Home() {
  const sections = [
    {
      id: "about",
      title: "About Me",
      path: "/",
      content: (
        <div className="section-content-inner">
          <motion.img
            src={zannyPhoto}
            alt="Zanny"
            className="section-photo"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 120,
            }}
          />
          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            I’m Cato, a <span className="highlight">content creator</span> with
            over 5 years of experience in{" "}
            <span className="highlight">video editing</span>, social media
            management, app development, and translation. I craft engaging
            digital experiences, from dynamic videos to innovative apps like{" "}
            <span className="highlight">Thin Thai</span>.
          </motion.p>
        </div>
      ),
      isFull: true,
    },
    {
      id: "projects",
      title: "Projects",
      path: "/projects",
      content: (
        <div className="section-content-inner">
          <p>
            Thin Thai: A Thai language learning app for Burmese speakers, built
            with Flutter.
          </p>
        </div>
      ),
      isFull: false,
    },
    {
      id: "skills",
      title: "Skills",
      path: "/skills",
      content: (
        <div className="section-content-inner">
          <p>
            Video Editing, Social Media Management, App Development, Translation
          </p>
        </div>
      ),
      isFull: false,
    },
    {
      id: "experience",
      title: "Experience",
      path: "/experience",
      content: (
        <div className="section-content-inner">
          <p>
            Over 5 years of experience in{" "}
            <span className="highlight">content creation</span>, app
            development, and digital marketing.
          </p>
        </div>
      ),
      isFull: false,
    },
    {
      id: "contact",
      title: "Contact",
      path: "/contact",
      content: (
        <div className="section-content-inner">
          <p>
            Reach out on{" "}
            <a
              href="https://www.facebook.com/Zannyitun.23"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/@Wuffy-zyx"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            , or{" "}
            <a
              href="https://github.com/Zaanyitun"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      ),
      isFull: false,
    },
  ];

  return (
    <section className="homepage-sections">
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          className={`section ${section.isFull ? "full" : "preview"}`}
          initial={{ opacity: 0, rotateY: 90, y: 150 }}
          animate={{ opacity: 1, rotateY: 0, y: 0 }}
          whileHover={{
            scale: 1.03,
            y: -10,
            transition: { type: "spring", stiffness: 100 },
          }}
          transition={{
            duration: 1,
            delay: index * 0.4,
            ease: "easeOut",
            type: "spring",
            stiffness: 90,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.4 + 0.2, duration: 0.6 }}
          >
            {section.title}
          </motion.h2>
          {section.content}
          {!section.isFull && (
            <motion.div
              className="see-more"
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{
                scale: 1.3,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.4, repeat: 1 },
              }}
              transition={{
                delay: index * 0.4 + 0.5,
                duration: 0.6,
                type: "spring",
              }}
            >
              <Link to={section.path}>See More</Link>
            </motion.div>
          )}
        </motion.div>
      ))}
    </section>
  );
}

export default Home;

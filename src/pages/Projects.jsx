import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    { name: 'To-Do List App', description: 'A task management app with local storage.', link: 'https://your-todo-app.com', github: 'https://github.com/yourusername/todo-app' },
    { name: 'Weather Dashboard', description: 'Real-time weather data with a 5-day forecast.', link: 'https://your-weather-app.com', github: 'https://github.com/yourusername/weather-app' },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
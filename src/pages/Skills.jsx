import { motion } from 'framer-motion';
import { PieChart } from 'react-minimal-pie-chart';
import { 
  FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaGitAlt, FaLanguage,
  FaVideo, FaPaintBrush, FaBullhorn, FaFilm, FaShareSquare, FaEnvelope
} from 'react-icons/fa';

function Skills() {
  const skills = [
    { name: 'React', percentage: 80, icon: <FaReact /> },
    { name: 'JavaScript', percentage: 75, icon: <FaJsSquare /> },
    { name: 'CSS', percentage: 70, icon: <FaCss3Alt /> },
    { name: 'HTML', percentage: 85, icon: <FaHtml5 /> },
    { name: 'Git', percentage: 60, icon: <FaGitAlt /> },
    { name: 'Translate English to Burmese', percentage: 90, icon: <FaLanguage /> },
    { name: 'Video Editing', percentage: 70, icon: <FaVideo /> },
    { name: 'Photoshop', percentage: 65, icon: <FaPaintBrush /> },
    { name: 'Digital Marketing', percentage: 80, icon: <FaBullhorn /> },
    { name: 'Video Creation', percentage: 75, icon: <FaFilm /> },
    { name: 'Social Media Controlling', percentage: 85, icon: <FaShareSquare /> },
    { name: 'Email Marketing', percentage: 70, icon: <FaEnvelope /> },
  ];

  const colors = [
    '#00b7eb', '#3b82f6', '#1e90ff', '#4682b4', '#87ceeb',
    '#00ced1', '#20b2aa', '#48d1cc', '#5f9ea0', '#7fffd4',
    '#66cdaa', '#afeeee',
  ];

  const pieData = skills.map((skill, index) => ({
    title: skill.name,
    value: skill.percentage,
    color: colors[index % colors.length],
  }));

  const pairedSkills = [];
  for (let i = 0; i < skills.length; i += 2) {
    pairedSkills.push(skills.slice(i, i + 2));
  }

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="skills-list">
        {pairedSkills.map((pair, pairIndex) => (
          <div key={pairIndex} className="skill-pair">
            {pair.map((skill, skillIndex) => (
              <div
                key={skill.name}
                className="skill-item"
              >
                <motion.div
                  className="skill-name"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.3 + (pairIndex * 2 + skillIndex) * 0.1,
                    duration: 0.4,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                  {skill.name} - {skill.percentage}%
                </motion.div>
                <div
                  className="progress-bar"
                  style={{ width: `${skill.percentage}%` }} // Static width
                >
                  <motion.div
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{
                      delay: 0.5 + (pairIndex * 2 + skillIndex) * 0.1,
                      duration: 0.8,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <motion.div
        className="skills-pie-chart"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
      >
        <h3>All Skills Overview</h3>
        <PieChart
          data={pieData}
          lineWidth={20}
          paddingAngle={2}
          rounded
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{
            fontSize: '4px',
            fontFamily: 'Inter, sans-serif',
            fill: '#f1f5f9',
            fontWeight: '500',
          }}
          labelPosition={130}
          animate
          radius={40}
          startAngle={90}
          lengthAngle={360}
          segmentsShift={1}
          segmentsStyle={{ transition: 'transform 0.3s' }}
          viewBoxSize={[500, 500]}
          center={[250, 250]}
        />
      </motion.div>
    </motion.section>
  );
}

export default Skills;
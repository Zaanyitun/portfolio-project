import { motion } from 'framer-motion';
import zannyPhoto from '../assets/1.png';

function Home() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="about-content">
        { <motion.img
          src={zannyPhoto}
          alt="Zanny"
          className="about-photo"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        /> }
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
         Hi, I’m Cato — a content creator with 5+ years of experience in video editing, social media management, and translation. I specialize in creating fast-paced, engaging content for YouTube, Facebook, TikTok, and Snapchat. I run a Facebook page with over 384,000 followers and a YouTube channel with 5,000+ subscribers, growing fast with fun, educational content about cute pets, tech tools, mobile games, and AI trends. I'm also building a Thai language learning app for Burmese speakers called "Thin Thai" using Flutter, VS Code, Android Studio, and Xcode. I’m passionate about digital creation, constantly learning new skills in UX/UI design, coding, and marketing—bringing energy and creativity to every project I take on.



        </motion.p>
      </div>
    </motion.section>
  );
}

export default Home;
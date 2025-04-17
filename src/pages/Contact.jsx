import { motion } from 'framer-motion';
import { 
  FaFacebookF, FaYoutube, FaTelegramPlane, FaInstagram, FaSnapchatGhost, FaTiktok,
  FaTwitter as FaX, FaGithub
} from 'react-icons/fa';

function Contact() {
  const socialMedia = [
    { name: 'Facebook', link: 'https://facebook.com', icon: <FaFacebookF /> },
    { name: 'YouTube', link: 'https://youtube.com', icon: <FaYoutube /> },
    { name: 'Telegram', link: 'https://telegram.org', icon: <FaTelegramPlane /> },
    { name: 'Instagram', link: 'https://instagram.com', icon: <FaInstagram /> },
    { name: 'Snapchat', link: 'https://snapchat.com', icon: <FaSnapchatGhost /> },
    { name: 'TikTok', link: 'https://tiktok.com', icon: <FaTiktok /> },
    { name: 'X', link: 'https://x.com/yourusername', icon: <FaX /> }, // Replace with your X username
    { name: 'GitHub', link: 'https://github.com/yourusername', icon: <FaGithub /> }, // Replace with your GitHub username
  ];

  const pairedSocials = [];
  for (let i = 0; i < socialMedia.length; i += 2) {
    pairedSocials.push(socialMedia.slice(i, i + 2));
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="contact-section"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {/* Contact Form */}
        <motion.div
          className="contact-form"
          whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(0, 183, 235, 0.7)' }}
          whileTap={{ scale: 0.98 }}
        >
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 183, 235, 0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="social-media"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3>Connect with Me</h3>
          <div className="social-links">
            {pairedSocials.map((pair, pairIndex) => (
              <div key={pairIndex} className="social-pair">
                {pair.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    <motion.div
                      className="social-icon"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.div>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
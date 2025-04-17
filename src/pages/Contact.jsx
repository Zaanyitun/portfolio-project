import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaTwitter as FaX,
  FaGithub,
} from "react-icons/fa";
import "../styles/contact.scss";

function Contact() {
  const socialMedia = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/Zannyitun.23",
      icon: <FaFacebookF />,
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@Wuffy-zyx",
      icon: <FaYoutube />,
    },
    { name: "Telegram", link: "t.me@catozyan", icon: <FaTelegramPlane /> },
    {
      name: "Instagram",
      link: "https://www.instagram.com/zan_nyi_tun/",
      icon: <FaInstagram />,
    },
    {
      name: "Snapchat",
      link: "https://snapchat.com",
      icon: <FaSnapchatGhost />,
    },
    {
      name: "TikTok",
      link: "https://www.tiktok.com/@catohome0",
      icon: <FaTiktok />,
    },
    { name: "X", link: "https://x.com/zan_nyi", icon: <FaX /> },
    {
      name: "GitHub",
      link: "https://github.com/Zaanyitun",
      icon: <FaGithub />,
    },
  ];

  const pairedSocials = [];
  for (let i = 0; i < socialMedia.length; i += 2) {
    pairedSocials.push(socialMedia.slice(i, i + 2));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Add form submission logic (e.g., API call)
    alert("Form submitted! (Placeholder)");
  };

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
        <motion.div
          className="contact-form"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

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

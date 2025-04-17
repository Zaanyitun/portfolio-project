import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './App.scss';

function App() {
  return (
    <Router>
      <motion.div
        className="portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="header-container">
            <motion.h1
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Zanny's Portfolio
            </motion.h1>
            <nav>
              {[
                { path: '/', label: 'Home' },
                { path: '/projects', label: 'Projects' },
                { path: '/skills', label: 'Skills' },
                { path: '/contact', label: 'Contact' },
              ].map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <motion.span
                    whileHover={{ scale: 1.1, color: '#00b7eb' }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    {item.label}
                  </motion.span>
                </NavLink>
              ))}
            </nav>
          </div>
        </motion.header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div>Page Not Found - Try /contact</div>} />
          </Routes>
        </main>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>© 2025 Zanny. Built with React.</p>
        </motion.footer>
      </motion.div>
    </Router>
  );
}

export default App;
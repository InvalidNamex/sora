import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const Hero = () => {
  const { t, toggleLang, isDark, toggleTheme } = useLang();

  return (
    <div className="hero-wrapper">
      <img src="/assets/cover.png" alt="Sora Perfumes Background" className="hero-bg" />
      <div className="hero-overlay"></div>
      
      <nav className="navbar container">
        <motion.img 
          src="/assets/logo.png" 
          alt="Sora Logo" 
          className="navbar-logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.ul 
          className="navbar-links"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <li><a href="#about">{t.nav.story}</a></li>
          <li><a href="#gallery">{t.nav.collection}</a></li>
          <li>
            <button className="lang-toggle" onClick={toggleLang}>
              {t.langToggle}
            </button>
          </li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </motion.ul>
      </nav>

      <div className="container" style={{ position: 'relative', width: '100%' }}>
        <div className="hero-content">
          <motion.h1 
            style={{ fontSize: '4.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            {t.hero.titleLine1} <br /> {t.hero.titleLine2} <span className="text-gradient">{t.hero.titleAccent}</span>
          </motion.h1>
          <motion.p 
            style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '480px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <button className="btn-primary">{t.hero.cta1}</button>
            <button className="btn-secondary">{t.hero.cta2}</button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span style={{ color: 'var(--color-gold-dark)' }}>{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} color="var(--color-gold-dark)" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

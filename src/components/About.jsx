import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';

const About = () => {
  const { t, isRTL } = useLang();

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--bg-primary)', transition: 'background-color 0.4s ease' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        
        <motion.div 
          style={{ flex: '1 1 400px' }}
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ position: 'relative', padding: '2rem' }}>
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '60%', 
              height: '60%', 
              borderTop: '2px solid var(--color-gold-dark)', 
              borderLeft: '2px solid var(--color-gold-dark)', 
              zIndex: 1 
            }}></div>
             <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              right: 0, 
              width: '60%', 
              height: '60%', 
              borderBottom: '2px solid var(--color-gold-dark)', 
              borderRight: '2px solid var(--color-gold-dark)', 
              zIndex: 1 
            }}></div>
            <img 
              src="/assets/cover.png" 
              alt="About Sora" 
              style={{ width: '100%', height: 'auto', borderRadius: '8px', position: 'relative', zIndex: 2, boxShadow: `0 20px 40px var(--about-shadow)` }} 
            />
          </div>
        </motion.div>

        <motion.div 
          style={{ flex: '1 1 500px' }}
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span style={{ color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: 500 }}>{t.about.label}</span>
          <h2 style={{ fontSize: '3rem', margin: '1rem 0', color: 'var(--text-primary)' }}>
            {t.about.titleMain} <span className="text-gradient">{t.about.titleAccent}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            {t.about.p1}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
            {t.about.p2}
          </p>
          <button className="btn-primary">{t.about.cta}</button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

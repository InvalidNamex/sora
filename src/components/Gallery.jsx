import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLang();

  const items = [
    { id: 1, type: 'image', src: '/assets/product-1.jpeg', alt: 'Sora Perfumes Limited Edition' },
    { id: 2, type: 'video', src: '/assets/video-1.mp4', alt: 'Sora Cosmetic Promo' },
    { id: 3, type: 'image', src: '/assets/product-2.jpeg', alt: 'Sora Signature Scent' },
    { id: 4, type: 'video', src: '/assets/video-2.mp4', alt: 'Sora Brand Campaign' },
    { id: 5, type: 'image', src: '/assets/product-3.jpeg', alt: 'Sora Classic Collection' },
  ];

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--gallery-bg)', transition: 'background-color 0.4s ease' }}>
      <div className="container">
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: 500 }}>{t.gallery.label}</span>
          <h2 style={{ fontSize: '3rem', margin: '1rem 0', color: 'var(--text-primary)' }}>
            {t.gallery.titleMain} <span className="text-gradient">{t.gallery.titleAccent}</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          gridAutoFlow: 'dense'
        }}>
          {items.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: `0 10px 30px var(--card-shadow)`,
                position: 'relative',
                aspectRatio: index === 0 || index === 4 ? '1 / 1' : index === 1 ? '16 / 9' : '3 / 4'
              }}
              className="gallery-item hover-scale"
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} 
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              ) : (
                <video 
                  src={item.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          style={{ textAlign: 'center', marginTop: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <button className="btn-secondary">{t.gallery.cta}</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

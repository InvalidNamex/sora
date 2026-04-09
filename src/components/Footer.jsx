import React from 'react';
import { useLang } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLang();

  const linkStyle = { color: 'var(--text-footer)', textDecoration: 'none', transition: 'color 0.3s' };

  return (
    <footer style={{ backgroundColor: 'var(--bg-footer)', color: 'var(--color-white)', padding: '4rem 0 2rem 0', transition: 'background-color 0.4s ease' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', borderBottom: `1px solid var(--border-footer)`, paddingBottom: '3rem', marginBottom: '2rem' }}>
        
        <div style={{ flex: '1 1 300px' }}>
          <img src="/assets/logo.png" alt="Sora Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)', marginBottom: '1.5rem' }} />
          <p style={{ color: 'var(--text-footer)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '300px' }}>
            {t.footer.description}
          </p>
        </div>

        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ color: 'var(--color-gold-light)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>{t.footer.shop}</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="#" style={linkStyle} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold-light)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-footer)'}>{t.footer.perfumes}</a></li>
            <li><a href="#" style={linkStyle} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold-light)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-footer)'}>{t.footer.cosmetics}</a></li>
            <li><a href="#" style={linkStyle} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold-light)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-footer)'}>{t.footer.gifts}</a></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ color: 'var(--color-gold-light)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>{t.footer.brand}</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="#about" style={linkStyle} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold-light)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-footer)'}>{t.footer.story}</a></li>
            <li><a href="#" style={linkStyle} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold-light)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-footer)'}>{t.footer.contact}</a></li>
          </ul>
        </div>

      </div>
      <div className="container" style={{ textAlign: 'center', color: 'var(--text-footer-muted)', fontSize: '0.85rem' }}>
        <p>&copy; {new Date().getFullYear()} {t.footer.copy}</p>
      </div>
    </footer>
  );
};

export default Footer;

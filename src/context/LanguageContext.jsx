import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: { story: 'Our Story', collection: 'Collection' },
    hero: {
      titleLine1: 'The Essence',
      titleLine2: 'of',
      titleAccent: 'Elegance',
      subtitle: "Discover Sora's premium collection of signature perfumes and sophisticated cosmetics. Made with exquisite precision for the modern soul.",
      cta1: 'Explore Collection',
      cta2: 'Discover Brand',
      scroll: 'Scroll',
    },
    gallery: {
      label: 'Our Collection',
      titleMain: 'Timeless',
      titleAccent: 'Beauty',
      cta: 'View Full Collection',
    },
    about: {
      label: 'Our Story',
      titleMain: 'Elevating Your',
      titleAccent: 'Aura',
      p1: "At Sora, we believe that elegance is not just seen, it's felt. Our exquisite perfumes and premium cosmetics are crafted for the modern individual who seeks perfection.",
      p2: 'Every ingredient is carefully selected, merging the art of nature with scientific precision to create products that enhance your natural beauty.',
      cta: 'Learn More About Us',
    },
    footer: {
      description: 'Elevating beauty through premium cosmetics and signature perfumes perfectly tailored to your elegant lifestyle.',
      shop: 'Shop',
      perfumes: 'Perfumes',
      cosmetics: 'Cosmetics',
      gifts: 'Gifts',
      brand: 'Brand',
      story: 'Our Story',
      contact: 'Contact',
      copy: 'Sora Cosmetics. All Rights Reserved.',
    },
    langToggle: 'عربي',
  },
  ar: {
    nav: { story: 'قصتنا', collection: 'المجموعة' },
    hero: {
      titleLine1: 'جوهر',
      titleLine2: '',
      titleAccent: 'الأناقة',
      subtitle: 'اكتشف مجموعة سورا الفاخرة من العطور المميزة ومستحضرات التجميل الراقية. صُنعت بدقة متناهية للروح العصرية.',
      cta1: 'استكشف المجموعة',
      cta2: 'اكتشف العلامة',
      scroll: 'مرر',
    },
    gallery: {
      label: 'مجموعتنا',
      titleMain: 'جمال',
      titleAccent: 'خالد',
      cta: 'عرض المجموعة الكاملة',
    },
    about: {
      label: 'قصتنا',
      titleMain: 'ارتقِ بـ',
      titleAccent: 'هالتك',
      p1: 'في سورا، نؤمن بأن الأناقة لا تُرى فحسب، بل تُحَس. عطورنا الفاخرة ومستحضرات التجميل المتميزة صُنعت للشخص العصري الذي يسعى إلى الكمال.',
      p2: 'كل مكوّن يُختار بعناية، يمزج فن الطبيعة مع الدقة العلمية لابتكار منتجات تُعزز جمالك الطبيعي.',
      cta: 'اعرف المزيد عنا',
    },
    footer: {
      description: 'نرتقي بالجمال من خلال مستحضرات التجميل الفاخرة والعطور المميزة المصممة خصيصاً لأسلوب حياتك الأنيق.',
      shop: 'تسوّق',
      perfumes: 'عطور',
      cosmetics: 'مستحضرات تجميل',
      gifts: 'هدايا',
      brand: 'العلامة',
      story: 'قصتنا',
      contact: 'تواصل',
      copy: 'سورا لمستحضرات التجميل. جميع الحقوق محفوظة.',
    },
    langToggle: 'English',
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');
  const isRTL = lang === 'ar';
  const isDark = theme === 'dark';
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [lang, isRTL]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <LanguageContext.Provider value={{ lang, isRTL, t, toggleLang, theme, isDark, toggleTheme }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

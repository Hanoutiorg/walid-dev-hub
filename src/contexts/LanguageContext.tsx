import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get Quote',
    
    // Hero Section
    'hero.title': 'Crafting Beautiful Web Experiences',
    'hero.subtitle': 'Full-Stack Developer specializing in React, Node.js, and modern web technologies.\nBringing your ideas to life with clean code and stunning design.',
    'hero.exploreServices': 'Explore Services',
    'hero.viewPortfolio': 'View Portfolio',
    
    // Features
    'feature.cleanCode.title': 'Clean Code',
    'feature.cleanCode.desc': 'Writing maintainable, scalable, and efficient code',
    'feature.modernDesign.title': 'Modern Design',
    'feature.modernDesign.desc': 'Creating beautiful, responsive user interfaces',
    'feature.fastDelivery.title': 'Fast Delivery',
    'feature.fastDelivery.desc': 'Quick turnaround without compromising quality',
    
    // Stats
    'stats.clients': 'Happy Clients',
    'stats.projects': 'Projects Completed',
    'stats.experience': 'Years Experience',
    
    // Services
    'services.title': 'What I Can Do For You',
    'services.subtitle': 'From simple landing pages to complex full-stack applications, I deliver quality solutions.',
    'services.landing.title': 'Landing Pages',
    'services.landing.desc': 'Beautiful, conversion-focused landing pages that capture leads and drive sales.',
    'services.dashboard.title': 'Admin Dashboards',
    'services.dashboard.desc': 'Powerful dashboards with analytics, user management, and business insights.',
    'services.fullstack.title': 'Full-Stack Apps',
    'services.fullstack.desc': 'Complete web applications with backend, database, and modern frontend.',
    'services.startingAt': 'Starting at',
    'services.viewAll': 'View All Services',
    
    // Testimonials
    'testimonials.title': 'What Clients Say',
    'testimonials.subtitle': "Don't just take my word for it - here's what my clients think.",
    
    // CTA
    'cta.title': 'Ready to Start Your Project?',
    'cta.subtitle': "Let's discuss your ideas and bring them to life with beautiful, functional web solutions.",
    'cta.getStarted': 'Get Started Today',
    'cta.browseServices': 'Browse Services',
    
    // About Page
    'about.title': 'About Walid',
    'about.intro': "I'm a passionate full-stack developer from Tunisia, specializing in creating beautiful, functional web applications that solve real-world problems. With over 3 years of experience, I help businesses and entrepreneurs bring their digital visions to life.",
    'about.story.title': 'My Story',
    'about.skills.title': 'Technical Skills',
    'about.achievements.title': 'Achievements & Values',
    'about.process.title': 'My Working Process',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your project? Have a question? I\'d love to hear from you. Let\'s discuss how we can bring your ideas to life.',
    'contact.form.title': 'Send me a message',
    'contact.form.subtitle': "I'll get back to you within 24 hours.",
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.required': 'Required',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Devis',
    
    // Hero Section
    'hero.title': 'Créer de Belles Expériences Web',
    'hero.subtitle': 'Développeur Full-Stack spécialisé en React, Node.js et technologies web modernes.\nDonner vie à vos idées avec du code propre et un design époustouflant.',
    'hero.exploreServices': 'Découvrir les Services',
    'hero.viewPortfolio': 'Voir le Portfolio',
    
    // Features
    'feature.cleanCode.title': 'Code Propre',
    'feature.cleanCode.desc': 'Écriture de code maintenable, évolutif et efficace',
    'feature.modernDesign.title': 'Design Moderne',
    'feature.modernDesign.desc': 'Création d\'interfaces utilisateur belles et responsives',
    'feature.fastDelivery.title': 'Livraison Rapide',
    'feature.fastDelivery.desc': 'Délai d\'exécution rapide sans compromettre la qualité',
    
    // Stats
    'stats.clients': 'Clients Satisfaits',
    'stats.projects': 'Projets Terminés',
    'stats.experience': 'Années d\'Expérience',
    
    // Services
    'services.title': 'Ce Que Je Peux Faire Pour Vous',
    'services.subtitle': 'Des pages d\'atterrissage simples aux applications full-stack complexes, je livre des solutions de qualité.',
    'services.landing.title': 'Pages d\'Atterrissage',
    'services.landing.desc': 'Belles pages d\'atterrissage axées sur la conversion qui capturent des prospects et stimulent les ventes.',
    'services.dashboard.title': 'Tableaux de Bord Admin',
    'services.dashboard.desc': 'Tableaux de bord puissants avec analyses, gestion des utilisateurs et insights métier.',
    'services.fullstack.title': 'Apps Full-Stack',
    'services.fullstack.desc': 'Applications web complètes avec backend, base de données et frontend moderne.',
    'services.startingAt': 'À partir de',
    'services.viewAll': 'Voir Tous les Services',
    
    // Testimonials
    'testimonials.title': 'Ce Que Disent les Clients',
    'testimonials.subtitle': 'Ne me croyez pas sur parole - voici ce que pensent mes clients.',
    
    // CTA
    'cta.title': 'Prêt à Commencer Votre Projet ?',
    'cta.subtitle': 'Discutons de vos idées et donnons-leur vie avec de belles solutions web fonctionnelles.',
    'cta.getStarted': 'Commencer Aujourd\'hui',
    'cta.browseServices': 'Parcourir les Services',
    
    // About Page
    'about.title': 'À Propos de Walid',
    'about.intro': 'Je suis un développeur full-stack passionné de Tunisie, spécialisé dans la création d\'applications web belles et fonctionnelles qui résolvent des problèmes du monde réel. Avec plus de 3 ans d\'expérience, j\'aide les entreprises et entrepreneurs à donner vie à leurs visions numériques.',
    'about.story.title': 'Mon Histoire',
    'about.skills.title': 'Compétences Techniques',
    'about.achievements.title': 'Réalisations & Valeurs',
    'about.process.title': 'Mon Processus de Travail',
    
    // Contact
    'contact.title': 'Entrer en Contact',
    'contact.subtitle': 'Prêt à commencer votre projet ? Avez-vous une question ? J\'aimerais avoir de vos nouvelles. Discutons de la façon dont nous pouvons donner vie à vos idées.',
    'contact.form.title': 'Envoyez-moi un message',
    'contact.form.subtitle': 'Je vous répondrai dans les 24 heures.',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
    'common.required': 'Requis',
  },
  
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'حول',
    'nav.services': 'الخدمات',
    'nav.portfolio': 'الأعمال',
    'nav.contact': 'اتصال',
    'nav.getQuote': 'عرض سعر',
    
    // Hero Section
    'hero.title': 'صناعة تجارب ويب جميلة',
    'hero.subtitle': 'مطور Full-Stack متخصص في React و Node.js وتقنيات الويب الحديثة.\nإحياء أفكارك بكود نظيف وتصميم مذهل.',
    'hero.exploreServices': 'استكشف الخدمات',
    'hero.viewPortfolio': 'عرض الأعمال',
    
    // Features
    'feature.cleanCode.title': 'كود نظيف',
    'feature.cleanCode.desc': 'كتابة كود قابل للصيانة وقابل للتطوير وفعال',
    'feature.modernDesign.title': 'تصميم عصري',
    'feature.modernDesign.desc': 'إنشاء واجهات مستخدم جميلة ومتجاوبة',
    'feature.fastDelivery.title': 'تسليم سريع',
    'feature.fastDelivery.desc': 'وقت استجابة سريع دون التنازل عن الجودة',
    
    // Stats
    'stats.clients': 'عملاء راضون',
    'stats.projects': 'مشاريع مكتملة',
    'stats.experience': 'سنوات خبرة',
    
    // Services
    'services.title': 'ما يمكنني فعله لك',
    'services.subtitle': 'من صفحات الهبوط البسيطة إلى تطبيقات Full-Stack المعقدة، أقدم حلولاً عالية الجودة.',
    'services.landing.title': 'صفحات الهبوط',
    'services.landing.desc': 'صفحات هبوط جميلة ومركزة على التحويل تجذب العملاء المحتملين وتزيد المبيعات.',
    'services.dashboard.title': 'لوحات التحكم',
    'services.dashboard.desc': 'لوحات تحكم قوية مع تحليلات وإدارة المستخدمين ورؤى الأعمال.',
    'services.fullstack.title': 'تطبيقات Full-Stack',
    'services.fullstack.desc': 'تطبيقات ويب كاملة مع backend وقاعدة بيانات وfrontend حديث.',
    'services.startingAt': 'بداية من',
    'services.viewAll': 'عرض جميع الخدمات',
    
    // Testimonials
    'testimonials.title': 'ما يقوله العملاء',
    'testimonials.subtitle': 'لا تأخذ كلامي فقط - هذا ما يعتقده عملائي.',
    
    // CTA
    'cta.title': 'جاهز لبدء مشروعك؟',
    'cta.subtitle': 'دعنا نناقش أفكارك ونحييها بحلول ويب جميلة وعملية.',
    'cta.getStarted': 'ابدأ اليوم',
    'cta.browseServices': 'تصفح الخدمات',
    
    // About Page
    'about.title': 'حول وليد',
    'about.intro': 'أنا مطور full-stack شغوف من تونس، متخصص في إنشاء تطبيقات ويب جميلة ووظيفية تحل مشاكل العالم الحقيقي. مع أكثر من 3 سنوات من الخبرة، أساعد الشركات ورجال الأعمال على إحياء رؤاهم الرقمية.',
    'about.story.title': 'قصتي',
    'about.skills.title': 'المهارات التقنية',
    'about.achievements.title': 'الإنجازات والقيم',
    'about.process.title': 'عملية العمل',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'جاهز لبدء مشروعك؟ لديك سؤال؟ أحب أن أسمع منك. دعنا نناقش كيف يمكننا إحياء أفكارك.',
    'contact.form.title': 'أرسل لي رسالة',
    'contact.form.subtitle': 'سأعود إليك خلال 24 ساعة.',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجح',
    'common.required': 'مطلوب',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang || 'en';
  });

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update document direction for RTL languages
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      t, 
      isRTL 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
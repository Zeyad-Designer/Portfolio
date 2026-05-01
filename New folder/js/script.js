// script.js
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navPortfolio: "Portfolio",
        navServices: "Services",
        navProcess: "Process",
        navContact: "Contact",
        heroTitle: "Zeyad Designer — Professional Graphic Designer",
        heroSubtitle: "I offer professional designs that elevate your project as a graphic designer, visual identity, and distinctive brand with modern designs, focusing on delivering high-quality work. A lead manager designs that aligns with your brand identity and makes your business stand out commercially, with quick knowledge verification.",
        btnWork: "View Work",
        btnContact: "Contact Me",
        aboutTitle: "About Me",
        aboutText: "I am Ziad Mohammed, a professional graphic designer with over two years of experience in graphic design. I provide high-quality designs that combine creativity, accuracy, and attention to detail. I am distinguished by my speed of execution and adherence to deadlines, along with the ability to understand the client's needs and transform them into professional visual solutions. I possess strong skills in using Adobe programs such as Photoshop, Illustrator, InDesign, and others, and I offer services that include the design of visual identities, social media, logos, and print materials.",
        yearsExp: "Years Experience",
        projectsDone: "Projects Completed",
        skillsTitle: "My Skills",
        portfolioTitle: "Portfolio",
        projectThob: "ثوب الربيع",
        projectPlaceholder: "Project",
        servicesTitle: "Services",
        service1: "Logo Design",
        service2: "Social Media Designs",
        service3: "Brand Identity",
        service4: "Posters & Ads",
        service5: "Business Cards",
        service6: "Flyers & Brochures",
        service7: "Menus",
        service8: "Design Packages",
        processTitle: "Work Process",
        process1: "Client Communication",
        process2: "Understanding Requirements",
        process3: "Design Implementation",
        process4: "Revisions",
        process5: "Final Delivery",
        contactTitle: "Contact Me",
        phoneLabel: "Phone",
        emailLabel: "Email",
        locationLabel: "Location",
        locationValue: "Mansoura, Egypt",
        whatsappBtn: "WhatsApp",
        langToggle: "Ar"
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "نبذة عني",
        navSkills: "المهارات",
        navPortfolio: "أعمالي",
        navServices: "الخدمات",
        navProcess: "مراحل العمل",
        navContact: "تواصل معي",
        heroTitle: "زياد ديزاينر — مصمم جرافيك محترف",
        heroSubtitle: "اقدم لكم تصميمات احترافية ترفع مستوى مشروع كمصمم جرافيك وهوية بصرية وعلامات تجارية مميزة بتصاميم عصرية، مع التركيز على تقديم أعمال عالية الجودة. ويصمم مديرًا رئيسيًا يتناسب مع هوية علامتك ويجعل عملك متميزًا تجاريًا، مع التحقق بسرعة من المعرفة.",
        btnWork: "شاهد أعمالي",
        btnContact: "تواصل معي",
        aboutTitle: "نبذة عني",
        aboutText: "أنا زياد محمد، مصمم جرافيك محترف أمتلك خبرة تتجاوز سنتين في مجال التصميم الجرافيكي، أقدّم خلالها تصاميم عالية الجودة تجمع بين الإبداع والدقة والاهتمام بأدق التفاصيل. أتميز بسرعة التنفيذ والالتزام بالمواعيد، مع القدرة على فهم احتياجات العميل وتحويلها إلى حلول بصرية احترافية. أمتلك مهارات قوية في استخدام برامج Adobe مثل Photoshop وIllustrator وInDesign وغيرها، وأقدّم خدمات تشمل تصميم الهويات البصرية، والسوشيال ميديا، واللوجوهات، والمطبوعات.",
        yearsExp: "سنوات خبرة",
        projectsDone: "مشروع مكتمل",
        skillsTitle: "مهاراتي",
        portfolioTitle: "أعمالي",
        projectThob: "ثوب الربيع",
        projectPlaceholder: "مشروع",
        servicesTitle: "خدماتي",
        service1: "تصميم الشعارات",
        service2: "تصميمات السوشيال ميديا",
        service3: "الهوية البصرية",
        service4: "البوسترات والإعلانات",
        service5: "كروت شخصية",
        service6: "فلاير وبروشور",
        service7: "قوائم الطعام",
        service8: "باقات تصميم",
        processTitle: "مراحل العمل",
        process1: "التواصل مع العميل",
        process2: "فهم المتطلبات",
        process3: "تنفيذ التصميم",
        process4: "التعديلات",
        process5: "التسليم النهائي",
        contactTitle: "تواصل معي",
        phoneLabel: "الهاتف",
        emailLabel: "البريد الإلكتروني",
        locationLabel: "الموقع",
        locationValue: "المنصورة، مصر",
        whatsappBtn: "واتساب",
        langToggle: "EN"
    }
};

// Elements
const langToggle = document.getElementById('langToggle');
const htmlEl = document.documentElement;

// Language Logic
function setLanguage(lang) {
    htmlEl.lang = lang;
    htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    langToggle.textContent = translations[lang === 'ar' ? 'ar' : 'en'].langToggle;
    localStorage.setItem('preferredLang', lang);
}

langToggle.addEventListener('click', () => {
    const currentLang = htmlEl.lang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
});

// Initialize Language
const savedLang = localStorage.getItem('preferredLang') || 'en';
setLanguage(savedLang);

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky Navbar Background
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

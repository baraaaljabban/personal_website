/**
 * ============================================
 * BARAA ALJABBAN - PERSONAL WEBSITE SCRIPTS
 * Modern, Interactive, Multi-language Support
 * ============================================
 */

// ==================== LANGUAGE DATA ====================
const translations = {
  en: {
    // Navigation
    Home: "Home",
    About: "About",
    Services: "Services",
    Projects: "Projects",
    Contact: "Contact",

    // Hero Section
    "Available for new projects": "Available for new projects",
    "Hello, I'm": "Hello, I'm",
    Senior: "Senior",
    "A mobile app engineer with over seven years of experience building Android native and cross-platform mobile apps. Passionate about clean architecture, test-driven development, and scalable solutions.":
      "A mobile app engineer with over seven years of experience building Android native and cross-platform mobile apps. Passionate about clean architecture, test-driven development, and scalable solutions.",
    "Let's Talk": "Let's Talk",
    "View Projects": "View Projects",
    "Years Experience": "Years Experience",
    "Users Served": "Users Served",
    "Projects Done": "Projects Done",
    "Scroll Down": "Scroll Down",

    // About Section
    "Get to know me": "Get to know me",
    "About Me": "About Me",
    "Years of Experience": "Years of Experience",
    "I'm a Senior Flutter Developer and Mobile Team Lead based in Kuala Lumpur, Malaysia, with a passion for creating exceptional mobile experiences.":
      "I'm a Senior Flutter Developer and Mobile Team Lead based in Kuala Lumpur, Malaysia, with a passion for creating exceptional mobile experiences.",
    "Throughout my career, I've developed scalable apps used by millions of users and led teams through the transition from native codebases to Flutter. I specialize in clean architecture, MVVM patterns, and test-driven development to ensure robust, maintainable applications.":
      "Throughout my career, I've developed scalable apps used by millions of users and led teams through the transition from native codebases to Flutter. I specialize in clean architecture, MVVM patterns, and test-driven development to ensure robust, maintainable applications.",
    "I have extensive experience mentoring developers and leading cross-functional teams to deliver high-quality mobile solutions on time and within budget.":
      "I have extensive experience mentoring developers and leading cross-functional teams to deliver high-quality mobile solutions on time and within budget.",
    Languages: "Languages",
    Frameworks: "Frameworks",
    Expertise: "Expertise",
    "Work With Me": "Work With Me",

    // Services Section
    "What I Offer": "What I Offer",
    "My Services": "My Services",
    "Comprehensive mobile development solutions tailored to your needs":
      "Comprehensive mobile development solutions tailored to your needs",
    "Cross-Platform Development": "Cross-Platform Development",
    "Building high-quality mobile apps for iOS and Android using Flutter and native code. One codebase, multiple platforms, exceptional performance.":
      "Building high-quality mobile apps for iOS and Android using Flutter and native code. One codebase, multiple platforms, exceptional performance.",
    "Flutter & Dart": "Flutter & Dart",
    "Native Integration": "Native Integration",
    "Responsive UI/UX": "Responsive UI/UX",
    Popular: "Popular",
    "Migration & Modernisation": "Migration & Modernisation",
    "Leading the transformation of existing native apps to Flutter. Seamless migrations with minimal disruption, as done at Taskworld and Astro.":
      "Leading the transformation of existing native apps to Flutter. Seamless migrations with minimal disruption, as done at Taskworld and Astro.",
    "Native to Flutter": "Native to Flutter",
    "Code Refactoring": "Code Refactoring",
    "Zero Downtime": "Zero Downtime",
    "Performance Optimisation": "Performance Optimisation",
    "Analysing and refactoring apps to improve responsiveness and efficiency. I increased Taskworld's chat app performance by 40%.":
      "Analysing and refactoring apps to improve responsiveness and efficiency. I increased Taskworld's chat app performance by 40%.",
    "40% Performance Boost": "40% Performance Boost",
    "Memory Optimization": "Memory Optimization",
    "Battery Efficiency": "Battery Efficiency",
    "Team Training & Leadership": "Team Training & Leadership",
    "Training developers in Flutter best practices, clean architecture, MVVM and TDD. Building high-performing development teams.":
      "Training developers in Flutter best practices, clean architecture, MVVM and TDD. Building high-performing development teams.",
    "1-on-1 Mentoring": "1-on-1 Mentoring",
    "Workshop Sessions": "Workshop Sessions",
    "Code Reviews": "Code Reviews",

    // Projects Section
    "My Work": "My Work",
    "Featured Projects": "Featured Projects",
    "A showcase of my most impactful work and achievements":
      "A showcase of my most impactful work and achievements",
    "Senior Flutter Developer": "Senior Flutter Developer",
    "Real-Time Chat Application": "Real-Time Chat Application",
    "Designed and developed a real-time messaging app in Flutter and native code. Implemented WebSocket communications, push notifications, and NoSQL storage. Improved performance by 40% and set up CI/CD pipelines.":
      "Designed and developed a real-time messaging app in Flutter and native code. Implemented WebSocket communications, push notifications, and NoSQL storage. Improved performance by 40% and set up CI/CD pipelines.",
    "40% Performance Improvement": "40% Performance Improvement",
    "CI/CD Pipeline Setup": "CI/CD Pipeline Setup",
    "Mobile Developer": "Mobile Developer",
    "Banking Mobile Application": "Banking Mobile Application",
    "Developed and maintained a scalable banking solution serving over one million users. Added new features, enhanced security protocols, and collaborated with backend engineers and UI/UX teams.":
      "Developed and maintained a scalable banking solution serving over one million users. Added new features, enhanced security protocols, and collaborated with backend engineers and UI/UX teams.",
    "1M+ Active Users": "1M+ Active Users",
    "Enhanced Security": "Enhanced Security",
    "Flutter Team Lead": "Flutter Team Lead",
    "Media Streaming Platform": "Media Streaming Platform",
    "Led the migration of existing native codebases to Flutter, improving development efficiency and user experience. Managed cross-functional teams and established best practices.":
      "Led the migration of existing native codebases to Flutter, improving development efficiency and user experience. Managed cross-functional teams and established best practices.",
    "Full Migration to Flutter": "Full Migration to Flutter",
    "Team Leadership": "Team Leadership",
    "Android Developer": "Android Developer",
    "Enterprise Solutions Suite": "Enterprise Solutions Suite",
    "Developed multiple enterprise solutions including a real-time vehicle tracking Android app, comprehensive CRM system integrating warehouse, billing and sales operations, billing application, and employee shift monitoring system.":
      "Developed multiple enterprise solutions including a real-time vehicle tracking Android app, comprehensive CRM system integrating warehouse, billing and sales operations, billing application, and employee shift monitoring system.",
    "Real-time GPS Tracking": "Real-time GPS Tracking",
    "Complete CRM System": "Complete CRM System",

    // Contact Section
    "Get In Touch": "Get In Touch",
    "Let's Work Together": "Let's Work Together",
    "Have a project in mind? Let's discuss how I can help you achieve your goals.":
      "Have a project in mind? Let's discuss how I can help you achieve your goals.",
    "Email Me": "Email Me",
    "Call Me": "Call Me",
    Location: "Location",
    "Connect with me": "Connect with me",
    "Your Name": "Your Name",
    "Your Email": "Your Email",
    Subject: "Subject",
    "Select a service": "Select a service",
    "App Development": "App Development",
    "Migration to Flutter": "Migration to Flutter",
    "Performance Optimization": "Performance Optimization",
    "Team Training": "Team Training",
    Other: "Other",
    "Your Message": "Your Message",
    "Send Message": "Send Message",
    "Message Sent!": "Message Sent!",
    "Thank you for reaching out. I'll get back to you soon.":
      "Thank you for reaching out. I'll get back to you soon.",

    // Footer
    "Building exceptional mobile experiences with clean code and modern architecture.":
      "Building exceptional mobile experiences with clean code and modern architecture.",
    "Quick Links": "Quick Links",
    "Cross-Platform Apps": "Cross-Platform Apps",
    "Flutter Migration": "Flutter Migration",
    "Performance Tuning": "Performance Tuning",
    "All rights reserved.": "All rights reserved.",
  },
  ar: {
    // Navigation
    Home: "الرئيسية",
    About: "عني",
    Services: "الخدمات",
    Projects: "المشاريع",
    Contact: "تواصل",

    // Hero Section
    "Available for new projects": "متاح لمشاريع جديدة",
    "Hello, I'm": "مرحباً، أنا",
    Senior: "مطور",
    "A mobile app engineer with over seven years of experience building Android native and cross-platform mobile apps. Passionate about clean architecture, test-driven development, and scalable solutions.":
      "مهندس تطبيقات جوال بخبرة تزيد عن سبع سنوات في بناء تطبيقات Android الأصلية والتطبيقات متعددة المنصات. شغوف بالهندسة النظيفة والتطوير القائم على الاختبار والحلول القابلة للتوسع.",
    "Let's Talk": "لنتحدث",
    "View Projects": "عرض المشاريع",
    "Years Experience": "سنوات الخبرة",
    "Users Served": "مستخدم",
    "Projects Done": "مشروع منجز",
    "Scroll Down": "اسحب للأسفل",

    // About Section
    "Get to know me": "تعرف علي",
    "About Me": "عني",
    "Years of Experience": "سنوات من الخبرة",
    "I'm a Senior Flutter Developer and Mobile Team Lead based in Kuala Lumpur, Malaysia, with a passion for creating exceptional mobile experiences.":
      "أنا مطور Flutter رفيع المستوى وقائد فريق تطبيقات الجوال مقيم في كوالالمبور، ماليزيا، ولدي شغف لإنشاء تجارب جوال استثنائية.",
    "Throughout my career, I've developed scalable apps used by millions of users and led teams through the transition from native codebases to Flutter. I specialize in clean architecture, MVVM patterns, and test-driven development to ensure robust, maintainable applications.":
      "طوال مسيرتي المهنية، قمت بتطوير تطبيقات قابلة للتوسع يستخدمها ملايين المستخدمين وقدت فرقًا خلال الانتقال من الأكواد الأصلية إلى Flutter. أتخصص في الهندسة النظيفة وأنماط MVVM والتطوير القائم على الاختبار لضمان تطبيقات قوية وقابلة للصيانة.",
    "I have extensive experience mentoring developers and leading cross-functional teams to deliver high-quality mobile solutions on time and within budget.":
      "لدي خبرة واسعة في إرشاد المطورين وقيادة الفرق متعددة الوظائف لتقديم حلول جوال عالية الجودة في الوقت المحدد وضمن الميزانية.",
    Languages: "اللغات",
    Frameworks: "الأطر",
    Expertise: "الخبرات",
    "Work With Me": "اعمل معي",

    // Services Section
    "What I Offer": "ما أقدمه",
    "My Services": "خدماتي",
    "Comprehensive mobile development solutions tailored to your needs":
      "حلول تطوير جوال شاملة مصممة لتلبية احتياجاتك",
    "Cross-Platform Development": "تطوير متعدد المنصات",
    "Building high-quality mobile apps for iOS and Android using Flutter and native code. One codebase, multiple platforms, exceptional performance.":
      "بناء تطبيقات جوال عالية الجودة لـ iOS و Android باستخدام Flutter والكود الأصلي. قاعدة كود واحدة، منصات متعددة، أداء استثنائي.",
    "Flutter & Dart": "Flutter و Dart",
    "Native Integration": "تكامل أصلي",
    "Responsive UI/UX": "واجهة مستخدم متجاوبة",
    Popular: "شائع",
    "Migration & Modernisation": "الترحيل والتحديث",
    "Leading the transformation of existing native apps to Flutter. Seamless migrations with minimal disruption, as done at Taskworld and Astro.":
      "قيادة تحويل التطبيقات الأصلية الحالية إلى Flutter. عمليات ترحيل سلسة مع الحد الأدنى من الاضطراب، كما تم في Taskworld و Astro.",
    "Native to Flutter": "من الأصلي إلى Flutter",
    "Code Refactoring": "إعادة هيكلة الكود",
    "Zero Downtime": "بدون توقف",
    "Performance Optimisation": "تحسين الأداء",
    "Analysing and refactoring apps to improve responsiveness and efficiency. I increased Taskworld's chat app performance by 40%.":
      "تحليل وإعادة هيكلة التطبيقات لتحسين الاستجابة والكفاءة. قمت بزيادة أداء تطبيق دردشة Taskworld بنسبة 40%.",
    "40% Performance Boost": "تحسين الأداء 40%",
    "Memory Optimization": "تحسين الذاكرة",
    "Battery Efficiency": "كفاءة البطارية",
    "Team Training & Leadership": "تدريب الفريق والقيادة",
    "Training developers in Flutter best practices, clean architecture, MVVM and TDD. Building high-performing development teams.":
      "تدريب المطورين على أفضل ممارسات Flutter والهندسة النظيفة و MVVM و TDD. بناء فرق تطوير عالية الأداء.",
    "1-on-1 Mentoring": "إرشاد فردي",
    "Workshop Sessions": "جلسات ورش عمل",
    "Code Reviews": "مراجعة الأكواد",

    // Projects Section
    "My Work": "أعمالي",
    "Featured Projects": "المشاريع المميزة",
    "A showcase of my most impactful work and achievements":
      "عرض لأكثر أعمالي تأثيراً وإنجازاتي",
    "Senior Flutter Developer": "مطور Flutter رفيع المستوى",
    "Real-Time Chat Application": "تطبيق دردشة في الوقت الفعلي",
    "Designed and developed a real-time messaging app in Flutter and native code. Implemented WebSocket communications, push notifications, and NoSQL storage. Improved performance by 40% and set up CI/CD pipelines.":
      "صممت وطورت تطبيق مراسلة في الوقت الفعلي باستخدام Flutter والكود الأصلي. نفذت اتصالات WebSocket والإشعارات الفورية وتخزين NoSQL. حسنت الأداء بنسبة 40% وأعددت خطوط CI/CD.",
    "40% Performance Improvement": "تحسين الأداء 40%",
    "CI/CD Pipeline Setup": "إعداد خط CI/CD",
    "Mobile Developer": "مطور جوال",
    "Banking Mobile Application": "تطبيق بنكي للجوال",
    "Developed and maintained a scalable banking solution serving over one million users. Added new features, enhanced security protocols, and collaborated with backend engineers and UI/UX teams.":
      "طورت وصنت حلاً بنكياً قابلاً للتوسع يخدم أكثر من مليون مستخدم. أضفت ميزات جديدة وعززت بروتوكولات الأمان وتعاونت مع مهندسي الخلفية وفرق UI/UX.",
    "1M+ Active Users": "أكثر من مليون مستخدم نشط",
    "Enhanced Security": "أمان معزز",
    "Flutter Team Lead": "قائد فريق Flutter",
    "Media Streaming Platform": "منصة بث الوسائط",
    "Led the migration of existing native codebases to Flutter, improving development efficiency and user experience. Managed cross-functional teams and established best practices.":
      "قدت ترحيل قواعد الأكواد الأصلية الحالية إلى Flutter، مما أدى إلى تحسين كفاءة التطوير وتجربة المستخدم. أدرت فرقاً متعددة الوظائف وأسست أفضل الممارسات.",
    "Full Migration to Flutter": "ترحيل كامل إلى Flutter",
    "Team Leadership": "قيادة الفريق",
    "Android Developer": "مطور Android",
    "Enterprise Solutions Suite": "مجموعة حلول المؤسسات",
    "Developed multiple enterprise solutions including a real-time vehicle tracking Android app, comprehensive CRM system integrating warehouse, billing and sales operations, billing application, and employee shift monitoring system.":
      "طورت حلولاً مؤسسية متعددة تشمل تطبيق Android لتتبع المركبات في الوقت الفعلي، ونظام CRM شامل يدمج عمليات المستودع والفوترة والمبيعات، وتطبيق فوترة، ونظام مراقبة نوبات الموظفين.",
    "Real-time GPS Tracking": "تتبع GPS في الوقت الفعلي",
    "Complete CRM System": "نظام CRM كامل",

    // Contact Section
    "Get In Touch": "تواصل معي",
    "Let's Work Together": "لنعمل معاً",
    "Have a project in mind? Let's discuss how I can help you achieve your goals.":
      "لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكنني مساعدتك في تحقيق أهدافك.",
    "Email Me": "راسلني",
    "Call Me": "اتصل بي",
    Location: "الموقع",
    "Connect with me": "تواصل معي",
    "Your Name": "اسمك",
    "Your Email": "بريدك الإلكتروني",
    Subject: "الموضوع",
    "Select a service": "اختر خدمة",
    "App Development": "تطوير تطبيق",
    "Migration to Flutter": "ترحيل إلى Flutter",
    "Performance Optimization": "تحسين الأداء",
    "Team Training": "تدريب الفريق",
    Other: "أخرى",
    "Your Message": "رسالتك",
    "Send Message": "إرسال الرسالة",
    "Message Sent!": "تم إرسال الرسالة!",
    "Thank you for reaching out. I'll get back to you soon.":
      "شكراً للتواصل. سأرد عليك قريباً.",

    // Footer
    "Building exceptional mobile experiences with clean code and modern architecture.":
      "بناء تجارب جوال استثنائية بكود نظيف وهندسة حديثة.",
    "Quick Links": "روابط سريعة",
    "Cross-Platform Apps": "تطبيقات متعددة المنصات",
    "Flutter Migration": "ترحيل Flutter",
    "Performance Tuning": "تحسين الأداء",
    "All rights reserved.": "جميع الحقوق محفوظة.",
  },
};

// ==================== DOM ELEMENTS ====================
const loader = document.getElementById("loader");
const cursor = document.getElementById("cursor");
const cursorFollower = document.getElementById("cursor-follower");
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const langSwitch = document.getElementById("lang-switch");
const themeToggle = document.getElementById("theme-toggle");
const backToTop = document.getElementById("back-to-top");
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

// ==================== STATE ====================
let currentLang = "en";
let currentTheme = "dark";

// ==================== LOADER ====================
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.style.overflow = "auto";

    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });

    // Animate stats
    animateStats();
  }, 1500);
});

// ==================== CUSTOM CURSOR ====================
if (window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorFollower.style.left = e.clientX + "px";
    cursorFollower.style.top = e.clientY + "px";
  });

  // Hover effects
  const hoverElements = document.querySelectorAll(
    "a, button, .service-card, .project-card, .contact-card, .skill-tag, .tech-tag"
  );

  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorFollower.classList.add("hover");
    });

    el.addEventListener("mouseleave", () => {
      cursorFollower.classList.remove("hover");
    });
  });
}

// ==================== NAVIGATION ====================
// Scroll effect
window.addEventListener("scroll", () => {
  // Navbar background
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Back to top button
  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }

  // Active nav link
  updateActiveNavLink();
});

// Mobile menu toggle
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.scrollY + 150;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Back to top
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ==================== LANGUAGE SWITCHING ====================
langSwitch.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  updateLanguage();
});

function updateLanguage() {
  const html = document.documentElement;

  // Update direction and lang attribute
  html.setAttribute("lang", currentLang);
  html.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

  // Update language button text
  langSwitch.querySelector(".lang-current").textContent =
    currentLang.toUpperCase();

  // Update all translatable elements
  document.querySelectorAll("[data-en]").forEach((el) => {
    const enText = el.getAttribute("data-en");
    const arText = el.getAttribute("data-ar");

    if (currentLang === "ar" && arText) {
      el.textContent = arText;
    } else if (enText) {
      el.textContent = enText;
    }
  });

  // Update select options
  document.querySelectorAll("select option[data-en]").forEach((option) => {
    const enText = option.getAttribute("data-en");
    const arText = option.getAttribute("data-ar");

    if (currentLang === "ar" && arText) {
      option.textContent = arText;
    } else if (enText) {
      option.textContent = enText;
    }
  });

  // Update placeholders
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (currentLang === "ar") {
    nameInput.placeholder = "اسمك الكامل";
    emailInput.placeholder = "example@email.com";
    messageInput.placeholder = "أخبرني عن مشروعك...";
  } else {
    nameInput.placeholder = "John Doe";
    emailInput.placeholder = "john@example.com";
    messageInput.placeholder = "Tell me about your project...";
  }

  // Save preference
  localStorage.setItem("language", currentLang);

  // Re-initialize AOS for RTL
  AOS.refresh();
}

// Load saved language preference
function loadLanguagePreference() {
  const savedLang = localStorage.getItem("language");
  if (savedLang && savedLang !== currentLang) {
    currentLang = savedLang;
    updateLanguage();
  }
}

// ==================== THEME SWITCHING ====================
themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  updateTheme();
});

function updateTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);

  // Update icon
  const icon = themeToggle.querySelector("i");
  if (currentTheme === "light") {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

  // Save preference
  localStorage.setItem("theme", currentTheme);
}

// Load saved theme preference
function loadThemePreference() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    currentTheme = savedTheme;
    updateTheme();
  } else {
    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      currentTheme = "light";
      updateTheme();
    }
  }
}

// ==================== STATS ANIMATION ====================
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const target = parseInt(stat.getAttribute("data-count"));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateNumber = () => {
      current += step;
      if (current < target) {
        stat.textContent = Math.floor(current);
        requestAnimationFrame(updateNumber);
      } else {
        stat.textContent = target;
      }
    };

    // Start animation when element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateNumber();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(stat);
  });
}

// ==================== CONTACT FORM ====================
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalContent = submitBtn.innerHTML;

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  submitBtn.disabled = true;

  try {
    // Send to Formspree
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // Show success message
      formSuccess.classList.add("show");
      contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        formSuccess.classList.remove("show");
      }, 5000);
    } else {
      alert(
        "Oops! Something went wrong. Please try again or email me directly."
      );
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Oops! Something went wrong. Please try again or email me directly.");
  }

  submitBtn.innerHTML = originalContent;
  submitBtn.disabled = false;
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape, index) => {
    const speed = 0.05 * (index + 1);
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ==================== TYPING EFFECT FOR CODE ====================
function typeCode() {
  const codeBlock = document.querySelector(".window-body code");
  if (!codeBlock) return;

  const text = codeBlock.innerHTML;
  codeBlock.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      // Handle HTML tags
      if (text[i] === "<") {
        const closeTag = text.indexOf(">", i);
        codeBlock.innerHTML += text.substring(i, closeTag + 1);
        i = closeTag + 1;
      } else {
        codeBlock.innerHTML += text[i];
        i++;
      }
      setTimeout(type, 10);
    }
  }

  // Start typing after loader is hidden
  setTimeout(type, 2000);
}

// ==================== INITIALIZE ====================
document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Load preferences
  loadLanguagePreference();
  loadThemePreference();

  // Initialize typing effect
  typeCode();
});

// ==================== SERVICE WORKER REGISTRATION ====================
// Uncomment this for PWA support
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
*/

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
}, observerOptions);

// Observe elements with animation classes
document
  .querySelectorAll(".service-card, .project-card, .contact-card")
  .forEach((el) => {
    animationObserver.observe(el);
  });

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener("keydown", (e) => {
  // Close mobile menu on Escape
  if (e.key === "Escape") {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// ==================== PRELOAD CRITICAL RESOURCES ====================
function preloadResources() {
  const resources = [
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Cairo:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
  ];

  resources.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = url;
    link.as = "style";
    document.head.appendChild(link);
  });
}

// Call preload on DOMContentLoaded
document.addEventListener("DOMContentLoaded", preloadResources);

// ==================== LIGHTBOX FOR PROJECT SCREENSHOTS ====================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

let currentImages = [];
let currentIndex = 0;

// Initialize lightbox for all project screenshots
document.querySelectorAll(".project-screenshots img").forEach((img) => {
  img.addEventListener("click", function () {
    // Get all images in the same project
    const container = this.closest(".project-screenshots");
    currentImages = Array.from(container.querySelectorAll("img")).map(
      (i) => i.src
    );
    currentIndex = currentImages.indexOf(this.src);

    openLightbox(this.src);
  });
});

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

function showPrev() {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex];
}

function showNext() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex];
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", showPrev);
lightboxNext.addEventListener("click", showNext);

// Close on background click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation for lightbox
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});

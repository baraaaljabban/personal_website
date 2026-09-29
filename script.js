/* ═══════════════════════════════════════════════════════════════
   Baraa Aljabban — Portfolio v2
   Vanilla JS · zero dependencies · EN/AR i18n · a11y · performant
   ═══════════════════════════════════════════════════════════════ */
"use strict";

/* ─────────────── 0. HELPERS ─────────────── */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

/* ─────────────── 1. I18N STRINGS ─────────────── */
const i18n = {
    en: {
        typed: ["Flutter Apps", "Mobile Experiences", "AI Features", "Full-Stack Solutions"],
        copiedEmail: "Email copied to clipboard",
        copiedPhone: "Phone number copied to clipboard",
        formError: "Please fill in all fields correctly.",
        formFailed: "Something went wrong — please email me directly.",
        langBtn: "AR"
    },
    ar: {
        typed: ["تطبيقات فلاتر", "تجارب جوال مميزة", "مزايا الذكاء الاصطناعي", "حلولًا متكاملة"],
        copiedEmail: "تم نسخ البريد الإلكتروني",
        copiedPhone: "تم نسخ رقم الهاتف",
        formError: "يرجى تعبئة جميع الحقول بشكل صحيح.",
        formFailed: "حدث خطأ ما — يرجى مراسلتي مباشرة عبر البريد.",
        langBtn: "EN"
    }
};

let currentLang = localStorage.getItem("ba-lang") || "en";

const t = (key) => (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || key;

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("ba-lang", lang);
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // Text swap
    $$("[data-en]").forEach((el) => {
        const val = el.getAttribute(`data-${lang}`);
        if (val !== null) el.textContent = val;
    });
    // Placeholder swap
    $$("[data-en-ph]").forEach((el) => {
        const val = el.getAttribute(`data-${lang === "ar" ? "ar-ph" : "en-ph"}`);
        if (val !== null) el.setAttribute("placeholder", val);
    });
    // Language button label
    const lc = $(".lang-current");
    if (lc) lc.textContent = t("langBtn");

    // Restart typed effect in new language
    typed.reset();
    // Keep marquee width correct (width:max-content is automatic)
    // Close mobile menu if open
    closeMenu();
}

/* ─────────────── 2. PRELOADER ─────────────── */
const preloader = $("#preloader");
function hidePreloader() {
    if (!preloader) return;
    preloader.classList.add("done");
    setTimeout(() => preloader.remove(), 600);
}
window.addEventListener("load", () => setTimeout(hidePreloader, 350));
setTimeout(hidePreloader, 3000); // safety net

/* ─────────────── 3. TOAST ─────────────── */
const toastEl = $("#toast");
let toastTimer;
function toast(msg, isError = false) {
    if (!toastEl) return;
    clearTimeout(toastTimer);
    toastEl.className = "toast" + (isError ? " error" : "");
    toastEl.innerHTML = `<i class="fas ${isError ? "fa-exclamation-circle" : "fa-check-circle"}"></i><span></span>`;
    toastEl.querySelector("span").textContent = msg;
    requestAnimationFrame(() => toastEl.classList.add("show"));
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
}

/* ─────────────── 4. THEME ─────────────── */
const themeToggle = $("#theme-toggle");
const savedTheme = localStorage.getItem("ba-theme");
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
else if (window.matchMedia("(prefers-color-scheme: light)").matches)
    document.documentElement.setAttribute("data-theme", "light");

themeToggle?.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "" : "light";
    if (next) document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("ba-theme", next);
});

/* ─────────────── 5. CUSTOM CURSOR ─────────────── */
(() => {
    if (isTouch || prefersReducedMotion) return;
    const cursor = $("#cursor"), follower = $("#cursor-follower");
    if (!cursor || !follower) return;
    let cx = 0, cy = 0, fx = 0, fy = 0;
    document.addEventListener("mousemove", (e) => {
        cx = e.clientX; cy = e.clientY;
        document.body.classList.add("cursor-active");
        cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
    }, { passive: true });
    (function follow() {
        fx += (cx - fx) * 0.16; fy += (cy - fy) * 0.16;
        follower.style.transform = `translate(${fx}px, ${fy}px) translate(-50%,-50%)`;
        requestAnimationFrame(follow);
    })();
    document.addEventListener("mouseover", (e) => {
        document.body.classList.toggle("cursor-hover",
            !!e.target.closest("a, button, .skill-chip, input, select, textarea"));
    }, { passive: true });
    document.addEventListener("mouseleave", () => document.body.classList.remove("cursor-active"));
})();

/* ─────────────── 6. NAVBAR / MENU / SCROLLSPY / PROGRESS ─────────────── */
const navbar = $("#navbar");
const navMenu = $("#nav-menu");
const navToggle = $("#nav-toggle");
const scrollProgress = $("#scroll-progress");
const backToTop = $("#back-to-top");

function closeMenu() {
    navMenu?.classList.remove("open");
    navToggle?.classList.remove("active");
    navToggle?.setAttribute("aria-expanded", "false");
    navbar?.classList.remove("menu-open");
    document.body.style.overflow = "";
}
navToggle?.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.classList.toggle("active", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navbar?.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
$$(".nav-link").forEach((l) => l.addEventListener("click", closeMenu));

// Scrollspy + progress (rAF-throttled)
const spySections = $$("main section[id]:not([hidden])");
const navLinks = $$(".nav-link[data-nav]");
let ticking = false;
function onScroll() {
    const y = window.scrollY;
    navbar?.classList.toggle("scrolled", y > 12);
    backToTop?.classList.toggle("show", y > 700);
    if (scrollProgress) {
        const max = document.documentElement.scrollHeight - innerHeight;
        scrollProgress.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;
    }
    const probe = y + innerHeight * 0.34;
    let current = "";
    for (const s of spySections) if (s.offsetTop <= probe) current = s.id;
    navLinks.forEach((l) => l.classList.toggle("active", l.dataset.nav === current));
    ticking = false;
}
document.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
}, { passive: true });
onScroll();

backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));

/* ─────────────── 7. HERO CANVAS — particle network ─────────────── */
(() => {
    const canvas = $("#hero-canvas");
    if (!canvas || prefersReducedMotion) return;
    const ctx = canvas.getContext("2d");
    let W = 0, H = 0, dpr = Math.min(devicePixelRatio || 1, 2);
    let particles = [], raf = null, visible = true;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
        const r = canvas.getBoundingClientRect();
        W = r.width; H = r.height;
        canvas.width = W * dpr; canvas.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = clamp(Math.round((W * H) / 26000), 24, 90);
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.6 + 0.6
        }));
    }

    function step() {
        if (!visible) return;
        ctx.clearRect(0, 0, W, H);
        const accent = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#00d4ff";
        for (const p of particles) {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
            // gentle mouse attraction
            const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
            if (d < 170 && d > 0.001) { p.x += (dx / d) * 0.35; p.y += (dy / d) * 0.35; }
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = accent + "66"; ctx.fill();
        }
        // links
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const a = particles[i], b = particles[j];
                const d = Math.hypot(a.x - b.x, a.y - b.y);
                if (d < 130) {
                    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = accent + Math.round((1 - d / 130) * 40).toString(16).padStart(2, "0");
                    ctx.lineWidth = 0.7; ctx.stroke();
                }
            }
        }
        raf = requestAnimationFrame(step);
    }

    new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible && raf === null) raf = requestAnimationFrame(step);
        if (!visible && raf !== null) { cancelAnimationFrame(raf); raf = null; }
    }).observe(canvas);

    window.addEventListener("resize", resize, { passive: true });
    canvas.parentElement?.addEventListener("mousemove", (e) => {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    }, { passive: true });
    canvas.parentElement?.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });

    resize(); raf = requestAnimationFrame(step);
})();

/* ─────────────── 8. TYPED ROLES ─────────────── */
const typed = (() => {
    const el = $("#typed");
    let words = t("typed"), wi = 0, ci = 0, deleting = false, timer = null;

    function tick() {
        if (!el) return;
        const word = words[wi % words.length];
        if (!deleting) {
            ci++;
            if (ci >= word.length) { deleting = true; timer = setTimeout(tick, 1800); el.textContent = word; return; }
        } else {
            ci--;
            if (ci <= 0) { deleting = false; wi++; }
        }
        el.textContent = word.slice(0, ci);
        timer = setTimeout(tick, deleting ? 40 : 85);
    }
    function reset() {
        clearTimeout(timer);
        words = t("typed"); wi = 0; ci = 0; deleting = false;
        if (el && !prefersReducedMotion) tick();
        else if (el) el.textContent = words[0];
    }
    reset();
    return { reset };
})();

/* ─────────────── 9. KL LOCAL TIME ─────────────── */
(() => {
    const el = $("#kl-time");
    if (!el) return;
    const fmt = () => {
        try {
            el.textContent = new Intl.DateTimeFormat("en-GB", {
                hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kuala_Lumpur"
            }).format(new Date());
        } catch { el.textContent = "GMT+8"; }
    };
    fmt(); setInterval(fmt, 30000);
})();

/* ─────────────── 10. REVEAL ON SCROLL + STAGGER ─────────────── */
(() => {
    const items = $$(".reveal");
    items.forEach((el) => {
        const d = el.getAttribute("data-reveal-delay");
        if (d) el.style.setProperty("--reveal-delay", `${parseInt(d, 10)}ms`);
    });
    if (prefersReducedMotion) { items.forEach((el) => el.classList.add("revealed")); return; }
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target); }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => io.observe(el));
})();

/* ─────────────── 11. ANIMATED COUNTERS ─────────────── */
(() => {
    const nums = $$(".stat-number[data-count]");
    if (!nums.length) return;
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (!e.isIntersecting) return;
            io.unobserve(e.target);
            const target = parseInt(e.target.dataset.count, 10);
            if (prefersReducedMotion) { e.target.textContent = target; return; }
            const dur = 1600, start = performance.now();
            (function frame(now) {
                const p = clamp((now - start) / dur, 0, 1);
                e.target.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
                if (p < 1) requestAnimationFrame(frame);
            })(start);
        });
    }, { threshold: 0.6 });
    nums.forEach((n) => io.observe(n));
})();

/* ─────────────── 12. TILT CARDS (desktop) ─────────────── */
(() => {
    if (isTouch || prefersReducedMotion) return;
    const MAX = 6;
    $$(".tilt").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = `perspective(900px) rotateX(${(-py * MAX).toFixed(2)}deg) rotateY(${(px * MAX).toFixed(2)}deg) translateY(-4px)`;
        }, { passive: true });
        card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
})();

/* ─────────────── 13. MAGNETIC BUTTONS ─────────────── */
(() => {
    if (isTouch || prefersReducedMotion) return;
    $$(".magnetic").forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
            const r = btn.getBoundingClientRect();
            const x = (e.clientX - r.left - r.width / 2) * 0.18;
            const y = (e.clientY - r.top - r.height / 2) * 0.3;
            btn.style.transform = `translate(${x}px, ${y}px)`;
        }, { passive: true });
        btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
})();

/* ─────────────── 14. SKILL TABS ─────────────── */
$$(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        $$(".tab-btn").forEach((b) => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
        $$(".tab-panel").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        $(`#panel-${btn.dataset.tab}`)?.classList.add("active");
    });
});

/* ─────────────── 15. BRAND MARQUEE (duplicate content for seamless loop) ─────────────── */
(() => {
    const track = $(".marquee-track");
    if (!track) return;
    track.innerHTML += track.innerHTML; // duplicate → translateX(-50%) loops seamlessly
})();

/* ─────────────── 16. CAROUSELS ─────────────── */
const carouselAPIs = [];
$$("[data-carousel]").forEach((root) => {
    const track = $(".carousel-track", root);
    const slides = $$("img", track);
    const dotsWrap = $(".carousel-dots", root);
    if (!track || !slides.length) return;
    let index = 0, auto = null;

    const dots = slides.map((_, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("role", "tab");
        b.setAttribute("aria-label", `Screenshot ${i + 1}`);
        b.addEventListener("click", () => go(i, true));
        dotsWrap?.appendChild(b);
        return b;
    });

    function go(i, manual = false) {
        index = (i + slides.length) % slides.length;
        track.style.transform = `translateX(${-index * 100}%)`;
        dots.forEach((d, j) => d.classList.toggle("active", j === index));
        if (manual) restartAuto();
    }
    function restartAuto() {
        clearInterval(auto);
        if (!prefersReducedMotion && slides.length > 1)
            auto = setInterval(() => go(index + 1), 4200);
    }

    $(".carousel-btn.prev", root)?.addEventListener("click", () => go(index - 1, true));
    $(".carousel-btn.next", root)?.addEventListener("click", () => go(index + 1, true));
    root.addEventListener("mouseenter", () => clearInterval(auto));
    root.addEventListener("mouseleave", restartAuto);

    // Touch swipe
    let startX = null;
    const car = $(".carousel", root);
    car?.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    car?.addEventListener("touchend", (e) => {
        if (startX === null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 42) go(index + (dx < 0 ? 1 : -1), true);
        startX = null;
    }, { passive: true });

    // Lightbox hook
    slides.forEach((img, i) => img.addEventListener("click", () => openLightbox(slides, i)));

    go(0); restartAuto();
    carouselAPIs.push({ go });
});

/* ─────────────── 17. LIGHTBOX ─────────────── */
const lightbox = $("#lightbox");
const lightboxImg = $("#lightbox-img");
let lbSlides = [], lbIndex = 0, lastFocus = null;

function openLightbox(slides, i) {
    lbSlides = slides; lbIndex = i;
    lastFocus = document.activeElement;
    renderLightbox();
    lightbox?.classList.add("show");
    document.body.style.overflow = "hidden";
    $("#lightbox-close")?.focus();
}
function closeLightbox() {
    lightbox?.classList.remove("show");
    document.body.style.overflow = "";
    lastFocus?.focus?.();
}
function renderLightbox() {
    if (!lightboxImg || !lbSlides.length) return;
    lightboxImg.src = lbSlides[lbIndex].src;
    lightboxImg.alt = lbSlides[lbIndex].alt;
}
function lbStep(d) { lbIndex = (lbIndex + d + lbSlides.length) % lbSlides.length; renderLightbox(); }

$("#lightbox-close")?.addEventListener("click", closeLightbox);
$("#lightbox-prev")?.addEventListener("click", () => lbStep(-1));
$("#lightbox-next")?.addEventListener("click", () => lbStep(1));
lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
    if (!lightbox?.classList.contains("show")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbStep(-1);
    if (e.key === "ArrowRight") lbStep(1);
});

/* ─────────────── 18. TESTIMONIALS SLIDER ─────────────── */
(() => {
    const track = $("#testimonials-track");
    if (!track) return;
    const cards = $$(".testimonial-card", track);
    const dotsWrap = $("#testimonials-dots");
    let idx = 0, auto = null;

    const dots = cards.map((_, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", `Testimonial ${i + 1}`);
        b.addEventListener("click", () => go(i, true));
        dotsWrap?.appendChild(b);
        return b;
    });

    function go(i, manual = false) {
        idx = (i + cards.length) % cards.length;
        track.style.transform = `translateX(${-idx * 100}%)`;
        dots.forEach((d, j) => d.classList.toggle("active", j === idx));
        if (manual) restart();
    }
    function restart() {
        clearInterval(auto);
        if (!prefersReducedMotion && cards.length > 1)
            auto = setInterval(() => go(idx + 1), 6000);
    }

    $("#testimonial-prev")?.addEventListener("click", () => go(idx - 1, true));
    $("#testimonial-next")?.addEventListener("click", () => go(idx + 1, true));
    const slider = $("#testimonials-slider");
    slider?.addEventListener("mouseenter", () => clearInterval(auto));
    slider?.addEventListener("mouseleave", restart);

    let sx = null;
    slider?.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
    slider?.addEventListener("touchend", (e) => {
        if (sx === null) return;
        const dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 42) go(idx + (dx < 0 ? 1 : -1), true);
        sx = null;
    }, { passive: true });

    go(0); restart();
})();

/* ─────────────── 19. FAQ ACCORDION ─────────────── */
$$(".faq-item").forEach((item) => {
    const btn = $(".faq-question", item);
    const answer = $(".faq-answer", item);
    btn?.addEventListener("click", () => {
        const open = item.classList.contains("open");
        // close others
        $$(".faq-item.open").forEach((o) => {
            if (o !== item) {
                o.classList.remove("open");
                $(".faq-question", o)?.setAttribute("aria-expanded", "false");
                const a = $(".faq-answer", o); if (a) a.style.maxHeight = "0px";
            }
        });
        item.classList.toggle("open", !open);
        btn.setAttribute("aria-expanded", String(!open));
        if (answer) answer.style.maxHeight = !open ? `${answer.scrollHeight}px` : "0px";
    });
});

/* ─────────────── 20. SERVICE PRE-SELECTION ─────────────── */
$$(".service-link[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
        const select = $("#subject");
        if (select) select.value = link.dataset.service;
    });
});

/* ─────────────── 21. COPY EMAIL / PHONE ─────────────── */
function copyText(text, okMsg) {
    const done = () => toast(okMsg);
    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else fallbackCopy(text, done);
}
function fallbackCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch { /* ignore */ }
    ta.remove();
}
$$(".copy-btn[data-copy]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); e.preventDefault();
        const isEmail = btn.dataset.copy.includes("@");
        copyText(btn.dataset.copy, isEmail ? t("copiedEmail") : t("copiedPhone"));
    });
});
$("#hero-copy-email")?.addEventListener("click", (e) => {
    e.preventDefault();
    copyText(e.currentTarget.dataset.email, t("copiedEmail"));
});

/* ─────────────── 22. CONTACT FORM (AJAX → Formspree) ─────────────── */
(() => {
    const form = $("#contact-form");
    const success = $("#form-success");
    if (!form) return;

    function validate() {
        let ok = true;
        $$("input[required], select[required], textarea[required]", form).forEach((f) => {
            const bad = !f.value.trim() ||
                (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.value.trim()));
            f.classList.toggle("invalid", bad);
            if (bad) ok = false;
        });
        return ok;
    }
    form.addEventListener("input", (e) => e.target.classList?.remove("invalid"));

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!validate()) { toast(t("formError"), true); return; }

        form.classList.add("sending");
        try {
            const res = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            });
            if (res.ok) {
                form.reset();
                success?.classList.add("show");
            } else {
                toast(t("formFailed"), true);
            }
        } catch {
            toast(t("formFailed"), true);
        } finally {
            form.classList.remove("sending");
        }
    });

    $("#send-another")?.addEventListener("click", () => success?.classList.remove("show"));
})();

/* ─────────────── 23. LANGUAGE SWITCH ─────────────── */
$("#lang-switch")?.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "ar" : "en");
});
if (currentLang !== "en") applyLanguage(currentLang);

/* ─────────────── 24. MISC ─────────────── */
$("#current-year") && ($("#current-year").textContent = new Date().getFullYear());

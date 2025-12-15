/**
 * ============================================
 * 3D EFFECTS AND ANIMATIONS
 * Three.js powered interactive 3D elements
 * ============================================
 */

// ==================== 3D PARTICLE BACKGROUND ====================
let scene, camera, renderer, particles, particleGeometry, particleMaterial;
let mouseX = 0,
  mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function init3DBackground() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  // Scene setup
  scene = new THREE.Scene();

  // Camera setup
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 500;

  // Renderer setup
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create particles - reduced for more professional look
  const particleCount = 800;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  // Define colors for gradient effect
  const color1 = new THREE.Color("#00d4ff");
  const color2 = new THREE.Color("#7c3aed");
  const color3 = new THREE.Color("#ffffff");

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    // Random positions
    positions[i3] = (Math.random() - 0.5) * 2000;
    positions[i3 + 1] = (Math.random() - 0.5) * 2000;
    positions[i3 + 2] = (Math.random() - 0.5) * 1000;

    // Random colors from gradient
    const mixRatio = Math.random();
    const color = mixRatio < 0.33 ? color1 : mixRatio < 0.66 ? color2 : color3;
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // Particle material - more subtle
  particleMaterial = new THREE.PointsMaterial({
    size: 2,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  // Add ambient light effect
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Add floating geometries
  createFloatingGeometries();

  // Mouse move listener
  document.addEventListener("mousemove", onMouseMove);

  // Resize listener
  window.addEventListener("resize", onWindowResize);

  // Start animation
  animate3D();
}

// Create floating 3D geometries - more subtle and professional
function createFloatingGeometries() {
  // Torus
  const torusGeometry = new THREE.TorusGeometry(80, 20, 16, 100);
  const torusMaterial = new THREE.MeshBasicMaterial({
    color: 0x00d4ff,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  });
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  torus.position.set(-400, 200, -300);
  scene.add(torus);
  torus.userData.rotationSpeed = { x: 0.005, y: 0.003 };

  // Icosahedron
  const icoGeometry = new THREE.IcosahedronGeometry(60, 0);
  const icoMaterial = new THREE.MeshBasicMaterial({
    color: 0x7c3aed,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  });
  const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
  icosahedron.position.set(400, -200, -350);
  scene.add(icosahedron);
  icosahedron.userData.rotationSpeed = { x: 0.004, y: 0.006 };

  // Octahedron
  const octaGeometry = new THREE.OctahedronGeometry(50, 0);
  const octaMaterial = new THREE.MeshBasicMaterial({
    color: 0x00d4ff,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  });
  const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
  octahedron.position.set(200, 300, -300);
  scene.add(octahedron);
  octahedron.userData.rotationSpeed = { x: 0.005, y: 0.004 };

  // Store geometries for animation
  scene.userData.floatingShapes = [torus, icosahedron, octahedron];
}

// Mouse move handler
function onMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) * 0.5;
  mouseY = (event.clientY - windowHalfY) * 0.5;
}

// Window resize handler
function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation loop
function animate3D() {
  requestAnimationFrame(animate3D);

  // Rotate particles
  if (particles) {
    particles.rotation.y += 0.0005;
    particles.rotation.x += 0.0002;
  }

  // Animate floating geometries
  if (scene.userData.floatingShapes) {
    scene.userData.floatingShapes.forEach((shape) => {
      shape.rotation.x += shape.userData.rotationSpeed.x;
      shape.rotation.y += shape.userData.rotationSpeed.y;

      // Float up and down
      shape.position.y += Math.sin(Date.now() * 0.001) * 0.1;
    });
  }

  // Camera follows mouse
  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

// ==================== 3D CARD EFFECTS - More Subtle ====================
function init3DCards() {
  const cards = document.querySelectorAll(
    ".service-card, .contact-card, .education-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.02, 1.02, 1.02)";
    });

    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      // Add subtle glow effect
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      this.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0, 212, 255, 0.05), transparent 50%), var(--bg-card)`;
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      this.style.background = "";
    });
  });
}

// ==================== PARALLAX SCROLL EFFECTS ====================
function initParallaxScroll() {
  const parallaxElements = document.querySelectorAll("[data-parallax]");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((element) => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  });
}

// ==================== SMOOTH SCROLL WITH ANIMATION ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        const offsetTop = target.offsetTop - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// ==================== 3D TEXT EFFECTS ====================
function init3DText() {
  const heroTitle = document.querySelector(".hero-title");
  if (!heroTitle) return;

  heroTitle.style.textShadow = `
        0 0 10px rgba(0, 212, 255, 0.5),
        0 0 20px rgba(0, 212, 255, 0.3),
        0 0 30px rgba(124, 58, 237, 0.3),
        2px 2px 4px rgba(0, 0, 0, 0.5)
    `;
}

// ==================== FLOATING ANIMATION FOR ELEMENTS ====================
function initFloatingElements() {
  // Only apply subtle floating to hero service items, not to skill tags
  const floatingElements = document.querySelectorAll(".hero-service-item");

  floatingElements.forEach((element, index) => {
    const delay = index * 0.2;
    const duration = 4;

    // Much more subtle floating
    element.style.animation = `floatSubtle ${duration}s ease-in-out ${delay}s infinite`;
  });
}

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
function initIntersectionAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0) scale(1)";
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".service-card, .project-card, .contact-card")
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(50px) scale(0.95)";
      element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      observer.observe(element);
    });
}

// ==================== MAGNETIC BUTTON EFFECT - More Subtle ====================
function initMagneticButtons() {
  // Exclude hero section buttons from magnetic effect
  const buttons = document.querySelectorAll(".btn:not(.hero-cta .btn)");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) translateZ(10px)";
    });

    button.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      this.style.transform = `scale(1.05) translate(${x * 0.1}px, ${
        y * 0.1
      }px) translateZ(10px)`;
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) translate(0, 0) translateZ(0)";
    });
  });
}

// ==================== RIPPLE EFFECT ON CLICK ====================
function initRippleEffect() {
  // Exclude hero section buttons from ripple effect
  document
    .querySelectorAll(".btn:not(.hero-cta .btn), .service-card, .project-card")
    .forEach((element) => {
      element.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple-effect");

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });
}

// ==================== INITIALIZE ALL 3D EFFECTS ====================
function initAll3DEffects() {
  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(initEffects, 100);
    });
  } else {
    setTimeout(initEffects, 100);
  }
}

function initEffects() {
  // Show a subtle initialization
  console.log("🎨 Initializing 3D effects...");

  init3DBackground();
  init3DCards();
  initParallaxScroll();
  initSmoothScroll();
  init3DText();
  initFloatingElements();
  initIntersectionAnimations();
  initMagneticButtons();
  initRippleEffect();

  // Add a canvas fade-in effect
  const canvas = document.getElementById("hero-canvas");
  if (canvas) {
    canvas.style.opacity = "0";
    canvas.style.transition = "opacity 1s ease-in";
    setTimeout(() => {
      canvas.style.opacity = "1";
    }, 100);
  }

  console.log("✨ 3D effects initialized successfully!");
}

// Start initialization
initAll3DEffects();

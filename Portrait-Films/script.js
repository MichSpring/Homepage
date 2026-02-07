const revealElements = document.querySelectorAll(
  ".section, .work-card, .philosophy-item, .service-line, .contact-form"
);

revealElements.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => observer.observe(el));

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("submitted");
  });
}

const curtain = document.querySelector(".curtain");
const intro = document.querySelector(".intro");
const introCursor = document.querySelector(".intro-cursor");
const body = document.body;

const startReveal = () => {
  if (intro) {
    intro.classList.add("hide");
    window.setTimeout(() => intro.remove(), 950);
  }
  body.classList.remove("intro-active");
  if (curtain) {
    curtain.classList.add("open");
  }
};

if (intro && introCursor) {
  intro.addEventListener("mousemove", (event) => {
    introCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });
  intro.addEventListener("click", startReveal);
}

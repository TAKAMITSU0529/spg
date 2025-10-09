const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const scrollTopBtn = document.querySelector(".scroll-top");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("is-open");
    navMenu.classList.toggle("is-open");
    const expanded = navToggle.classList.contains("is-open");
    navToggle.setAttribute("aria-expanded", expanded);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("is-open");
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const handleScrollTopVisibility = () => {
  if (!scrollTopBtn) return;
  if (window.scrollY > window.innerHeight * 0.4) {
    scrollTopBtn.classList.add("is-visible");
  } else {
    scrollTopBtn.classList.remove("is-visible");
  }
};

window.addEventListener("scroll", handleScrollTopVisibility);
handleScrollTopVisibility();

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const revealTargets = document.querySelectorAll(
  ".section, .highlight, .card, .stat, .contact__card, .company__frame"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -60px 0px",
  }
);

revealTargets.forEach((target) => {
  target.classList.add("reveal");
  revealObserver.observe(target);
});

const hero = document.querySelector(".hero");
if (hero) {
  hero.classList.add("reveal");
  setTimeout(() => hero.classList.add("is-visible"), 200);
}

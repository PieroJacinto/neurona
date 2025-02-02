document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  const cardSection = document.getElementById("card-section");
  const cards = document.querySelectorAll(".vision-card");
  const heroSection = document.querySelector(".hero-section");
  const heroTitle = heroSection.querySelector("h1");
  const heroSubtitle = heroSection.querySelector(".subtitle");
  const ctaButton = heroSection.querySelector(".cta-button");
  const contactSection = document.getElementById("contact");
  const contactHeader = contactSection.querySelector(".header");
  const contactForm = contactSection.querySelector(".form-container");
  const footer = document.querySelector('.footer');
  const swingSection = document.getElementById('partners-section');

  // Set initial states
  cards.forEach((card, index) => {
    if (index % 2 === 0) {
      card.style.transform = 'translateX(-100%)';
    } else {
      card.style.transform = 'translateX(100%)';
    }
    card.style.opacity = '0';
    card.style.transition = 'all 1s ease';
  });

  // Set initial state for footer
  if (footer) {
    footer.style.opacity = '0';
    footer.style.transform = 'translateY(50px)';
    footer.style.transition = 'all 1s ease';
  }

  function showCard(card, index) {
    setTimeout(() => {
      card.style.transform = 'translateX(0)';
      card.style.opacity = '1';
    }, index * 200);
  }

  function hideCard(card, index) {
    card.style.opacity = '0';
    if (index % 2 === 0) {
      card.style.transform = 'translateX(-100%)';
    } else {
      card.style.transform = 'translateX(100%)';
    }
  }

  function animateHero() {
    heroTitle.style.animation = 'none';
    heroSubtitle.style.animation = 'none';
    ctaButton.style.animation = 'none';

    void heroTitle.offsetHeight;

    heroTitle.style.animation = 'tracking-in-contract-bck-bottom 1s cubic-bezier(.215,.61,.355,1.000) both';
    setTimeout(() => {
      heroSubtitle.style.animation = 'fadeInUp 0.7s ease forwards';
    }, 300);
    setTimeout(() => {
      ctaButton.style.animation = 'fadeInUp 0.7s ease forwards, bounce 1.5s infinite ease-in-out';
    }, 600);
  }

  // Scroll button handler
  if (scrollButton && cardSection) {
    scrollButton.addEventListener("click", () => {
      cards.forEach((card, index) => hideCard(card, index));
      cardSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        cards.forEach((card, index) => showCard(card, index));
      }, 500);
    });
  }

  // Create all observers
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateHero();
      }
    });
  }, { threshold: 0.5 });

  const cardSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, index) => showCard(card, index));
      } else {
        cards.forEach((card, index) => hideCard(card, index));
      }
    });
  }, { threshold: 0.2 });

  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactHeader.classList.add('animate-from-left');
        contactForm.classList.add('animate-from-right');
      } else {
        contactHeader.classList.remove('animate-from-left');
        contactForm.classList.remove('animate-from-right');
      }
    });
  }, { threshold: 0.2 });

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-from-bottom');
        } else {
            entry.target.classList.remove('animate-from-bottom');
        }
    });
}, { 
    threshold: 0.05, // Reducimos el threshold para que comience más pronto
    rootMargin: '50px' // Añadimos un margen para detectar antes el footer
});
const swingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('swing-in-top-fwd');
      } else {
          // Esperamos a que la animación termine antes de remover la clase
          setTimeout(() => {
              entry.target.classList.remove('swing-in-top-fwd');
          }, 1000); // Ajusta este valor según la duración de tu animación
      }
  });
}, {
  threshold: 0.05,
  rootMargin: '50px'
});

  // Start observing all sections
  if (heroSection) heroObserver.observe(heroSection);
  if (cardSection) cardSectionObserver.observe(cardSection);
  if (contactSection) contactObserver.observe(contactSection);
  if (swingSection) swingObserver.observe(swingSection);
  if (footer) footerObserver.observe(footer);
});
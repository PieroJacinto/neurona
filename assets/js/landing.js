document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  const cardSection = document.getElementById("card-section");
  const cards = document.querySelectorAll(".vision-card");
  const heroSection = document.querySelector(".hero-section");
  const heroTitle = heroSection.querySelector("h1");
  const heroSubtitle = heroSection.querySelector(".subtitle");
  const ctaButton = heroSection.querySelector(".cta-button");

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
    // Reset hero animations
    heroTitle.style.animation = 'none';
    heroSubtitle.style.animation = 'none';
    ctaButton.style.animation = 'none';

    void heroTitle.offsetHeight; // Force reflow

    // Start animations
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
      // First hide all cards
      cards.forEach((card, index) => hideCard(card, index));
      
      // Scroll to section
      cardSection.scrollIntoView({ behavior: "smooth" });
      
      // Show cards after scroll
      setTimeout(() => {
        cards.forEach((card, index) => showCard(card, index));
      }, 500);
    });
  }

  // Create Intersection Observer for hero section
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateHero();
      }
    });
  }, { threshold: 0.5 });

  // Create Intersection Observer for card section
  const cardSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, index) => showCard(card, index));
      } else {
        cards.forEach((card, index) => hideCard(card, index));
      }
    });
  }, { threshold: 0.2 });

  // Start observing
  heroObserver.observe(heroSection);
  cardSectionObserver.observe(cardSection);
});
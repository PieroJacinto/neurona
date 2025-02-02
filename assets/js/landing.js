// Enhanced animation script for both hero and cards sections
document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  const cardSection = document.getElementById("card-section");
  const cards = document.querySelectorAll(".vision-card");
  const heroSection = document.querySelector(".hero-section");
  const heroTitle = heroSection.querySelector("h1");
  const heroSubtitle = heroSection.querySelector(".subtitle");
  const ctaButton = heroSection.querySelector(".cta-button");

  // Function to reset animation
  function resetAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = null;
  }

  // Function to animate hero elements
  function animateHero() {
    // Reset and replay animations for each hero element
    const elements = [heroTitle, heroSubtitle, ctaButton];
    
    elements.forEach((element, index) => {
      if (element) {
        resetAnimation(element);
        void element.offsetWidth; // Force reflow
        
        // Remove existing animation classes
        element.classList.remove("animate");
        
        // Add animations with delays
        setTimeout(() => {
          if (element === heroTitle) {
            element.style.animation = 'tracking-in-contract-bck-bottom 1s cubic-bezier(.215,.61,.355,1.000) both';
          } else if (element === heroSubtitle) {
            element.style.animation = 'fadeInUp 0.7s ease forwards';
          } else if (element === ctaButton) {
            element.style.animation = 'fadeInUp 0.7s ease forwards, bounce 1.5s infinite ease-in-out';
          }
        }, index * 300); // 300ms delay between each element
      }
    });
  }

  // Function to handle card animations
  function animateCards() {
    cards.forEach((card, index) => {
      resetAnimation(card);
      card.classList.remove("animate");
      void card.offsetWidth;
      setTimeout(() => {
        card.classList.add("animate");
      }, index * 200);
    });
  }

  // Scroll button handler
  if (scrollButton && cardSection) {
    scrollButton.addEventListener("click", function () {
      cardSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(animateCards, 500);
    });
  }

  // Create observers for both hero and card sections
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateHero();
        }
      });
    },
    { 
      threshold: 0.5
    }
  );

  const cardsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          resetAnimation(card);
          card.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    },
    { 
      threshold: 0.3
    }
  );

  // Observe hero section
  heroObserver.observe(heroSection);

  // Observe all cards
  cards.forEach(card => {
    cardsObserver.observe(card);
  });
});
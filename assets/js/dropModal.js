// Solution data with all the necessary information
const solutions = {
  'escala': {
      logo: './assets/images/escala-rem.png',
      title: 'Escala',
      description: "The CRM with AI, WhatsApp, and integrated marketing tools to sell more and better. Promote your services and multiply your sales with a CRM that's truly easy to use."
  },
  'codegpt': {
      logo: './assets/images/codegpt-rem.png',
      title: 'CodeGPT',
      description: 'Explore our AI-powered Code Assistants and Copilot Generator Platform, specifically tailored for AI-assisted coding. We provide the perfect solution to make engineering teams work more efficiently with AI.'
  },
  'primeur': {
      logo: './assets/images/primeur.png',
      title: 'PRIMEUR DATA ONE®',
      description: 'PRIMEUR DATA ONE® is our Hybrid Data Integration Platform, developed based on 35 years of experience managing the data of the most important Fortune 500 companies worldwide.'
  }
};

// Update the dropdown content items to match the solutions
document.querySelector('.dropdown-content').innerHTML = `
  <a href="#" data-solution="escala">AI CRM</a>
  <a href="#" data-solution="codegpt">Smart Coders</a>
  <a href="#" data-solution="primeur">Data Integration</a>
`;

// Get modal elements
const modal = document.getElementById('solutionModal');
const closeBtn = document.querySelector('.close');
const modalLogo = document.getElementById('modalLogo');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

// Add click event listeners to dropdown items
document.querySelectorAll('.dropdown-content a').forEach(item => {
  item.addEventListener('click', (e) => {
      e.preventDefault();
      const solution = solutions[e.target.dataset.solution];
      
      // Update modal content
      modalLogo.src = solution.logo;
      modalLogo.alt = solution.title;
      modalTitle.textContent = solution.title;
      modalDescription.textContent = solution.description;
      
      // Show modal
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
  }
});

// Handle form submission
document.getElementById('demoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here
  console.log('Form submitted');
});
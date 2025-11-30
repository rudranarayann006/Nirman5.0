const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add('show');
    }
  });
});

const posts = document.querySelectorAll('.post');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  posts.forEach(post => {
    const top = post.getBoundingClientRect().top;
    if (top < trigger) {
      post.classList.add('show');
    }
  });
});

const members = document.querySelectorAll('.member');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  members.forEach(m => {
    const top = m.getBoundingClientRect().top;
    if (top < trigger) { m.classList.add('show'); }
  });
});

function toggleMode() {
  const btn = document.querySelector('.toggle button');
  if (btn.innerText.includes("Anonymous")) {
    btn.innerText = "Switch to Public Mode";
    alert("✅ Anonymous Mode Activated");
  } else {
    btn.innerText = "Switch to Anonymous Mode";
    alert("👤 Public Mode Activated");
  }
}

// Modern Navbar functionality with proper hamburger menu
document.addEventListener('DOMContentLoaded', function() {
  // Initialize navbar functionality
  initializeNavbar();
  
  // Add scroll effect to navbar
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

function initializeNavbar() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navbar ul');
  
  // Create hamburger spans if they don't exist
  if (menuToggle && !menuToggle.querySelector('span')) {
    menuToggle.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;
  }
  
  // Add click event to hamburger menu
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      if (navMenu) {
        navMenu.classList.toggle('active');
      }
    });
  }
  
  // Close menu when clicking on a link (mobile)
  const navLinks = document.querySelectorAll('.navbar ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        menuToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
      }
    });
  });
  
  // Close menu when clicking outside (mobile)
  document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
      const navbar = document.querySelector('.navbar');
      if (!navbar.contains(event.target)) {
        menuToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
      }
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menuToggle?.classList.remove('active');
      navMenu?.classList.remove('active');
    }
  });
  
  // Set active page in navigation
  setActivePage();
}

function setActivePage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar ul li a');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Legacy toggle menu function for backward compatibility
function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navbar ul');
  
  if (menuToggle && navMenu) {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  }
}


const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotPopup = document.getElementById("chatbot-popup");
chatbotIcon.addEventListener("click", () => {
  if (chatbotPopup.style.display === "block") {
    chatbotPopup.style.display = "none";
  } else {
    chatbotPopup.style.display = "block";
  }
});



// animate testimonials on scroll
const testimonials = document.querySelectorAll('.testimonial');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  testimonials.forEach(t => {
    if (t.getBoundingClientRect().top < trigger) {
      t.classList.add('show');
    }
  });
});

// Handle story form submission and display stories
document.addEventListener('DOMContentLoaded', function () {
  const storyForm = document.getElementById('storyForm');
  if (storyForm) {
    storyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = this.querySelector('input').value;
      const story = this.querySelector('textarea').value;

      const storyList = document.getElementById('story-list');
      const storyCard = document.createElement('div');
      storyCard.className = 'story-card';
      storyCard.innerHTML = `<strong>${name}</strong><p>${story}</p>`;
      storyList.appendChild(storyCard);

      this.reset();
    });
  }
});
// Scroll animation for cards, posts, and members
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  // Animate cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add('show');
    }
  });

  // Animate posts
  const posts = document.querySelectorAll('.post');
  posts.forEach(post => {
    const top = post.getBoundingClientRect().top;
    if (top < trigger) {
      post.classList.add('show');
    }
  });

  // Animate team members
  const members = document.querySelectorAll('.member');
  members.forEach(member => {
    const top = member.getBoundingClientRect().top;
    if (top < trigger) {
      member.classList.add('show');
    }
  });
});

// Toggle between anonymous and public mode
function toggleMode() {
  const btn = document.querySelector('.toggle button');
  if (btn.innerText.includes("Anonymous")) {
    btn.innerText = "Switch to Public Mode";
    alert("✅ Anonymous Mode Activated");
  } else {
    btn.innerText = "Switch to Anonymous Mode";
    alert("👤 Public Mode Activated");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const visibilityToggle = document.getElementById('visibilityToggle');
  const visibilityIcon = document.getElementById('visibilityIcon');
  const visibilityText = document.getElementById('visibilityText');
  const visibilityInput = document.getElementById('visibilityInput');

  const states = [
    { icon: 'fa-eye',       text: 'Public' },
    { icon: 'fa-lock',      text: 'Private' },
    { icon: 'fa-eye-slash', text: 'Anonymous' }
  ];
  let current = 0;

  function updateUI() {
    const s = states[current];
    // reset icon class completely
    visibilityIcon.className = 'fa-solid ' + s.icon;
    visibilityText.textContent = s.text;
    visibilityInput.value = s.text;
  }

  visibilityToggle.addEventListener('click', () => {
    current = (current + 1) % states.length;
    updateUI();
  });

  updateUI(); // set initial state
});


document.addEventListener('DOMContentLoaded', () => {
  const filterSelect = document.getElementById('storyFilter');
  const storyCards = document.querySelectorAll('#story-list .story-card');

  filterSelect.addEventListener('change', () => {
    const selected = filterSelect.value;

    storyCards.forEach(card => {
      const cardFilter = card.dataset.filter; // Age / Severity / Category
      if (selected === 'All' || cardFilter === selected) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const filterSelect = document.getElementById('storyFilter');
  const storyCards = document.querySelectorAll('#story-list .story-card');

  filterSelect.addEventListener('change', () => {
    const selected = filterSelect.value;

    storyCards.forEach(card => {
      const cardFilter = card.dataset.filter;
      if (selected === 'All' || cardFilter === selected) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {

  // Booking form (user)
  const bookingForm = document.getElementById('bookingForm');
  const bookingMsg = document.getElementById('bookingMsg');

  bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const age = document.getElementById('studentAge').value;
    const date = document.getElementById('appointmentDate').value;
    const time = document.getElementById('appointmentTime').value;
    bookingMsg.textContent = `✅ Appointment booked for ${name} (Age ${age}) on ${date} at ${time}.`;
    bookingForm.reset();
  });

  // Record form (admin)
  const recordForm = document.getElementById('recordForm');
  const recordsTableBody = document.querySelector('#recordsTable tbody');

  recordForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('recordName').value;
    const age = document.getElementById('recordAge').value;
    const date = document.getElementById('recordDate').value;
    const day = document.getElementById('recordDay').value;
    const time = document.getElementById('recordTime').value;

    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${name}</td><td>${age}</td><td>${date}</td><td>${day}</td><td>${time}</td>`;
    recordsTableBody.appendChild(tr);

    recordForm.reset();
  });
});
// Dark Mode Toggle with localStorage
function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById('themeBtn');
  
  body.classList.toggle('dark-mode');
  
  // Change button icon
  if (body.classList.contains('dark-mode')) {
    btn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    btn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  const btn = document.getElementById('themeBtn');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (btn) btn.textContent = '☀️';
  } else {
    if (btn) btn.textContent = '🌙';
  }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 8px 40px rgba(0, 212, 255, 0.2)';
    navbar.style.padding = '0.5rem 0';
  } else {
    navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    navbar.style.padding = '1rem 0';
  }
});

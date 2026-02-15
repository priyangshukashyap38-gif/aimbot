// entry.js — page logic, particles, transitions

(function() {
  // ---------- PAGE ENTER ANIMATION ----------
  document.body.classList.add('page-enter');

  // ---------- FLOATING PARTICLES ----------
  const particlesContainer = document.getElementById('particles');
  for (let i = 0; i < 45; i++) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    const size = Math.random() * 8 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 12 + 10) + 's';
    particle.style.background = `rgba(160, 200, 255, ${Math.random() * 0.3})`;
    particlesContainer.appendChild(particle);
  }

  // ---------- TOAST ----------
  const toast = document.getElementById('toast');
  function showComingSoon() {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 1800);
  }

  // ---------- BUTTONS ----------
  const pcBtn = document.getElementById('pcBtn');
  const phoneBtn = document.getElementById('phoneBtn');
  const mobilatorBtn = document.getElementById('mobilatorBtn');

  pcBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showComingSoon();
  });

  mobilatorBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showComingSoon();
  });

  // PHONE → animated transition to device page
  phoneBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // exit animation
    document.body.classList.add('page-exit');
    // small delay to show exit
    setTimeout(() => {
      window.location.href = 'device.html';
    }, 500);
  });

  // tiny ripple simulation via class (already in css)
})();

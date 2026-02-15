// device.js
(function() {
  document.body.classList.add('page-enter');

  // particles
  const container = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 10 + 's';
    p.style.animationDuration = (Math.random() * 10 + 10) + 's';
    container.appendChild(p);
  }

  const toast = document.getElementById('toast');
  function comingSoon() {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1700);
  }

  const androidCard = document.getElementById('androidCard');
  const iosCard = document.getElementById('iosCard');

  androidCard.addEventListener('click', () => {
    document.body.classList.add('page-exit');
    setTimeout(() => window.location.href = 'login.html', 450);
  });

  iosCard.addEventListener('click', (e) => {
    e.preventDefault();
    comingSoon();
  });
})();

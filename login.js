// login.js
(function() {
  document.body.classList.add('page-enter');

  // particles
  const pContainer = document.getElementById('particles');
  for (let i=0;i<30;i++) {
    let p = document.createElement('span');
    p.className = 'particle';
    p.style.left = Math.random()*100+'%';
    p.style.top = Math.random()*100+'%';
    p.style.animationDelay = Math.random()*10+'s';
    p.style.animationDuration = (Math.random()*10+15)+'s';
    pContainer.appendChild(p);
  }

  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // no validation, just animate to dashboard
    document.body.classList.add('page-exit');
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 450);
  });
})();

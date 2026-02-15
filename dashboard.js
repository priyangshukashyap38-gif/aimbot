// dashboard.js (updated with audio fallback)
(function() {
  document.body.classList.add('page-enter');

  // ---------- PARTICLES ----------
  const pContainer = document.getElementById('particles');
  for (let i=0;i<40;i++) {
    let p = document.createElement('span');
    p.className = 'particle';
    p.style.left = Math.random()*100+'%';
    p.style.top = Math.random()*100+'%';
    p.style.animationDelay = Math.random()*10+'s';
    p.style.animationDuration = (Math.random()*12+14)+'s';
    pContainer.appendChild(p);
  }

  // ---------- MUSIC AUTOPLAY + FALLBACK ----------
  const audio = document.getElementById('bgm');
  audio.volume = 0.4; // comfortable level
  audio.loop = true;

  // Attempt autoplay
  let playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay blocked – create an unobtrusive unlock button
      const unlockBtn = document.createElement('button');
      unlockBtn.innerHTML = '🔊 Enable Music';
      unlockBtn.className = 'audio-unlock-btn';
      unlockBtn.setAttribute('aria-label', 'Enable background music');
      document.body.appendChild(unlockBtn);

      // Style it (will be added to CSS)
      unlockBtn.addEventListener('click', function() {
        audio.play();
        unlockBtn.remove();
      });
    });
  }

  // ---------- APPLICATION CARDS ----------
  const appsGrid = document.getElementById('appsGrid');
  const apps = [
    { title: 'PriyangshuX8 AIM.apk', desc: 'This application improves your aim precision and accuracy simulation.', img: 'assets/PriyangshuX8 AIM-1.jpg', link: 'https://www.mediafire.com/file/9fv830jmadttyl0/PriyangshuX8_AIM.apk/file' },
    { title: 'PriyangshuX8 FPS Booster.apk', desc: 'This application simulates FPS optimization and performance boost.', img: 'assets/PriyangshuX8 FPS booster-1.jpg', link: 'https://www.mediafire.com/file/38rsdcvnszdbg6r/PriyangshuX8_FPS_booster.apk/file' }
  ];

  apps.forEach(app => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img class="card-img" src="${app.img}" alt="${app.title}" loading="lazy">
      <h3>${app.title}</h3>
      <p>${app.desc}</p>
      <a href="${app.link}" target="_blank" class="download-link">DOWNLOAD</a>
    `;
    appsGrid.appendChild(card);
  });

  // ---------- SCRIPT CARDS ----------
  const scriptsGrid = document.getElementById('scriptsGrid');
  const scripts = [
    { name: 'PriyangshuX8-FPS.sh', img: 'assets/fps-booster-script.jpg', link: 'https://www.mediafire.com/file/95tq1n9jggfmmzq/PriyangshuX8-FPS.sh/file' },
    { name: 'PriyangshuX8-AIM-optmization.sh', img: 'assets/aim_optimization_script.jpg', link: 'https://www.mediafire.com/file/es8iwdf38irfdww/PriyangshuX8-AIM-optmization.sh/file' },
    { name: 'PriyangshuX8_aim_stabilization.sh', img: 'assets/PriyangshuX8_aim_stabilization.jpg', link: 'https://www.mediafire.com/file/4d9xb5bm7vy9qw7/PriyangshuX8_aim_stabilization.sh/file' },
    { name: 'PriyangshuX8_aimbot.sh', img: 'assets/PriyangshuX8_aimbot.jpg', link: 'https://www.mediafire.com/file/qh9m8rh0abx992w/PriyangshuX8_aimbot.sh/file' }
  ];

  scripts.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img class="card-img" src="${s.img}" alt="${s.name}" loading="lazy">
      <h3>${s.name}</h3>
      <a href="${s.link}" target="_blank" class="download-link">DOWNLOAD SCRIPT</a>
    `;
    scriptsGrid.appendChild(card);
  });
})();

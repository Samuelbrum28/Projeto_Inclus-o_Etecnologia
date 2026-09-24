document.addEventListener('DOMContentLoaded', () => {

  /* 1. Modo Alto Contraste */
  const btnContrast = document.getElementById('btn-contrast');

  btnContrast?.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    const isContrast = document.body.classList.contains('high-contrast');
    btnContrast.setAttribute('aria-pressed', isContrast ? 'true' : 'false');
  });

  /* 2. Botões de Aumentar e Diminuir Fonte */
  const btnIncreaseFont = document.getElementById('btn-increase-font');
  const btnDecreaseFont = document.getElementById('btn-decrease-font');
  
  let currentFontScale = 100;

  btnIncreaseFont?.addEventListener('click', () => {
    if (currentFontScale < 135) {
      currentFontScale += 10;
      document.documentElement.style.fontSize = `${currentFontScale}%`;
    }
  });

  btnDecreaseFont?.addEventListener('click', () => {
    if (currentFontScale > 85) {
      currentFontScale -= 10;
      document.documentElement.style.fontSize = `${currentFontScale}%`;
    }
  });

  /* 3. Alternância entre Vídeo e Podcast */
  const tabVideoBtn = document.getElementById('tab-video-btn');
  const tabPodcastBtn = document.getElementById('tab-podcast-btn');
  const panelVideo = document.getElementById('panel-video');
  const panelPodcast = document.getElementById('panel-podcast');

  tabVideoBtn?.addEventListener('click', () => {
    tabVideoBtn.classList.add('active');
    tabVideoBtn.setAttribute('aria-selected', 'true');
    tabPodcastBtn.classList.remove('active');
    tabPodcastBtn.setAttribute('aria-selected', 'false');

    panelVideo.classList.add('active');
    panelPodcast.classList.remove('active');
  });

  tabPodcastBtn?.addEventListener('click', () => {
    tabPodcastBtn.classList.add('active');
    tabPodcastBtn.setAttribute('aria-selected', 'true');
    tabVideoBtn.classList.remove('active');
    tabVideoBtn.setAttribute('aria-selected', 'false');

    panelPodcast.classList.add('active');
    panelVideo.classList.remove('active');
  });

});
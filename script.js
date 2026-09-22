document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. ALTOMATERIALIZAR ALTERNÂNCIA DE ALTO CONTRASSTE
     ========================================================================== */
  const btnContrast = document.getElementById('btn-contrast');

  btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    const isContrast = document.body.classList.contains('high-contrast');
    
    // Atualiza estado de acessibilidade do botão
    btnContrast.setAttribute('aria-pressed', isContrast ? 'true' : 'false');
  });


  /* ==========================================================================
     2. BOTÕES DE AUMENTAR E DIMINUIR FONTE (A+ / A-)
     ========================================================================== */
  const btnIncreaseFont = document.getElementById('btn-increase-font');
  const btnDecreaseFont = document.getElementById('btn-decrease-font');
  
  let currentFontScale = 100; // Porcentagem do tamanho base

  btnIncreaseFont.addEventListener('click', () => {
    if (currentFontScale < 135) { // Limite máximo de segurança
      currentFontScale += 10;
      document.documentElement.style.fontSize = `${currentFontScale}%`;
    }
  });

  btnDecreaseFont.addEventListener('click', () => {
    if (currentFontScale > 85) { // Limite mínimo de segurança
      currentFontScale -= 10;
      document.documentElement.style.fontSize = `${currentFontScale}%`;
    }
  });


  /* ==========================================================================
     3. SISTEMA DE ABAS INTERATIVAS PARA SEPARAR VÍDEO E PODCAST
     ========================================================================== */
  const tabVideoBtn = document.getElementById('tab-video-btn');
  const tabPodcastBtn = document.getElementById('tab-podcast-btn');
  const panelVideo = document.getElementById('panel-video');
  const panelPodcast = document.getElementById('panel-podcast');

  // Função para exibir Vídeo
  tabVideoBtn.addEventListener('click', () => {
    tabVideoBtn.classList.add('active');
    tabVideoBtn.setAttribute('aria-expanded', 'true');
    
    tabPodcastBtn.classList.remove('active');
    tabPodcastBtn.setAttribute('aria-expanded', 'false');

    panelVideo.classList.add('active');
    panelPodcast.classList.remove('active');
  });

  // Função para exibir Podcast
  tabPodcastBtn.addEventListener('click', () => {
    tabPodcastBtn.classList.add('active');
    tabPodcastBtn.setAttribute('aria-expanded', 'true');
    
    tabVideoBtn.classList.remove('active');
    tabVideoBtn.setAttribute('aria-expanded', 'false');

    panelPodcast.classList.add('active');
    panelVideo.classList.remove('active');
  });

});
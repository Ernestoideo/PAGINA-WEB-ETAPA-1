(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const toTop = document.getElementById('toTop');

  // CONSULTA QUE TEMA TIENE POR DEFECTO EL USUARIO
  const saved = localStorage.getItem('theme') || 'dark';
  if(saved === 'light'){ root.classList.add('light'); }
  // CAMBIA EL TEMA A LIGHT, SI YA ESTA EN CLARO PUES LO CAMBIA A OSCURO
  btn.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });

  // Botón para volver arriba (esta abajo a la derecha), SOLO SE MUESTRA SI BAJA MAS DE 400PX
  const onScroll = () => {
    if(window.scrollY > 400){ toTop.style.display = 'block'; }
    else{ toTop.style.display = 'none'; }
  };
  window.addEventListener('scroll', onScroll);
  toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
})();

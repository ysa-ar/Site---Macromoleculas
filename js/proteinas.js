const btnMostrar = document.getElementById('btn-mostrar-mais');
const infoExtra = document.getElementById('info-adicional');

if (btnMostrar && infoExtra) {
  btnMostrar.addEventListener('click', () => {
    const estaVisivel = infoExtra.classList.toggle('visivel');
    btnMostrar.setAttribute('aria-expanded', estaVisivel);
    btnMostrar.textContent = estaVisivel ? 'Ver menos 🔼' : 'Ver mais detalhes 🔽';
  });
}
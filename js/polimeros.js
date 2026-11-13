const btnPol = document.getElementById('btn-expandir-polimeros');
const infoPol = document.getElementById('info-polimeros');

if (btnPol && infoPol) {
  btnPol.addEventListener('click', () => {
    const estaVisivel = infoPol.classList.toggle('visivel');
    btnPol.setAttribute('aria-expanded', estaVisivel);
    btnPol.textContent = estaVisivel ? 'Recolher Impacto' : 'Saber sobre o Impacto Ambiental';
  });
}
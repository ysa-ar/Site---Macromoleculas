const modal = document.getElementById('modal-curiosidade');
const btnAbrir = document.getElementById('abrir-modal');
const btnFechar = document.getElementById('fechar-modal');

if (btnAbrir && modal && btnFechar) {
  btnAbrir.addEventListener('click', () => modal.style.display = 'flex');
  btnFechar.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
}
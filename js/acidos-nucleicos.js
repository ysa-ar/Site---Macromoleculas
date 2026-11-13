const btnAlt = document.getElementById('btn-alternar');
const boxDna = document.getElementById('box-dna');
const boxRna = document.getElementById('box-rna');

if (btnAlt && boxDna && boxRna) {
  btnAlt.addEventListener('click', () => {
    boxDna.classList.toggle('destaque');
    boxRna.classList.toggle('destaque');
    const destaqueAtivo = boxDna.classList.contains('destaque');
    btnAlt.setAttribute('aria-pressed', destaqueAtivo);
    btnAlt.textContent = destaqueAtivo ? 'Remover destaque' : 'Destacar DNA e RNA';
  });
}
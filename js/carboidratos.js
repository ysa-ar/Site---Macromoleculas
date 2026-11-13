function abrirAba(evento, nomeAba) {
  const conteudos = document.querySelectorAll('.conteudo-aba');
  const botoes = document.querySelectorAll('.botao-aba');

  conteudos.forEach(c => c.classList.remove('ativa'));
  botoes.forEach(b => b.classList.remove('ativa'));

  document.getElementById(nomeAba).classList.add('ativa');
  evento.currentTarget.classList.add('ativa');
  botoes.forEach(b => b.setAttribute('aria-selected', 'false'));
  evento.currentTarget.setAttribute('aria-selected', 'true');
}
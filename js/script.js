const botaoTema = document.getElementById('botao-tema');

if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('modo-escuro');
}

if (botaoTema) {
  botaoTema.textContent = document.body.classList.contains('modo-escuro')
    ? 'Modo Claro ☀️'
    : 'Modo Escuro 🌙';

  botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
    const temaEscuro = document.body.classList.contains('modo-escuro');
    localStorage.setItem('tema', temaEscuro ? 'escuro' : 'claro');
    botaoTema.textContent = temaEscuro ? 'Modo Claro ☀️' : 'Modo Escuro 🌙';
  });
}

const botaoMenu = document.getElementById('botao-menu');
const menuNavegacao = document.getElementById('menu-navegacao');
if (botaoMenu && menuNavegacao) {
  botaoMenu.addEventListener('click', () => {
    menuNavegacao.classList.toggle('ativo');
  });
}

const campoBusca = document.getElementById('campo-busca');
const cartoes = document.querySelectorAll('.cartao-tema');
const botoesFiltro = document.querySelectorAll('.botao-filtro');
const avisoSemResultados = document.getElementById('sem-resultados');
let categoriaAtual = 'todos';

function atualizarCartoes() {
  const termo = campoBusca ? campoBusca.value.toLowerCase().trim() : '';
  let quantidadeVisivel = 0;

  cartoes.forEach((cartao) => {
    const combinaCategoria = categoriaAtual === 'todos'
      || cartao.getAttribute('data-categoria') === categoriaAtual;
    const combinaBusca = cartao.textContent.toLowerCase().includes(termo);
    const mostrarCartao = combinaCategoria && combinaBusca;

    cartao.style.display = mostrarCartao ? 'flex' : 'none';
    if (mostrarCartao) quantidadeVisivel++;
  });

  if (avisoSemResultados) {
    avisoSemResultados.hidden = quantidadeVisivel > 0;
  }
}

if (campoBusca) {
  campoBusca.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    cartoes.forEach(cartao => {
      const visivel = cartao.textContent.toLowerCase().includes(termo);
      cartao.style.display = visivel ? 'flex' : 'none';
    });
  });
}

botoesFiltro.forEach((botao) => {
  botao.addEventListener('click', () => {
    botoesFiltro.forEach((outroBotao) => outroBotao.classList.remove('ativo'));
    botao.classList.add('ativo');
    categoriaAtual = botao.getAttribute('data-categoria');
    atualizarCartoes();
  });
});

const dadosCarrossel = [
  {
    imagem: 'img/carboidratos.jpeg',
    legenda: 'Pães, massas e frutas são fontes de carboidratos.',
    textoAlternativo: 'Alimentos ricos em carboidratos'
  },
  {
    imagem: 'img/lipidios.jpeg',
    legenda: 'Abacate, castanhas, azeite e peixes são fontes de lipídios.',
    textoAlternativo: 'Alimentos que contêm lipídios'
  },
  {
    imagem: 'img/proteinas-cotidiano.jpeg',
    legenda: 'Carnes, peixes, ovos e leguminosas ajudam a fornecer proteínas.',
    textoAlternativo: 'Alimentos ricos em proteínas'
  }
];

let indiceCarrossel = 0;
const elementoImagem = document.getElementById('imagem-carrossel');
const elementoLegenda = document.getElementById('legenda-carrossel');
const botaoAnterior = document.getElementById('carrossel-anterior');
const botaoProximo = document.getElementById('carrossel-proximo');

function atualizarCarrossel() {
  if (elementoImagem && elementoLegenda) {
    elementoImagem.src = dadosCarrossel[indiceCarrossel].imagem;
    elementoImagem.alt = dadosCarrossel[indiceCarrossel].textoAlternativo;
    elementoLegenda.textContent = dadosCarrossel[indiceCarrossel].legenda;
  }
}

if (botaoAnterior && botaoProximo) {
  botaoAnterior.addEventListener('click', () => {
    indiceCarrossel = (indiceCarrossel - 1 + dadosCarrossel.length) % dadosCarrossel.length;
    atualizarCarrossel();
  });

  botaoProximo.addEventListener('click', () => {
    indiceCarrossel = (indiceCarrossel + 1) % dadosCarrossel.length;
    atualizarCarrossel();
  });
}

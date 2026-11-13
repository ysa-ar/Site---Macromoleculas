const btnEnviarQuiz = document.getElementById('btn-enviar-quiz');
const resultadoQuiz = document.getElementById('resultado-quiz');

if (btnEnviarQuiz) {
  btnEnviarQuiz.addEventListener('click', () => {
    let pontos = 0;
    const resp1 = document.querySelector('input[name="p1"]:checked');
    const resp2 = document.querySelector('input[name="p2"]:checked');
    const resp3 = document.querySelector('input[name="p3"]:checked');
    const resp4 = document.querySelector('input[name="p4"]:checked');
    const resp5 = document.querySelector('input[name="p5"]:checked');

    if (!resp1 || !resp2 || !resp3 || !resp4 || !resp5) {
      resultadoQuiz.style.backgroundColor = 'rgba(234, 179, 8, 0.2)';
      resultadoQuiz.style.color = '#ca8a04';
      resultadoQuiz.textContent = 'Por favor, responda a todas as perguntas antes de enviar!';
      return;
    }

    if (resp1.value === 'a') pontos++;
    if (resp2.value === 'a') pontos++;
    if (resp3.value === 'a') pontos++;
    if (resp4.value === 'b') pontos++;
    if (resp5.value === 'a') pontos++;

    if (pontos === 5) {
      resultadoQuiz.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
      resultadoQuiz.style.color = '#16a34a';
      resultadoQuiz.textContent = `🎉 Parabéns! Você acertou todas as ${pontos} questões!`;
    } else {
      resultadoQuiz.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
      resultadoQuiz.style.color = '#2563eb';
      resultadoQuiz.textContent = `Você acertou ${pontos} de 5 questões. Continue praticando!`;
    }
  });
}
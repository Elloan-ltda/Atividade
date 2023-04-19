// Gera jogada do computador
function computerPlay() {
  const choices = ['pedra', 'papel', 'tesoura'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Compara jogadas e retorna resultado
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Empate!";
  } else if (playerSelection === "pedra" && computerSelection === "tesoura" ||
             playerSelection === "papel" && computerSelection === "pedra" ||
             playerSelection === "tesoura" && computerSelection === "papel") {
    return "Você venceu!";
  } else {
    return "Você perdeu!";
  }
}

// Captura escolha do jogador e inicia jogo
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);
  });
});

// Exibe resultado na tela
function displayResult(result) {
  const resultDiv = document.querySelector('#result');
  resultDiv.textContent = result;
}

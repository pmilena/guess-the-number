let listaSorteados = [];
let numeroLimite = 100;
let numero = numeroSecreto();
console.log(numero);

function numeroSecreto() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let tamanhoLista = listaSorteados.length;

  if (tamanhoLista == numeroLimite) {
    listaSorteados = [];
  }
  if (listaSorteados.includes(numeroEscolhido)) {
    return numeroSecreto();
  } else {
    listaSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function exibirNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  // responsiveVoice.speak(texto, "US English Female", { rate: 1.2 });
}

function msgInicial() {
  exibirNaTela("h1", "Guess the number");
  exibirNaTela("p", `Choose a number between 1 and ${numeroLimite}`);
}
msgInicial();

function limparCampo() {
  let chute = document.querySelector("input");
  chute.value = "";
}

let turns = 1;
function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numero) {
    let palavraTentativa = turns == 1 ? "attempt" : "attempts";
    let mensagem = `You discovered the secret number with ${turns} ${palavraTentativa}`;
    exibirNaTela("h1", "Congratulations! You guessed it right!");
    exibirNaTela("p", mensagem);
    document.querySelector("button").setAttribute("disabled", true);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numero) {
      exibirNaTela("p", `The secret number is less than ${chute}`);
    } else {
      exibirNaTela("p", `The secret number is greater than ${chute}`);
    }
    limparCampo();
    turns++;
  }
}

function reiniciarJogo() {
  numero = numeroSecreto();
  console.log(numero);
  document.querySelector("button").removeAttribute("disabled");
  document.getElementById("reiniciar").setAttribute("disabled", true);
  limparCampo();
  msgInicial();
  turns = 1;
}

//my option using while loop
// let turns = 1;
// function verificarChute() {
//   let input = document.querySelector("input").value;

//   while (input != numero) {
//     if (input == numero) {
//       break;
//     } else if (input > numero) {
//       exibirNaTela("p", `O número secreto é menor que ${input}`);
//     } else {
//       exibirNaTela("p", `O número secreto é maior que ${input}`);
//     }
//     return turns++;
//   }
//   let palavraTentativa = turns == 1 ? "tentativa" : "tentativas";
//   let mensagem = `Você descobriu o número secreto com ${turns} ${palavraTentativa}`;
//   exibirNaTela("h1", "Parabéns! Você acertou!");
//   exibirNaTela("p", mensagem);
// }

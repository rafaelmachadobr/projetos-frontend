let [computador_pontuacao, usuario_pontuacao] = [0, 0];
let resultado_ref = document.getElementById("resultado");
let escolhas_objeto = {
  pedra: {
    pedra: "empate",
    tesoura: "vitoria",
    papel: "derrota",
  },
  tesoura: {
    pedra: "derrota",
    tesoura: "empate",
    papel: "vitoria",
  },
  papel: {
    pedra: "vitoria",
    tesoura: "derrota",
    papel: "empate",
  },
};

function verificar(entrada) {
  var escolhas = ["pedra", "tesoura", "papel"];
  var numero = Math.floor(Math.random() * 3);

  document.getElementById(
    "computador_escolha"
  ).innerHTML = `Computador escolheu <span> ${escolhas[
    numero
  ].toUpperCase()} </span>`;
  document.getElementById(
    "usuario_escolha"
  ).innerHTML = `Você escolheu <span> ${entrada.toUpperCase()} </span>`;

  let computador_escolha = escolhas[numero];

  switch (escolhas_objeto[entrada][computador_escolha]) {
    case "vitoria":
      resultado_ref.style.cssText = "background-color: #cefdce; color: #689f38";
      resultado_ref.innerHTML = "VOCÊ VENCEU";
      usuario_pontuacao++;
      break;
    case "derrota":
      resultado_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f"; 
      resultado_ref.innerHTML = "VOCÊ PERDEU";
      computador_pontuacao++;
      break;
    default:
      resultado_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
      resultado_ref.innerHTML = "EMPATOU";
      break;
  }

  document.getElementById("computador_pontuacao").innerHTML =
    computador_pontuacao;
  document.getElementById("usuario_pontuacao").innerHTML = usuario_pontuacao;
}

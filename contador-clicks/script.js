const contagem = document.querySelector(".contagem");
const botoes = document.querySelector("#botoes");

botoes.addEventListener("click", contador);

let valor = 0;
function contador(e) {
  const btn = e.target.id;
  if (btn === "aumentar") {
    valor++;
  } else if (btn === "diminuir") {
    if (valor <= 0) {
      alert("A contagem não pode ser menor do que zero!");
    } else {
      valor--;
    }
  } else {
    valor = 0;
  }

  contagem.textContent = valor;
}

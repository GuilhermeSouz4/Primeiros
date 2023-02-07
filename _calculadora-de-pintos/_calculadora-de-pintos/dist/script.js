let box = document.getElementById("box");
box.addEventListener("click", startProgram);
// Pegar a box e fazer o pc notar que ela é clickavel

function startProgram() {
  let cotaçãoDePintos = prompt("Quanto vale cada pinto hoje?");
  let qantDePintoNasc = prompt("Quantos pintos nasceram hoje na fazenda?");
  let name = prompt("Digite seu nome: ");
  let valorDosPintos = cotaçãoDePintos * qantDePintoNasc;

  valorDosPintos = valorDosPintos.toFixed(2);

  alert(
    "Olá, " +
      name +
      " o valor dos pintos hoje é de $" +
      valorDosPintos +
      " Reais."
  );
}
// Função pra fazer o calculo e o programa funcionarem.
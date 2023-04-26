var valor1 = "";
var operador = "";
var valor2 = "";
function adicionarNumero(numero) {
  if (operador == "") {
    valor1 += numero;
    document.getElementById("resultado").value = valor1;
  } else {
    valor2 += numero;
    document.getElementById("resultado").value = valor2;
  }
}
function operacao(op) {
  operador = op;
}
function calcular() {
  var resultado;
  switch (operador) {
    case "+":
      resultado = parseFloat(valor1) + parseFloat(valor2);
      break;
    case "-":
      resultado = parseFloat(valor1) - parseFloat(valor2);
      break;
    case "*":
      resultado = parseFloat(valor1) * parseFloat(valor2);
      break;
    case "/":
      resultado = parseFloat(valor1) / parseFloat(valor2);
      break;
  }
  document.getElementById("resultado").value = resultado;
  valor1 = resultado;
  valor2 = "";
  operador = "";
}
function limpar() {
  valor1 = "";
  operador = "";
  valor2 = "";
  document.getElementById("resultado").value = "0";
}

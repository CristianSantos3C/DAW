//Variables
var opeA;
var opeB;
var operacion;
function init() {
  //definimos variables de resultados
  var resultado = document.getElementById("resultado");
  //Definimos las variables a utilizar para los numeros
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  var igual = document.getElementById("igual");
  //Variables de operadores
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");
  var porcent = document.getElementById("porcent");
  var inversa = document.getElementById("inversa");
  var raizc = document.getElementById("raizc");
  var cuadra = document.getElementById("cuadro");
  //Variables de borradores
  var borrar = document.getElementById("borrador");

  //Procesos de impresión de números
  uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
  }
  dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
  }
  tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
  }
  cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
  }
  cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
  }
  seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
  }
  siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
  }
  ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
  }
  nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
  }
  cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
  }

  borrador.onclick = function (e) {
    resetear();
  }

  suma.onclick = function (e) {
    opeA = resultado.textContent;
    operacion = "+";
    limpiar();
  }
  resta.onclick = function (e) {
    opeA = resultado.textContent;
    operacion = "-";
    limpiar();
  }
  multiplicacion.onclick = function (e) {
    opeA = resultado.textContent;
    operacion = "*";
    limpiar();
  }
  division.onclick = function (e) {
    opeA = resultado.textContent;
    operacion = "/";
    limpiar();
  }
  porcent.onclick = function (e) {
    opeA = resultado.textContent;
    operacion = "%";
    limpiar();
  }
  raizc.onclick = function (e) {
    opeA = resultado.textContent;
    operacion = "sqrt";
    limpiar();
  }
  inversa.onclick = function(e){
    opeA = resultado.textContent;
    operacion = "1/x";
    limpiar();
  }
  cuadra.onclick = function(e){
    opeA = resultado.textContent;
    operacion = "x2";
    limpiar();
  }

  igual.onclick = function (e) {
    opeB = resultado.textContent;
    resolver();
  }

  
}
function limpiar() {
  resultado.textContent = "";
}

function resetear() {
  resultado.textContent = "";
  opeA = 0;
  opeB = 0;
  operacion = "";
}

function resolver() {
  var res = 0;

  switch (operacion) {

    case "+":
      res = parseFloat(opeA) + parseFloat(opeB);
      break;

    case "-":
      res = parseFloat(opeA) - parseFloat(opeB);
      break;

    case "*":
      res = parseFloat(opeA) * parseFloat(opeB);
      break;

    case "/":
      res = parseFloat(opeA) / parseFloat(opeB);
      break;
    case "%":
      res = parseFloat(opeA) % parseFloat(opeB);
      break;
    case "sqrt":
      res = Math.sqrt(opeA);
      break;
    case "1/x":
      res = 1/ parseFloat(opeA); 
      break;
    case "x2":
      res = parseFloat(opeA) * parseFloat(opeA);
      break; 
  }
  resetear();
  resultado.textContent = res;
}

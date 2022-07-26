//variables principales
var opeA;
var opeB;
var operacion;
function mostrar (){
    if(opeA ==0){
        opeA = parseFloat(document.getElementById("resultado").value);
    }
}
function init(){
    //var
    //var resultado = document.getElementById('resultado');
    //Definimos las variables a utilizar para los numeros
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var igua = document.getElementById('igual')
    //Variables de operadores
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multipli = document.getElementById('multipli');
    var dividir = document.getElementById('dividir');

    //Procesos de impresión de números
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1"; 
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"; 
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3"; 
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4"; 
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5"; 
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6"; 
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7"; 
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8"; 
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9"; 
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0"; 
    }

    suma.onclick = function(e){
        opeA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        opeA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multipli.onclick = function(e){
        opeA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    dividir.onclick = function(e){
        opeA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igua.onclick = function(e){
        opeB = resultado.textContent;
        resolver();
    } 
}
function resolver(){
    var resol = 0;
    switch(operacion){
        case "+":
            resol = parseFloat(opeA) + parseFloat(opeB);
            break;
    }
}


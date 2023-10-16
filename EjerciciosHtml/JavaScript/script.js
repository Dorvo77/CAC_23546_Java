console.log("Hola mundo");
var estado = 4>2 && 5>10;
console.log("El estado es:",estado);
/*
let num1 = prompt("Ingrese n1:");
let num2 = prompt("Ingrse n2:");
num1 = parseInt(num1);
num2 = parseInt(num2);
console.log("El estado es:",num1);
console.log("El estado es:",num2);
estado = num1 > num2;
console.log("El estado es:",estado);

var boleano = true
var numerico = 22
var numerico_flotante = 13.56
var texto = "mi texto"
var fecha = new Date()

document.write("<br>El tipo de boleano es: " + typeof boleano)
document.write("<br>El tipo de numerico es: " + typeof numerico)
document.write("<br>El tipo de numerico_flotante es: " + typeof numerico_flotante)
document.write("<br>El tipo de texto es: " + typeof texto)
document.write("<br>El tipo de fecha es: " + typeof fecha)
*/
let vegetales = ['Repollo', 'Coliflor', 'Zapallo', 'Zanahoria']
console.log(vegetales);
console.log(vegetales[0]);
console.log(vegetales.push('Pera')); // agrega un elemento
console.log(vegetales);

vegetales.forEach(function(elemento, indice, array) {

    console.log(elemento, indice);
    
    });



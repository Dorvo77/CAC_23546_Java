



const ejercicio5 = document
  .getElementById("bot5")
  .addEventListener('click', () => {
    let num1 = parseInt(prompt("Ingrese el prim num"));
    let num2 = parseInt(prompt("Ingrese el seg num"));
    let opcion = prompt(`Ingrese opcion:
    S-suma
    R-resta
    M-multiplica
    D-divi
    `);
    console.log(num1);
    console.log(num2);
    console.log(opcion);
    switch (opcion) {
      case "s","S":
        let suma = num1+num2;
        alert(`La suma es: ${suma}`);
        break;
      case "R","s":
        let resta = num1 - num2;
        alert(`La suma es: ${resta}`);
        break;
    }
  });

const ejercicio8 = document
.getElementById("bot8")
.addEventListener('click', () => {
    let arr =[];
    do {
        let numero = parseInt(prompt("Ingrese numeros dist. cero"));
        arr.push(numero);
    } while (numero !=0);
    alert(`el primer numero: ${arr[0]}`);
    alert(`el array ingresado: ${arr}`);
});


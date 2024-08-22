// let resultado = 20 >= 10;
// console.log(resultado); //true

// let dist = 10 != 5;
// console.log("Dist: "+dist);

// let compara = 20 === 56;
// console.log(compara); //false


// let texto = prompt("Ingresa el texto correcto: ");
// if (texto === "Javascript") {
//     console.log("Correcto");
// }else{
//     console.log("Error");
// }


// let numero = prompt("Por favor, ingresa un número del 1 al 10:");

// numero = parseInt(numero);

// if (numero >= 1 && numero <= 10) {
//     console.log("¡Número válido!");
// } else {
//     console.log("Error");
// }

// let opciones = prompt(`
    
// Elija una opcion:
// 1: Libros
// 2: Peliculas
// 3: Juegos
    
//     `);

// switch(opciones) {
//     case "1":
//         console.log("El pricipito");
//         break;
//     case "2": 
//         console.log("Matrix")
//         break;
//     case "3":
//         console.log("COD")
//         break;
//     default:
//         console.log("Opción no válida");
// }


// let contador = 1;
// while(contador <= 10){
// console.log(contador);
// contador++;
// }



// let numero1 = prompt("Introduce el primer número:");

// let numero2 = prompt("Introduce el segundo número:");

// numero1 = Number(numero1);
// numero2 = Number(numero2);

// if (numero1 > numero2) {
//     console.log("El primer número " + numero1 + " es mayor que el segundo número " + numero2 + ".");
// } else if (numero1 < numero2) {
//     console.log("El primer número " + numero1 + " es menor que el segundo número " + numero2 + ".");
// } else {
//     console.log("Ambos números son iguales.");
// }

let numeroMaquina = Math.floor(Math.random()*(10 - 1)+1);
console.log(numeroMaquina);

let numeroUsuario = parseInt (prompt("Adivine un numero del 1 al 10"));

let vidas = 3;
while (numeroMaquina !== numeroUsuario && vidas > 1) {
    vidas --;
    numeroUsuario = parseInt (prompt ("Vuelve a intentarlo, tus vidas son: " + vidas));
}

if (numeroMaquina === numeroUsuario){
    console.log("Ganaste");
}else {
    console.log("Perdiste")
    console.log("El numero secreto era: " + numeroMaquina);
}
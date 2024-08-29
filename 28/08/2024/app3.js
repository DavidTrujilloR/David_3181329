let numero1 = parseFloat(prompt("Dame un numero"));
let numero2 = parseFloat(prompt ("Dame otro numero"));

let suma = 0;

let numeros = [numero1, numero2];
for(let i = 0; i<numeros.length;i++){
    suma += numeros[i];
}

alert("La suma de los dos numeros es: " + suma);


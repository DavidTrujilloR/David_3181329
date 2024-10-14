//Funcion declarativa
// function numeroAleatorio(min,max){
//     return Math.floor(Math.random()*(max-min)+min);
//     //El floor es para que no de punto decimal
// }
// console.log(numeroAleatorio(5,156));

//Funcion expresada
// let numero = function numeroAleatorio(min,max){
//     return Math.floor(Math.random()*(max-min)+min);
//     //El floor es para que no de punto decimal
// }
// console.log(numero(5,156));

//Funcion flecha
 let miNumeroFlecha = (max)=>{
    return Math.floor(Math.random()*(max+1)+1);
 }
 console.log(miNumeroFlecha(10));

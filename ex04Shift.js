// Aula 05 - 11/06/2021
// Array - Shift

let cores = ["Azul", "Branco", "Vermelho", "Verde"];
console.log(cores);
console.log(cores.length);
console.log("*******************shift************************");

// Remove o primeiro elemento do array
cores.shift();

console.log(cores);
console.log(cores.length);

console.log("*******************unshift************************");
//Adiciona novos elementos no inicio do Array
cores.unshift("Violeta", "Amarelo");

console.log(cores);
console.log(cores.length);
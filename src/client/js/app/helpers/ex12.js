// jshint esversion:6

let numeros = [32,65,48,2,87,56,3,9,50,2,3,56,32];

let dobro   = numeros.map(n => n * 2);
let metade  = numeros.map(n => n / 2);
let raiz    = numeros.map(n => Math.sqrt(n));

console.log(dobro);
console.log(metade);
console.log(raiz);

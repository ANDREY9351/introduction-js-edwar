// string o cadena de texto 
const sensor = 'temperatura';
const sensor2 = 'PH';

console.log(sensor);
console.log(sensor2);
// Estos dos formas NO son tan comunes
const sensor3 = String('Presion');
const sensor4 = new String('Humedad');

console.log(sensor3);
console.log(sensor4);

// Para saber el tipo de dato de una variable 
console.log(typeof sensor2);

let product = 'Televisor de 32"';
let product2 = 'televisor de 58"';
console.log(product);
console.log(product2);

// Metododos con String
console.log(product2.length);

let nombreCompleto = 'Franyin Andrey Parra Giraldo';
console.log(nombreCompleto.length)
// Saber si una cadena de texto existe en una fase
// indexofnos muestra la psoion en la que se encuentra la palabra buscada (cadena de texto)
// si la cadena No existe muestra un resultado menor que 0 (normalmente-1)
let phrase = 'aqui vamos a buscar la palabra SENA';
console.log(phrase.indexOf('senha'));
// hacer lo mismo de una forma mas moderna, el resultado en un true o false 
let phrase2 = 'aqui vamos a buscar la palabra SENA';
console.log(phrase.includes('SENA'));

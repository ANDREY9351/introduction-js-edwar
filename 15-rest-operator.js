// Franyin Andrey Parra Giraldo
// Lo que se busca es NO NO NO modificar el arreglo original.

const month = ['December', 'November', 'March'];
console.table(month);

// Se crea un nuevo arreglo y lo unimos con otro.
const newArray = [...month, 'January'];

// El nuevo arreglo se puede agregar al final y al inicio 
const newArray2 = ['January', ...month];

console.table(newArray);
console.table(newArray2);

month.push;
month.unshift('Hello');
console.table(month);


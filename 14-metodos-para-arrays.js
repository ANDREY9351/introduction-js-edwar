// Franyin Andrey Parra Giraldo
const numbers = [0, 12, 8, 9, 5, 8, 71, 120, 500];

// Agregar elementos a mi arreglo, pero con este metodo se requiere conocer la longitud del arreglo
// numbersLenght = numbers.length
// console.log(numbersLenght);

// numbers [numbersLenght] = 100;

// console.log(numbers);

// con el metodo de push se agregan elementos al final del arregla
// numbers.push(700, 800);

// console.log(numbers);
// console.table(numbers);

// Metodo unshift para agregar elementos al inicio de un arreglo
numbers.unshift(-3, -2, -1 );

// Método para eliminar el ultimo elemento de mi arreglo
// numbers.pop();

// Método shift para eliminar el primer elemneto de mi arreglo 
// console.shift();

// Método splice elimina todos los elementos a apartir del indice asignado.
numbers.splice(2);
console.table(numbers);


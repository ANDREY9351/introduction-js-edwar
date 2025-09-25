// Diferencias entre metodos y funciones 
const num1 = 10;
const num2 = '20';

console.log(num1);
console.log(num2);
console.log( typeof num1);
console.log( typeof num2);

console.log(parseInt(num2));
console.log(typeof num1);
console.log(typeof num2);

// Parsear es compertir un tipo de variable a otro tipo 
console.log(num1);
console.log(parseInt(num2));

// Este metodo convierte de numero a string
console.log(num1.toString());
console.log(num1);

// =========================================================
// Function: Bloque de codigo independiente que realiza una tarea 
function greet(){
    console.log('Hello');
};

greet();

// =====================================================================================

const person = {
    userName: "Franyin",
    greet: function(){
        console.log(`Hello I'm ${this.userName}`);
    }
}

// Metodo es una funcion asocicada a un objeto (se llama a travez de un punto)
person.greet(); // Metodo por que pertenecce a person
console.log(typeof person);

// Una funcion existe por si sola por el contrario
// Un metodo es una funcion dentro de un objeto 
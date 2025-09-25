// Funciones parametros y argumentos 

// Los parametros se pasan en los parentesis de la funcion 
function add(num1, num2){
    return console.log(num1 + num2);
};

// add(5, 15);// Estos valores que se envian a la funcion se llaman argumentos 
add(7, 85);
add(3, 20);
add(7, 7);
add(5, 5);

// ================================================================
// Ejercicio con la expresion de una funcion 
const add1 = (function(num3, num4){
    console.log(num3, num4);
})
add1();

add1(7, 85);
add1(3, 20);
add1(7, 7);
add1(5, 5);

// ======================================================================
// Ejemplo cuando no se colocan argumentos, se coloca por defecto los valores en los paremetros 
function add2(num7 = 35, num8 = 10){
    return console.log(num7 - num8);
}
add2();

// Funcion que retorna un  valor 
function add4(num9, num10){
    return num9 * num10
};

const result = add4(4, 5)
console.log(result);

// 
let total = 0;
// Funcion para sumar productos 
function addShoppingCart(price){
    return total += price;
}
// Funcion para agregar el impuesto a pagar 
function calculatax(total){
    return 1.19 * total;
};

total = addShoppingCart(800);
total = addShoppingCart(500);
total = addShoppingCart(200);
total = addShoppingCart(900);

console.log(`la suma de los product es: $(total)`);

const totalTopay = calculatax(total);

console.log(`La suma de los productos mas el impuestos son: $(totalTopay) `);
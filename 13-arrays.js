// Franyin Andrey Parra Giraldo 
// Arrays JS 

const numbers = [10, 20, 30, 100];

console.log(numbers);

// Otra forma de visualizaion en tabla
console.log(numbers);

// Con el constructor metodo que inicializa metodos y inicializa instanciacion con "new"
//arreglo con el constructor
const months = new Array('Mayo', 'january', 'july', 'june');
console.table(months);

const myArray = ['Hello', 42, true, false, null,{myName: "Franyin", myJob: "Student"}, [3172293]];
myArray.forEach(function(miArray){
    console.log(miArray);
})


// consultar un elemento de un arreglo 
console.log(numbers[2]);
console.log(myArray[5]);

// Metodo para conocer la longitud de un arreglo 
console.log("Franyin tu arreglo tiene: " + numbers.length + "elementos" );

// Un iterador con forEach
const numbers2 = [10, 20, 30, 80, 100, 7, 8];
numbers2.forEach(function(numbers){
    console.log(numbers);
})

months.forEach(function(month){
    console.log(month);
})

myArray.forEach(function(element){
    console.log(element);
})



// Franyin Andrey Parra Giraldo
// Desestructuracion de objetos 

const product = {
    productName : "sensor de humedad",
    price : 300,
    available : true,
}  

// Aqui un ejempo de desestructuracion de objetos 
const productPrice = product.price;
// const productName = product.productName;


console.log(productPrice);
console.log(product.productName);

// Para que sirve el Destructuring? sirve para extraer 
const{price, available, productName} = product;

console.log(price, available);

// Franyin Andrey Parra Giraldo
// cuando se unen dos objetos lo ideal es no modificarse ninguno de los dos objetos

const product = {
  productnName: 'Sensor de humedad',
  price: 300,
  available: true,
};

Object.freeze(product);

// Objeto que almacena medidad
const measurements = {
  weight: '1 kg',
  measurement: '10 kg',
};

// Rest operator, consta de (...)

const newProduct = { ...product, ...measurements };

console.log(product);

console.log(newProduct);

// Franyin Andrey Parra Giraldo
// Aqui nosotros creamos un objeto

const motorbike = {
  price: '12000',
  brand: 'BMW',
  year: '2026',
};

Object.freeze(motorbike);

let newProduct1 = {
  height: '1.20',
  color: 'Red',
};

console.log(motorbike);

console.log(newProduct);

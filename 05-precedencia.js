// FRANYIN ANDREY PARRA GIRALDO Precedencia

// la precedencia sirve para definir en que orden se ejecutan las operaciones aritmeticas,
// si queremos terner control sobre el orden en que se ejecutan debemos usar Parentesis
// si no usamos el lenguje usara la "Tabla de precedencia"

// ejemplo
let result;

result = 20 + 30 * 2; //Resultado con la prcedencia 80
result = 40 / 2 + 30 - 20 * 2; // resultado con precedencia: 10     

result = 40 / 2 + (30 - 20) * 2; // resultado con precedencia: 40 

result = 12**2 + 100 / 4 - 10 * 4;

// primero el exponente: 144 / 12 x 12
// despues 100/4 es 25 
// despues multiplicacion da: - 40
// 144 + 25 - 40 = 129

console.log(result);

// Definiremos los tipos de datos primitivos en Js.
// El typeof nos ayuda a ver el tipo de datos como en type() en python.

let nombre = 'Jesus'; // string.
console.log( typeof nombre );

nombre = 'David'; // En Js cuando de define una variable, ya no es necesaria inicializar de nuevo con let, para cambiar su valor.
console.log( nombre );

let edad = 31; // number.
console.log( typeof edad );

let peso = 70.1; // Sin importar que sea decimal, para js es de tipo number.
console.log( typeof peso );

let datoNull = null; // Dato Null.
console.log( typeof datoNull);

let indefinido; // Dato sin inicializacion undefined.
console.log( typeof indefinido );

let esReal = true; // Dato boolean.
console.log( typeof esReal );

let symbol1 = Symbol(); // Los valores simbol son variables de valor unico, sin importar si tiene el mismo tipo de dato.
let symbol2 = Symbol();

console.log( typeof symbol1 );

console.log( symbol1 === symbol2 ); // Aqui estamos comparando los dos datos symbol para validar si son iguales. Si son iguales dara true de lo contrario false.
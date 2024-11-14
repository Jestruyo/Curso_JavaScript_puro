// Vamos a enfatizar las asignaciones por valor y por referencia.


//Asignacion por valor.
let num1 = 10;
let num2 = num1;
num2 = 7; //Cambio el valor de num1, y se vera afectado en consola.
console.log({num1,num2});

//Asignacion por referencia.
let Jesus = {nombre:"Jesus"};
let yurleydis = {...Jesus}; //Los 3 ... Aqui se les conoce como el operador express, y sirve para desasociar una referencia de un objeto.
yurleydis.nombre = "Yurleydis"; // Ahora la persona yurleydis si tendra el nombre de yurleydis.
console.log({Jesus,yurleydis});

//Funcion para cambiar nombre por referencia.
const cambiarNombre = (persona) => {
    persona.nombre = "Ety";
    return persona
};
//Llamado
let sarah = {nombre:"Sarah"};
let ety   = sarah;
ety = cambiarNombre({...sarah}); //Los 3 ... Aqui se les conoce como el operador express, y sirve para desasociar una referencia de un objeto.
console.log({ety});

// Resumen
// Asignación por valor: Se usa con tipos primitivos (números, cadenas, booleanos, etc.). Se crea una copia del valor.

// Asignación por referencia: Se usa con objetos y arreglos. Ambas variables apuntan al mismo lugar en memoria, por lo que los cambios afectan a ambas.

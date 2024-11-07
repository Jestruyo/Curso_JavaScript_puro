// Vamos a enfatizar las asignaciones por valor y por referencia.


//Asignacion por valor.
let num1 = 10;
let num2 = 5;
num1 = 7; //Cambio el valor de num1, y se vera afectado en consola.
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

// En resumen, la diferencia clave es que cuando pasas un valor primitivo, se crea una copia dentro de la función
// y los cambios no afectan al valor original fuera de la función. Cuando pasas un objeto, estás pasando una referencia,
// y los cambios dentro de la función afectan al objeto original fuera de la función. Esto es lo que se entiende por
// "pasar por valor" y "pasar por referencia" en JavaScript.

// Definiciones de arreglos.

// En Js los arreglos pueden contener elementos de diferentes tipos de datos, a diferencia de otros lenguajes.

// Forma 1 de hacer un arreglo. Aqui se define la dimencion de este arreglo.
// const arr1 = Array(10);
// console.log( arr1 );

// Forma 2 de hacer un arreglo. Aqui se deja como dimencion abierta.
// const arr2 = [];
// console.log( arr2 );

let arreglo_nombres = ["Jesus","Sarah","Yurle","Ety"]
console.log({arreglo_nombres})

// Para acceder a una posicion especifica del arreglo se hace de la siguiente manera.
console.log("Posicion dos del arreglo: ", arreglo_nombres[1] )

// Arreglo de varias cosas
let cosas = [123,"Juego", true, 3*5, ["Perro", "Gato", "Gayo"]]
console.log("Elemento 3 del sub arreglo interno: ",cosas[4][2])

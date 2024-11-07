// Ahora analicemos los metodos a los que tienen acceso los arreglos.

let carros = ["Chevrolet","Kia","Mazda","Honda"]
console.log( "Largo del arreglo: ",carros.length ) // Length nos da la longitud de una arreglo.

let primer_elemento = carros[2 - 2]; // Estoy accediendo a un indice con una operacion matematica.
let ultimo_elemento = carros[carros.length -1];
console.log({primer_elemento,ultimo_elemento})

// forEach nos permite ejecutar una accion por cada elemento almacenado dentro de un arreglo.
carros.forEach((elemento,i,carros) => {
    console.log({elemento,i,carros})
});

// push nos permite agregar un nuevo elemento a nuestro arreglo.
let nueva_logitud = carros.push( "Dazia" );
console.log( {nueva_logitud} )
console.log( carros ) // Ahora el arreglo tiene el nuevo elemento ingresado.

// Unshift nos permite agregar un elemento al inicio de un array.
nueva_logitud = carros.unshift("Audi");
console.log({nueva_logitud, carros})

// Pop ayuda a eliminar el ultimo elemento de un array y retorna el elemento eliminado.
let elemento_eliminado = carros.pop(); // Este metodo no resive parametros.
console.log({elemento_eliminado, carros})

// Si necesitamos eliminar un elemento especifico podemos utilizar split, pasandole la pasiciones indices a eliminar.
// El retorna una nueva lista de los elementos eliminados.
let posicion = 1;
console.log(carros); // Mostramos el array como se encuentra previamente.
let nuevo_arrar_de_eliminados = carros.splice(posicion, 2);
console.log({nuevo_arrar_de_eliminados});

// Si queremos saber el index de un elemento de un array, necesitamos utilizar indexof.
let index_de_elemento = carros.indexOf("Mazda");
console.log({index_de_elemento});
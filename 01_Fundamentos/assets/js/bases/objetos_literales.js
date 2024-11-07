// En Js a los muy conocidos en python como diccionarios, se les llama objetos literales con pares de varaibles.

let persona = {

    nombre: "Jesus David",
    apellido: "Trujillo Teheran",
    edad: 31,
    nacionalidad: "Colombiano",
    gustos: {
        comida: "Arroz chino",
        deporte: "Futbol"
    },
    ropa: ["Camisas","Pantalones","Goras","Sueteres"],
    joven: true
};

// Impresion de la persona.
console.log(persona);

// Si quiero acceder a alguna propiedad especifica lo hago por el nombre.
let nombre = persona.nombre;
console.log("Nombre de la persona: ",nombre);

// Tambien se puede hacer de la siguiente manera
let apellido = persona["apellido"];
console.log("Apellido de la persona: ",apellido);

// Para saber la cantidad de trajes o ropa que tiene la persona, se puede hacer esto.
let cantidad_de_ropa = persona.ropa.length;
console.log("Cantidad de ropa: ", cantidad_de_ropa);

//Si quiero saber algo en particular de este personaje, puedo hacer lo siguiente.
const Es_joven = "joven";
let rango_de_persona = persona[Es_joven]; //Le puedo pasar una variables especifica que quiera llamar.
console.log("¿Es una persona Joven? ",rango_de_persona);

// Si quiero eliminar alguna de las propiedades de la persona, entoces debo hacer lo siguiente.
delete persona.nacionalidad;
console.log(persona);

// Si quiero agregar alguna propiedad a mi Objeto literal puedo hacer esto.
persona.color = "Moreno";

// Si quiero convertir mi Objeto literal a un conjuto de listas puedo hacer lo siguiente.
const entriesPares = Object.entries( persona );
console.log({entriesPares});



// Si quiero hacer que mi objeto no sea mutable, o no se le pueda alterar ninguna propiedad puedo hacer lo siguiente.
Object.freeze(persona); // A partir de esta linea ya no puedo editar mas el objeto, a excepcion de las propiedades de los suboObjetos dentro de este.
persona.religion = "Testigo de Jehova"; // Ya no se me reflejara esta propiedad en la consola, por que no se puede añadir.
console.log(persona);

// Para ver solo los valores o las propiedades de mi objeto debo hacer lo siguiente
const valores = Object.values( persona);
const properties = Object.getOwnPropertyNames(persona);
console.log("Los valores y propiedades del objeto: ",valores, properties);
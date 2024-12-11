/**
 * Evolucion de la creaciones de objetos, antes del uso de las clases.
 * En la siguiente url https://caniuse.com/ podras consultar las ultimas implementaciones soportadas de js
 * en los navegadores.
 */

// Primero constantes como constructores de objetos:
const jesus = {
    nombre: "Jesus",
    edad:   32,
    imprimir(){
        console.log(`Nombre: ${this.nombre} edad: ${this.edad}`);
    }
}

const sarah = {
    nombre: "sarah",
    edad:   11,
    imprimir(){
        console.log(`Nombre: ${this.nombre} edad: ${this.edad}`);
    }
}

// Uso de metodos internos en el objeto.
jesus.imprimir();
sarah.imprimir();

// Segundo funciones como constructores de objetos:
function Persona(nombre, edad){
    // Esta forma requiere de la palabra reservada new, para instanciar.
    this.nombre = nombre;
    this.edad = edad;
}

const yurleydis = new Persona("yurleydis",31);
console.log({yurleydis});


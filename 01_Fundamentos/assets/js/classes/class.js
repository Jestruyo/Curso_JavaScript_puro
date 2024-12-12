/**
 * Uso de clases en js de forma clasica.
 */

class Persona {

    /**
     * Las clases usan por defecto la clausula use strict, asi que no es necesario
     * definirlo internamente dentro de la clase.
     */

    // Atrubutos de la clase.
    nombre;
    apellido;
    edad;
    _genero;


    // Constructor de clase.
    constructor (nombre = "Sin nombre", apellido = "Sin apellido", edad = 0) {

        // Inicializacion
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        
    };

    // Set para establecer
    set setGenero(genero){
        this._genero = genero;
    }

    // Get para acceder.
    get getGenero() {
        return this._genero
    }

    // Metodo de clase.
    alertaPersona () {
        alert(`Hola! Creaste un objeto de clase Persona con nombre: ${this.nombre}`);
    };
}

// Instancia de la clase.
const niña = new Persona( "Sarah", "Trujillo", 11);
niña.setGenero = "Mujer"; // Uso de set.
console.log(niña.getGenero); // Uso de Get.
console.log(niña);
niña.alertaPersona();
/**
 * Uso de clases en js de forma clasica.
 */

class Persona {

    /**
     * Las clases usan por defecto la clausula use strict, asi que no es necesario
     * definirlo internamente dentro de la clase.
     */

    /**
     *  Atributos estaticos
     *  Estos atributos no requieren instanciar y se pueden usar directamente desde la clase.
     */

    static _conteo_de_instancia = 0;
    static get getConteo_de_instacion (){
        return Persona._conteo_de_instancia + " instancias de la clase Persona."
    }

    // Atributos de la clase.
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

        // Contador de instancia de la clase
        Persona._conteo_de_instancia ++;
        
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
const niño = new Persona( "Jesus", "Trujillo", 11);
niña.setGenero = "Mujer"; // Uso de set.
console.log(niña.getGenero); // Uso de Get.
console.log(niña);
niña.alertaPersona();
console.log(Persona.getConteo_de_instacion) // Uso del atributo estatico, directo desde la clase.
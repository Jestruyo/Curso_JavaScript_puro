/**
 * En este archivo se profundiza el uso de extends para sub-clases en js de forma clasica.
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

/**
 * El uso de extends, nos permite disponer de los atributos y metodos de una clase superior.
 * Luego dentro del constructor, podemos invocar el metodo super() para inicializar los atributos
 * heredados y los propios.
 */
class Usuario extends Persona {
    // Atributo estatico local
    static _conteo_de_instancias_usuario = 0;
    // Atributo local de usuario
    codigo;

    constructor(nombre, apellido, edad, codigo = 1140850053){
        super(nombre, apellido, edad); // Inicializados de atributos heredados.
        this.codigo = codigo;

        Usuario._conteo_de_instancias_usuario ++;
    }

    instancias_generales(){
        console.log("Las instacias de Usuario son: ", Usuario._conteo_de_instancias_usuario);
    }


}

// Instancia de la clase.
const usuario1 = new Usuario("Ricky", "Martin", 43, 11408500231);
usuario1.setGenero = "Hombre";
usuario1.alertaPersona();
usuario1.instancias_generales();
console.log("Instancia Usuario 1: ", usuario1)

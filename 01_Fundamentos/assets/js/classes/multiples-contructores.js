class Persona {

    // Metodo para usar clases con 
    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){

        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    }

    getNombre(){
        console.log(`La persona se llama: ${this.nombre} ${this.apellido}`);
    }


}


const nombre   = "Jesus",
      apellido = "Trujillo",
      pais     = "Colombia";

const objPersona = {
    nombre   : "Sarah",
    apellido : "Trujillo",
    pais     : "Colombia",
}

// Instancia de clase con 3 parametros.
const usuario1 = new Persona(nombre,apellido,pais);

// Instancia de clase por objeto
const usuario2 = Persona.porObjeto(objPersona);
usuario1.getNombre();
usuario2.getNombre();
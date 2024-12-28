/**
 * Un singleton es la posibilidad de inicializar una unica instancia de una clase,
 * y que su invocacion se pueda implementar de forma global dentro de la aplicacion.
 */

class CuentaUsuario {

    static instancia;
    nombre = "";

    constructor(nombre = " "){

        CuentaUsuario.instancia; //undefined por defecto, hasta que se haga la primera instacia de la clase.

        // if ? Evaluamos si ya existe una instancia de la clase.
        if (!!CuentaUsuario.instancia){
            return CuentaUsuario.instancia; // Si existe, entonces retornamos la instancia.

        }
        // Si no existe una instacia previa entonces inicializamos la instancia con this.
        CuentaUsuario.instancia = this;
        this.nombre = nombre;
    }
}


/**
 * Ahora podemos instanciar cuantas veces queramos que simpre vamos a obtener el valor
 * de la primera instacia.
 */
const c1 = new CuentaUsuario("Deposito");
const c2 = new CuentaUsuario("Efectivo");
const c3 = new CuentaUsuario("Credito");

// Todas retornaran el valor de la primera
console.log(c1);
console.log(c2);
console.log(c3);
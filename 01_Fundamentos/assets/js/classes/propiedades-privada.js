/**
 * Las propiedades privadas en Js, se encuentran en plena implamentacion hasta este momento.
 * Puede ser que a la fecha que estes observando este codigo ya este implementada.
 */

class Triangulo {
    #area;

    constructor (base = 0, altura = 0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

    medidas(){
        alert(`El #area de este triangulo es: ${this.#area}`);
    }
}

const figura = new Triangulo(24,25);
// figura.#area = 1000; Aqui estoy cambiando el valor calculado real, algo que no deberia permitirse. 
figura.medidas();

/**
 * NOTA:
 * Si se descomenta la linea figura.#area, marca un error en #area.
 * Al agregar el # a futuro indicara que el atributo de esta clase es privada.
 * Solo se debe esperar la implementacion en Js dentro de los navegadores.
 */
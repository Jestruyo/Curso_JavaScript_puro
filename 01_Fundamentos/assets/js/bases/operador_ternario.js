/**
 * Realicemos un pequeño programa para una tienda, que indique que los dias de semana se abre
 * a las 11 y los fines de semana a las 9.
 * 
 * Requerimiento: Se ingresa a un sitio web, para consultar si la tienda esta abierta o no.
 * 
 * La logica se debe hacer utilizando el operador ternario ? :
 */

let horaActual = 10;
let dia = 1;
let horaApertura;
let mensaje;

/* if (dia === 0 || dia === 6){
    horaApertura = 9;
    console.log("Es fin de semana")
} else {
    horaApertura = 11;
    console.log("Es dia entre semana")
} */

/* if(horaActual >= horaApertura){
    mensaje = `Esta abierto, hoy abrimos a las ${horaApertura}`;
    console.log(mensaje)
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
    console.log(mensaje)
}; */


/**
 * Acabamos de hacer el codigo de forma tradicional, 
 * ahora vamos a utilizar el operador ternario en este mismo requerimiento.
 */

horaApertura = [0,6].includes(dia) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? `Esta abierto, hoy abrimos a las ${horaApertura}`: `Esta cerrado, hoy abrimos a las ${horaApertura}`;
console.log({horaApertura,mensaje})
// Al momento de utilizar el switch, es como si estuvieramos utilizando el ===, porque el nos valida el valor del caso con exactitud.

const Permiso = true;

const autorizador = (p) => (p) ? 1 : 0;

switch(autorizador(Permiso)){
    case 0:
        console.log("Usted no tiene permiso")
        break;
    case 1:
        console.log("Usted si tiene permiso")
        break;
    default:
        console.log("Error de datos")
}


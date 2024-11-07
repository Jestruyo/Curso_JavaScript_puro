// Aqui entraremos a definir funciones en Js.

// Funcion tradicional
function saludo(){
    console.log("Hola chucho")
};
// Llamado
saludo();

// 2da forma de hacer una funcion
const saludo2 = function (){
    console.log("Hola pelao")
};
// Llamado
saludo2();

// Tercera forma de hacer una funcion, conocida como funciones de flecha.
const saludo3 = () => {
console.log("Aprende rapido")
};
// Llamado
saludo3();

// Si deseo enviar algun parametro seria asi. Lo mismo podria hacer con cualquiera de las anteriores.
const tu_deporte = (deporte) => {
    console.log("Mi deporte favorito es el: ",deporte)
};
//Llamado
tu_deporte("Futbol");

// Se crea una funcion que ejecuta un alert.
const saludo_en_ventana = (name) => {
    alert("Hola " + name)
};
//Llamado
saludo_en_ventana("@Jestruyo");


// ***Retornos***

// Funcion flecha suma. Como se ve, cuando la funcion no necesita hacer mas procesos se puede eliminar el uso de {} y return.
const suma = (n1, n2) => "La suma es: " + (n1+n2);
console.log(suma(3,6));

// Esta es otra forma de hacer que una funcion retorne algo.
const resta = (n1,n2) => {
    // Funcion que retorna un resta.
    res = n1-n2;
    return "La resta es: " + res
};
//Llamado
console.log(resta(30,5));
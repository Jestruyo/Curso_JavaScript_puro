// Hablemos de las estructuras condicionales if else.

let Fecha = new Date(); // Date nos permite acceder a la fecha y hora actual.
let dia = Fecha.getDay(); // Sacamos solo el dia especifico.
console.log({Fecha,dia});

// Codigo que pide el nombre y lo concatena con el dia de la semana.
let nombre = prompt("Ingrese su nombre por favor");
if (dia === 0){
    console.log("Hoy es domingo",nombre)
} else if (dia === 1) {
    console.log("Hoy es Lunes", nombre)
} else if (dia === 2) {
    console.log("Hoy es Martes", nombre)
} else if (dia === 3) {
    console.log("Hoy es Miercoles", nombre)
} else if (dia === 4) {
    console.log("Hoy es Jueves",nombre)
} else if (dia === 5) {
    console.log("Hoy es Viernes", nombre)
} else if (dia === 6) {
    console.log("Hoy es Sabado", nombre)
};

// Otra forma de hacerlo #2
let dias_semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
if (dia) {
    d = dias_semana[dia];
    console.log("Forma dos, Hoy es:",d)
};

// Otra forma de hacerlo #3
let dias_semanas2 = {
    0:"Domingo",
    1:"Lunes",
    2:"Martes",
    3:"Miercoles",
    4:"Jueves",
    5:"Viernes",
    6:"Sabado"
};

console.log("Forma Tres, Hoy es:",dias_semanas2[dia]);
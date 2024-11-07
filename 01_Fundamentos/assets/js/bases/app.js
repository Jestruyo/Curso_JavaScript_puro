alert('Hola @Jestruyo desde app.js');

let a = 10; // Esta es la forma de crear una variable en las ultimas versiones de Javascript. (La mas recomendable)
const c = 30 // c = 20; El valor de una constante no se puede modificar.
var b = 10; // Esta es la forma antigua y que aun se utiliza en algunos navegadores para crear variables. 
// Var sobreescribe las variables del objeto window.


let papa = 'Jesus Trujillo';
let mama = 'Yurleydis Navarro';
let hija = 'Sarah Trujillo';
let abuela = 'Etilvia Teheran';
let año = 2023, mes = 11, dia = 7;
const año_incrementado = año + 1;
let fecha_inicio_curso = "Año: "+año_incrementado+" "+"Mes: "+mes+" "+"Dia: "+dia;

// Imprimo todas las variables que desee.
// console.log('Año actual: ',año_actual);
// console.log('Papa: ',papa);
// console.log('Mama: ',mama);
// console.log('Hija: ', hija);
// console.log('Abuela: ',abuela)

// Puedes imprimir los valores de las variables en tablas de la siguiente manera:
console.table({papa,mama,hija,abuela,fecha_inicio_curso});
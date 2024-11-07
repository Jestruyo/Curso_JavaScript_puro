// Hagamos cosas con el operador ternario

//Validamos el numero mayor
const numMayor = (num1,num2) => (num1 > num2) ? num1 : num2;
console.log("El numero mayor es:",numMayor(50,4));

//Preguntamos si alguien es testigo
const esTestigo = (res) => (res) ? "Si es testigo" : "No es testigo";
console.log(esTestigo(false));

//Calificador
const nota = prompt("Ingrese una nota por favor:",0); //Nota
const calificacion = nota >=95 ? "A+":
                     nota >=90 ? "A ":
                     nota >=85 ? "B+":
                     nota >=80 ? "B ":
                     nota >=75 ? "D+":
                     nota >=70 ? "D ": "F";

//Funcion que da el veredicto final
const calificador = (n)=>(n === "A " || n === "A+") ? "Su nota es excelente":
                         (n === "B " || n === "B+") ? "Su nota es regular"  : "Usted reprobo";

// Llamado de la funcion
console.log(calificador(calificacion));
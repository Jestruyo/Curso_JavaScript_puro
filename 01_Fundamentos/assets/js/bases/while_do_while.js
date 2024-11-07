// Llego la hora de implementar el ciclo while y do while.

const Personas = ["Jesus","Sarah","Yurleydis","Ety"]
let i = 0;

// Este ciclo se ejecuta siempre y cuando la condicion sea verdadera.
// Ojo es importante que el contador se incremente en cada vuelta para detener el while.

console.warn("Ciclo while");
while(i < Personas.length){
    console.log(Personas[i])
    i++;
}

//Do while
console.warn("Ciclo Do while");
let j = Personas.length;
do {
    let dato = prompt("Ingrese una nueva persona:");
    Personas.push(dato);
    j--;
}while(Personas[j]);

console.log({Personas});
//Juguemos con el for

const Vocales = ["a","e","i","o","u"];
console.warn("For");
for(let i = 0; i < Vocales.length; i++){ // Necesita inicializar
    console.log(`Vocal: ${Vocales[i]}`);
}
console.warn("For in");
for(i in Vocales){ //No necesita inicializar
    console.log(`Vocal: ${Vocales[i]}`);
}
console.warn("For of"); //Accede al valor directamente con el contador.
for(vocal of Vocales){
    console.log("Vocal:",vocal);
}
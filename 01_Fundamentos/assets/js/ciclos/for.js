//Juguemos con el for

const Vocales = ["a","e","i","o","u"];

const Dirreccion = [["Carrera 6F # 76 - 22", "Calle 76 # 34 - 78", "Calle 85 # 54 - 43 Ezq"],
                    ["Calle 88 # 34 - 33", "Carrera 100 # 76 - 23", "Calle 12 # 45 - 67"],
                    ["Calle 82 # 53 - 110", "Calle 84 # 55 - 245", "Carrera 110 # 94 - 23"]];

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
console.warn("Combinaciones de for")
for (i in Dirreccion) { // for in
    for (j = 0; j < Dirreccion[i].length; j++ ) { // for estructurados.
        console.log(Dirreccion[i][j])
    }
}
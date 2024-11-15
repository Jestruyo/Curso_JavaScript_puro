// Hablemos de la logica boolean

const regresaTrue = () =>  true;

const regresaFalse = () => false;


console.warn("Negacion con !");
// Negacion con (!)
console.log("Si es True, return",! regresaTrue()); //la negacion si es true retorna false o lo contrario.
console.log("Si es False, return",! regresaFalse());

console.warn("Uso del And o &&");
// Comparacion And
console.log("False y False return: ",regresaFalse() && regresaFalse()); // False y False return False.
console.log("False y True return: ",regresaFalse() && regresaTrue()); // False y True return False.
console.log("True y False return Flase", regresaTrue() && regresaFalse()) // True y False return Flase.
console.log("True y True return:", regresaTrue() && regresaTrue()) // True y True return True.

console.warn("Uso del o ||");
// Comparacion o
console.log("False o False return: ",regresaFalse() || regresaFalse()); // False o False return False.
console.log("False o True return: ",regresaFalse() || regresaTrue()); // False o True return True.
console.log("True o False return:", regresaTrue() || regresaFalse()) // True o False return True.
console.log("True o True return:", regresaTrue() || regresaTrue()) // True o True return True.

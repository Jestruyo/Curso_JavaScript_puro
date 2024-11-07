// console.log({b}); Variable tipo VAR que esta inicializada en app.js

// Las funciones a continuacion son bloqueantes. Es decir que no permiten que se termine de ejecutar el javascript
// hasta recibir una opcion del usuario.

//**Tambien es importante mensionar que estas funciones pertenecen al objeto window del navegador, por tal motivo si 
// probamos el codigo con node de forma local, nos dara un error.**/

// Sierve para mostrar un mensaje al usuario.
alert("Hola @Jestruyo")

// Sirve para solicitar un dato al usuario.
let profession = prompt("¿Cual es tu profesion?","Developer")
console.log({profession}) // Impresion en consola

// Sierve para que el usuario confirme si o no y retorna un booleano.
const confirmacion = confirm('¿Desea borrar los archivos?')
console.log({confirmacion}) // Impresion en consola
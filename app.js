const { Calculadora } = require("./clases/calculadora");

console.log("Este es el primer mensaje de la aplicación");
const calculadora = new Calculadora();
let multiplicar = calculadora.multiplicar(5, 10);
console.log(`El resultado de la multiplicación es de 5 * 10 es: ${multiplicar}`);
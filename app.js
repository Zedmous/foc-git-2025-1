console.log("Este es el primer mensaje de la aplicación");
sumar = (a, b) => {
  return a + b;
};

restar = (a, b) => {
  return a - b;
};

multiplicar = (a, b) => {
  return a * b;
};

dividir = (a, b) => {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
};

console.log("Operaciones matemáticas definidas");
console.log(`La suma de 5 y 3 es: ${sumar(5, 3)}`);
console.log(`La resta de 5 y 3 es: ${restar(5, 3)}`);
console.log(`La multiplicación de 5 y 3 es: ${multiplicar(5, 3)}`);
console.log(`La división de 5 y 3 es: ${dividir(5, 3)}`);
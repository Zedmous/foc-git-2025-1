
class Calculadora{

    constructor() {
        console.log("Instancia de la  clase Calculadora creada");
    }

    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }
}

module.exports = {
    Calculadora
};
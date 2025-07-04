class Calculadora {

    constructor() {
        console.log("Instancia de la clase Calculadora creada");
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }
}

module.exports = {
    Calculadora
};

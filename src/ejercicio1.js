console.clear();
console.log("Ejercicio 1: Escribe una función para mezclar la matriz en un orden completamente nuevo y aleatorio.");

const shuffle = (someArray) => {
    if (!Array.isArray(someArray)) {
        throw new Error("Error");
    }

    for (let i = someArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = someArray[i];
        someArray[i] = someArray[j];
        someArray[j] = temp;
    }
    return someArray;

}

module.exports = {
    shuffle
}

// [12, 15, 10]
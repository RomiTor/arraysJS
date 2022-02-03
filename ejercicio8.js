console.log("Ejercicio 8: Escriba una función para devolver valores que solo ocurren una vez dentro de la matriz.");

const alphabetize = (someArray) => {
    const orderlphabetically = jumbledAlphabetically.map(item => item.sort())  
    return someArray.sort()
}

const jumbledAlphabetically = [
    ["e", "d", "f"],
    ["a", "c", "b"],
    ["m", "o", "n"]
]

console.log(alphabetize(jumbledAlphabetically))
// [["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]
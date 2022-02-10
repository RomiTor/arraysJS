console.log("Ejercicio 8: Escriba una función para ordenar alfabéticamente cada matriz.");

const alphabetize = (someArray) => {
    console.log(someArray);
    if(!Array.isArray(someArray)){
        throw new Error("Error");
    }
    const orderAlphabetically = someArray.sort();
    return orderAlphabetically.map(item => item.sort())
}

/*const jumbledAlphabetically = [
    ["e", "d", "f"],
    ["a", "c", "b"],
    ["m", "o", "n"]
]*/

module.exports = {
    alphabetize
}
//console.log(alphabetize(jumbledAlphabetically))
// [["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]
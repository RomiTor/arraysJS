console.log("Ejercicio 9: Escriba una función que devuelva una nueva matriz que contenga las palabras que aparecen repetidas en ambas matrices.")

const findCommonWords = (firstArray, secondArray) => {
    if(!Array.isArray(firstArray)){
        throw new Error("Error");
    }
    if(!Array.isArray(secondArray)){
        throw new Error("Error");
    }

    return firstArray.filter(item => secondArray.includes(item));
}

//const firstArray = ["dog", "cat", "parrot"]
//const secondArray = ["lizard", "rat", "cat"]

module.exports = {
    findCommonWords
}
//console.log(findCommonWords(firstArray, secondArray)) // ["cat"]
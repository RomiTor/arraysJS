console.clear();
console.log("Ejercicio 7: Escriba una función para devolver valores que solo ocurren una vez dentro de la matriz.");

const onlyUnique = (someArray) => {
    const uniqueElement = [];
    
    someArray.forEach(item => {
        const repeticiones = someArray.filter(elementoMismoArray => item === elementoMismoArray)
        
        if(repeticiones.length === 1){
            uniqueElement.push(item)
        }
    })

    return uniqueElement
}

console.log(onlyUnique(["a", "a", "b", "c", "d", "d"])) // [b, c]
console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5])) // [2, 5]
console.clear();
console.log("Ejercicio 5: Escriba una función que devuelva una matriz que contenga los números más pequeños y más grandes");

const findSmallestAndLargestNumbers = (someArray) => {
    const minNumber = [Math.min(...someArray)]
    const maxNumber = [Math.max(...someArray)]
    
    return minNumber.concat(maxNumber)
}

console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2])) 
// 2, 28

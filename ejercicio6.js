console.clear();
console.log("Ejercicio 6: Escriba una función que genere dos matrices: una que contenga números impares y la otra que contenga números pares.");

const splitByOddAndEven = (someArray) => {
    const pares = []
    const impares = []
    const newArray = [...new Set(someArray)];

    for (let i = 0; i < newArray.length; i++) {
        if(newArray[i] % 2 === 0){
            pares.push(newArray[i])
        }else{
            impares.push(newArray[i])
        }
    }

return [pares, impares]

}

console.log(splitByOddAndEven([2, 3, 7, 6, 2, 4, 9])) 
// [[2, 4, 6], [3, 7, 9]]
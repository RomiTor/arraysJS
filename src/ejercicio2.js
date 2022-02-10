console.clear();
console.log("Ejercicio 2: Escriba una función que reciba dos matrices, luego mezcle las dos matrices de manera uniforme, comenzando con el primer elemento de la primera matriz. La matriz devuelta debe alternar entre cada matriz a su vez, un elemento a la vez.");

const mix = (firstArray, secondArray) => { 
   

    if(!Array.isArray(firstArray, secondArray)){
        throw new Error("Error");
    }
    
    let resultArray = []

    for (let i = 0; i <= firstArray.concat(secondArray).length; i++) {
        firstArray[i] && resultArray.push(firstArray[i])
        secondArray[i] && resultArray.push(secondArray[i])
    }
    return resultArray;
}

module.exports = {
    mix
}

// [1, 4, 2, 5, 3, 6]

// ["h", 7, "a", 4, "c", 17, 10, 48]
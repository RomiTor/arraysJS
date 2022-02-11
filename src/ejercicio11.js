console.log("Ejercicio 11: Escriba una función que devuelva una matriz en orden ascendente, los números deben ir primero.");

const sortTheArray = (someArray) => {
    if(!Array.isArray(someArray)){
        throw new Error("Error");
    }

    const numArray = []
    const strArray = []
    
    someArray.forEach(item => { 
        if(typeof item === 'number'){
            numArray.push(item)
        }
        else{
            strArray.push(item)
        }
        
    });
    
    return numArray.sort((a, b) => a - b).concat(strArray.sort());
}

module.exports = {
    sortTheArray
}
//console.log(sortTheArray(["b", 6, "a", "q", 7, 2])) 
// [2, 6, 7, "a", "b", "q"]
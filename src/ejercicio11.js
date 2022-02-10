console.log("Ejercicio 8: Escriba una función que devuelva una matriz ordenada alfabéticamente, los números deben ir primero.");

const sortTheArray = (someArray) => {
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
    console.log(numArray)
    console.log(strArray)
    return numArray.sort((a, b) => a - b).concat(strArray.sort());
}

console.log(sortTheArray(["b", 6, "a", "q", 7, 2])) 
// [2, 6, 7, "a", "b", "q"]
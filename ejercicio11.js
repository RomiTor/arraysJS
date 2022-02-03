
const sortTheArray = (someArray) => {
    const numArray = []
    const strArray = []
    someArray.forEach(element => { 
        if(element === 'number'){
            numArray.push(element)
        }
        else{
            strArray.push(element)
        }
        
    });
    return numArray.sort((a, b) => a - b).concat(strArray.sort());
}

console.log(sortTheArray(["b", 6, "a", "q", 7, 2])) 
// [2, 6, 7, "a", "b", "q"]
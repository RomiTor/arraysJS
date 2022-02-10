console.clear();
console.log("Ordenar las matrices por suma, ascendente o descendente");

const orderBySum = (someArray) => {
    if(!Array.isArray(someArray)){
        throw new Error("Error");
    }

    const sumArray = someArray.map(e => {
        return {
            sumatoria: e.reduce((a,b) => a + b, 0),
            arreglo: e  
        }           
})

const orderArray = sumArray.sort(((a,b) => {
    return a.sumatoria - b.sumatoria;
}));

let resultArray = orderArray.map(item => item.arreglo)

return resultArray
}

module.exports = {
    orderBySum
}
//console.log(orderBySum([[1,3], [4,2], [2,1]]))
// [[2,1], [1,3], [4,2]]
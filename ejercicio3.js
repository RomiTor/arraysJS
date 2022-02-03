console.clear();
console.log("Ordenar las matrices por suma, ascendente o descendente");

const orderBySum = (someArray) => {
    const sumArray = someArray.map(e => {
        return {
            sumatoria: e.reduce((a,b) => a + b, 0),
            arreglo: e  
        }           
})

const orderArray = sumArray.sort(((a,b) => {
   // console.log(a)
    //console.log(b)
    return a.sumatoria - b.sumatoria;
}));

let resultArray = orderArray.map(item => item.arreglo)

return resultArray
}

console.log(orderBySum([[1,3], [4,2], [2,1]]))
// [[2,1], [1,3], [4,2]]
console.clear();
console.log("Ejercicio 4: Escriba una función que encuentre el elemento diferente en la matriz provista.");

const findOddOneOut = (someArray) => {
  if(!Array.isArray(someArray)){
    throw new Error("Error");
}
  let miMap = new Map()
  let result = ""

  someArray.forEach(item => {
    if (miMap.has(item)) {
      let current = miMap.get(item)
      miMap.set(item, current + 1)
    } else {
      miMap.set(item, 1)
    }
  })
  
  miMap.forEach((value, key) => {
    if (value === 1) {
      result = key
    }

  })

  return result
}

module.exports = {
  findOddOneOut
}
//console.log(findOddOneOut(["a", "a", "b", "a"])) // b
console.clear();
console.log("Ejercicio 4: Escriba una función que encuentre el elemento diferente en la matriz provista.");

const findOddOneOut = (someArray) => {
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

console.log(findOddOneOut(["a", "a", "b", "a"])) // b
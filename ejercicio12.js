const move = (someArray, firstIndex, secondIndex) => {
    const firstItem = someArray[firstIndex]
    const secondItem = someArray[secondIndex]
    someArray[secondIndex] = firstItem
    someArray[firstIndex] = secondItem
    
    return someArray
}

console.log(move([4, 5, 7], 2, 1)) // [4, 7, 5]

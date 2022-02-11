const containsAllElements = (firstArray, secondArray) => {
    if(!Array.isArray(firstArray)){
        throw new Error("Error");
    }
    if(!Array.isArray(secondArray)){
        throw new Error("Error");
    }
    return firstArray.every(item => secondArray.includes(item));
}

module.exports = {
    containsAllElements
}
//console.log(containsAllElements(["monday", "tuesday"], ["tuesday"])) // false
//console.log(containsAllElements(["monday", "tuesday"], ["monday","tuesday"])) // true
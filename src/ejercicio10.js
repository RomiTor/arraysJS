const containsAllElements = (firstArray, secondArray) => {
    return firstArray.every(item => secondArray.includes(item));
}

console.log(containsAllElements(["monday", "tuesday"], ["tuesday"])) // false
console.log(containsAllElements(["monday", "tuesday"], ["monday","tuesday"])) // true
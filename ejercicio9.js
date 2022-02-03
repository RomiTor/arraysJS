const findCommonWords = (firstArray, secondArray) => {
    return firstArray.filter(item => secondArray.includes(item));
}

const firstArray = ["dog", "cat", "parrot"]
const secondArray = ["lizard", "rat", "cat"]
console.log(findCommonWords(firstArray, secondArray)) // ["cat"]
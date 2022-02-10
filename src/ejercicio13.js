const buildArray = (someArray, indexes) => {
    const resultArray = []
    indexes.forEach(item => {
        resultArray.push(someArray[item])
    });

    return resultArray;
}

console.log(buildArray(["mon", "tue", "wed", "thur", "fri"], [1, 3, 4])) 
// ["tue", "thur", "fri"]
const { findCommonWords } = require("../src/ejercicio9");

describe("Función findCommonWords", () => {
    it("Para los arrays firstArray = [dog, cat, parrot] y secondArray = [lizard, rat, cat] va a retornar [cat]", () => {
        //arrange
        const firstArray = ["dog", "cat", "parrot"]
        const secondArray = ["lizard", "rat", "cat"]

        //act
        const resultado = findCommonWords(firstArray, secondArray);

        //assert
        expect(resultado).toEqual(["cat"]);
    });

    it("Si firstArray no es un array va a arrojar error", () => {
        //arrange
        const firstArray = "abc";
        const secondArray = ["lizard", "rat", "cat"]
        
        //act
        const resultado = () => findCommonWords(firstArray, secondArray);
        console.log(resultado)

        //assert
        expect(resultado).toThrow("Error");
    });

    it("Si secondArray no es un array va a arrojar error", () => {
        //arrange
        const firstArray = ["dog", "cat", "parrot"];
        const secondArray = "hola";
        
        //act
        const resultado = () => findCommonWords(firstArray, secondArray);

        //assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función recibe un número va a arrojar error", () => {
        //arrange
        const firstArray = 2;
        const secondArray = 3;

        //act
        const resultado = () => findCommonWords(firstArray, secondArray);

        //assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función no recibe parametros va a arrojar error", () => {
        //act and assert
        expect(() => findCommonWords()).toThrow("Error");
    });
});
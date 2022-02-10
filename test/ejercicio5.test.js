const { findSmallestAndLargestNumbers } = require("../src/ejercicio5");

describe("Función findSmallestAndLargestNumbers", () => {
    it("Para el array [14, 28, 3, 8, 2] va a retornar 2, 28", () => {
        //Arrange
        const someArray = [14, 28, 3, 8, 2];

        //Act
        const resultado = findSmallestAndLargestNumbers(someArray);

        //Assert
        expect(resultado).toEqual([2,28]);
    });

    it("Si someArray no es un array va a arrojar error", () => {
        //Arrange
        const someArray = 3;

        //Act
        const resultado = () => findSmallestAndLargestNumbers(someArray);

        //Assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función no recibe parametros va a arrojar error", () => {
        //act and assert
        expect(() => findSmallestAndLargestNumbers()).toThrow("Error");
    });
});
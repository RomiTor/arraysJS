const { findOddOneOut } = require("../src/ejercicio4");

describe("Función findOddOneOut", () => {
    it("Para el array [a, a, b, a] va a retornar b", () => {
        //Arrange
        const someArray = ["a", "a", "b", "a"];

        //Act
        const resultado = findOddOneOut(someArray);

        //Assert
        expect(resultado).toEqual("b");
    });

    it("Si someArray no es un array va a arrojar error", () => {
        //Arrange
        const someArray = 2;

        //Act
        const resultado = () => findOddOneOut(someArray);

        //Assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función no recibe parametros va a arrojar error", () => {
        //act and assert
        expect(() => findOddOneOut()).toThrow("Error");
    });
});
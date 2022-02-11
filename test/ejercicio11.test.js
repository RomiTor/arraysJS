const { sortTheArray } = require("../src/ejercicio11");

describe("Función orderBySum", () => {
    it("Para el array [b, 6, a, q, 7, 2] va a retornar [2, 6, 7, a, b, q]", () => {
        //Arrange
        const someArray = ["b", 6, "a", "q", 7, 2];

        //Act
        const resultado = sortTheArray(someArray);

        //Assert
        expect(resultado).toEqual([2, 6, 7, "a", "b", "q"]);
    });

    it("Si someArray no es un array va a arrojar error", () => {
        //Arrange
        const someArray = 4;

        //Act
        const resultado = () => sortTheArray(someArray);

        //Assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función no recibe parametros va a arrojar error", () => {
        //act and assert
        expect(() => sortTheArray()).toThrow("Error");
    });
});

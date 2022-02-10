const { orderBySum } = require("../src/ejercicio3");

describe("Función orderBySum", () => {
    it("Para los arrays [[1,3], [4,2], [2,1]] va a retornar [[2,1], [1,3], [4,2]]", () => {
        //Arrange
        const someArray = [[1,3], [4,2], [2,1]];

        //Act
        const resultado = orderBySum(someArray);

        //Assert
        expect(resultado).toEqual([[2,1], [1,3], [4,2]]);
    });

    it("Si someArray no es un array va a arrojar error", () => {
        //Arrange
        const someArray = 4;

        //Act
        const resultado = () => orderBySum(someArray);

        //Assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función no recibe parametros va a arrojar error", () => {
        //act and assert
        expect(() => orderBySum()).toThrow("Error");
    });
});
const {onlyUnique} = require("../src/ejercicio7");

describe("Función onlyUnique", () => {
    it("Para el array [a, a, b, c, d, d] va a retornar [b, c]", () => {
        //arrange
        const someArray = ["a", "a", "b", "c", "d", "d"];

        //act
        const resultado = onlyUnique(someArray);

        //assert
        expect(resultado).toEqual(["b", "c"]);
    });

    it("Para el array [1, 1, 2, 3, 3, 4, 4, 5] va a retornar [2, 5]", () => {
        //arrange
        const someArray = [1, 1, 2, 3, 3, 4, 4, 5];

        //act
        const resultado = onlyUnique(someArray);

        //assert
        expect(resultado).toEqual([2, 5]);
    });

    it("Si someArray no es un array va a arrojar error", () => {
        //arrange
        const someArray = 3;

        //act
        const resultado = () => onlyUnique(someArray);

        //assert
        expect(resultado).toThrow("Error");
    });


    it("Si la función no recibe parametros va a arrojar error", () => {
        //act and assert
        expect(() => onlyUnique()).toThrow("Error");
    });
});
const { alphabetize } = require("../src/ejercicio8");

describe("Función onlyUnique", () => {
    it("Para el array [[e, d, f], [a, c, b], [m, o, n]] va a retornar [[a, b, c], [d, e, f], [o, m, n]]", () => {
        //arrange
        const someArray = [["e", "d", "f"],["a", "c", "b"],["m", "o", "n"]];

        //act
        const resultado = alphabetize(someArray);

        //assert
        expect(resultado).toEqual([["a", "b", "c"],["d", "e", "f"],["m", "n", "o"]]);
    });

    it("Si someArray no es un array va a arrojar error", () => {
        //arrange
        const someArray = "abc";

        //act
        const resultado = () => alphabetize(someArray);

        //assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función recibe un número va a arrojar error", () => {
        //arrange
        const someArray = 4;

        //act
        const resultado = () => alphabetize(someArray);

        //assert
        expect(resultado).toThrow("Error");
    });


    it("Si la función no recibe parametros va a arrojar error", () => {
        //act and assert
        expect(() => alphabetize()).toThrow("Error");
    });
});
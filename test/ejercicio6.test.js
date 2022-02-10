const { splitByOddAndEven } = require("../src/ejercicio6");

describe("Función splitByOddAndEven", () => {
    it("Para el array [2, 3, 7, 6, 2, 4, 9] va a retornar [[2, 4, 6], [3, 7, 9]]", () => {
        //arrange
        const someArray = [2, 3, 7, 6, 2, 4, 9];

        //act
        const resultado = splitByOddAndEven(someArray);
        console.log(resultado);
        //assert
        expect(resultado).toEqual([[2, 4, 6], [3, 7, 9]]);
    });

    it("Si someArray no es un array va a arrojar error", () => {
        //arrange
        const someArray = 3;

        //act
        const resultado = () => splitByOddAndEven(someArray);

        //assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función recibe un string va a arrojar error", () => {
        //arrange
        const someArray = "santi";

        //act
        const resultado = () => splitByOddAndEven(someArray);

        //assert
        expect(resultado).toThrow("Error");
    })

    it("Si la función no recibe parametros va a arrojar error", () => {
        //act and assert
        expect(() => splitByOddAndEven()).toThrow("Error");
    });
});
const { mix } = require("../src/ejercicio2");

describe("Funcion mix", () => {
    it("Para los arrays [1, 2, 3], [4, 5, 6] va a retornar [1, 4, 2, 5, 3, 6]", () => {
        //arrange
        const firstArray = [1, 2, 3];
        const secondArray = [4, 5, 6];

        //act
        const resultado = mix(firstArray, secondArray);

        //assert
        expect(resultado).toStrictEqual([1, 4, 2, 5, 3, 6]);
    });

    it("Para los arrays [h, a, c ], [ 7, 4, 17, 10, 48 ] va a retornar [h, 7, a, 4, c, 17, 10, 48]", () => {
        //arrange
        const firstArray = ["h", "a", "c" ];
        const secondArray = [7, 4, 17, 10, 48];

        //act
        const resultado = mix(firstArray, secondArray);

        //assert
        expect(resultado).toStrictEqual(["h", 7, "a", 4, "c", 17, 10, 48]);
    });

    it("Si firstArray no es un array va a arrojar error", () => {
        //arrange
        const firstArray = "hola";
        const secondArray = [4, 5, 6];

        //act
        

        //assert
        expect(() => mix()).toThrow("Error");
    });

    it("Si secondArray no es un array va a arrojar error", () => {
        //arrange
        const firstArray = [1, 2, 3];
        const secondArray = 3;

        //act
        const resultado = mix(firstArray, secondArray);

        //assert
        expect(resultado).toThrow("Error");
    });


    it("Si no se ingresan parametros va a arrojar error", () => {

        //act and assert
        expect(() => mix()).toThrow("Error");
    });


})
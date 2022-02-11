const { containsAllElements } = require("../src/ejercicio10");

describe("Función containsAllElements", () => {
    it("Para los arrays firstArray = [monday, tuesday] y secondArray = [tuesday], va a retornar false", () => {
        //arrange
        const firstArray = ["monday", "tuesday"];
        const secondArray = ["tuesday"];

        //act
        const resultado = containsAllElements(firstArray, secondArray);

        //assert
        expect(resultado).toBe(false);
    });

    it("Para los arrays firstArray = [monday, tuesday] y secondArray = [monday, tuesday], va a retornar true", () => {
        //arrange
        const firstArray = ["monday", "tuesday"];
        const secondArray = ["monday", "tuesday"];

        //act
        const resultado = containsAllElements(firstArray, secondArray);

        //assert
        expect(resultado).toBe(true);
    });

    it("Si firstArray no es un array va a arrojar error", () => {
        //arrange
        const firstArray = "abc";
        const secondArray = ["tuesday"];
        
        //act
        const resultado = () => containsAllElements(firstArray, secondArray);

        //assert
        expect(resultado).toThrow("Error");
    });

    it("Si secondArray no es un array va a arrojar error", () => {
        //arrange
        const firstArray = ["monday", "tuesday"];
        const secondArray = "hola";
        
        //act
        const resultado = () => containsAllElements(firstArray, secondArray);

        //assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función recibe un número va a arrojar error", () => {
        //arrange
        const firstArray = 2;
        const secondArray = 3;

        //act
        const resultado = () => containsAllElements(firstArray, secondArray);

        //assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función recibe un string va a arrojar error", () => {
        //arrange
        const firstArray = "hola";
        const secondArray = ["monday", "tuesday"];

        //act
        const resultado = () => containsAllElements(firstArray, secondArray);

        //assert
        expect(resultado).toThrow("Error");
    });

    it("Si la función no recibe parametros va a arrojar error", () => {
        //act and assert
        expect(() => containsAllElements()).toThrow("Error");
    });
});
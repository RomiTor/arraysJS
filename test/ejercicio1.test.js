const { shuffle } = require("../src/ejercicio1");

describe("Función shuffle", () => {
    it("Shuffle va a retornar en orden aleatorio [10, 12, 15] de 3 posiciones", () => {
        //arrange
        const someArray = [10, 12, 15];

        //act
        const resultado = shuffle(someArray);
        
        //assert
        expect(resultado.length).toBe(3);
        expect(Array.isArray(resultado)).toBe(true);
        
    });

    it("Si se ingresa un string va a retornar error", () => {
            //arrange
            const someArray = "hola";
            
            //act and assert
            expect(() => shuffle(someArray)).toThrow("Error");
        });

});
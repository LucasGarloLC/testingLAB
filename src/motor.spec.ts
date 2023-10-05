import { vi } from "vitest";
import { ObjetoPartida, partida } from "./modelo";
import { obtenerEstadoPartida, generarNumeroAleatorio, dameValorCarta } from "./motor";


describe ("obtenerEstadoPartida", () => {
    it("Debería de devolver MENOR_DE_SIETE_Y_MEDIO si la puntuación es inferior a 7,5" , () => {
        // Arrange
        const resultadoEsperado: ObjetoPartida = "MENOR_DE_SIETE_Y_MEDIO";
        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7);

        // Act
        const estadoPartida = obtenerEstadoPartida();

        // Assert
        expect(estadoPartida).toBe(resultadoEsperado);
    });

    it("Debería de devolver IGUAL_A_SIETE_Y_MEDIO si la puntuación es igual a 7,5" , () => {
        // Arrange
        const resultadoEsperado: ObjetoPartida = "IGUAL_A_SIETE_Y_MEDIO";
        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5);
        
        // Act
        const estadoPartida = obtenerEstadoPartida();

        // Assert
        expect(estadoPartida).toBe(resultadoEsperado);
    });

    it("Debería de devolver MAYOR_DE_SIETE_Y_MEDIO si la puntuación es igual a 7,5" , () => {
        // Arrange
        const resultadoEsperado: ObjetoPartida = "MAYOR_DE_SIETE_Y_MEDIO";
        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(8);
   
        // Act
        const estadoPartida = obtenerEstadoPartida();

        // Assert
        expect(estadoPartida).toBe(resultadoEsperado);
    });
});

describe ("generarNumeroAleatorio", () => {
    it("Vamos a generar un número aleatorio para confirmar que la función opera correctamente" , () => {
        // Arrange
        vi.spyOn(Math, "random").mockReturnValue(0.8);

        // Act
        const numeroGenerado = generarNumeroAleatorio();

        // Assert
        expect(numeroGenerado).toBe(9);
    });
    
    it("Vamos a generar un número aleatorio para confirmar que la función opera correctamente" , () => {
        // Arrange
        vi.spyOn(Math, "random").mockReturnValue(0.7);

        // Act
        const numeroGenerado = generarNumeroAleatorio();

        // Assert
        expect(numeroGenerado).toBe(8);
    });
    
    it("Vamos a generar un número aleatorio para confirmar que la función opera correctamente" , () => {
        // Arrange
        vi.spyOn(Math, "random").mockReturnValue(0.5);

        // Act
        const numeroGenerado = generarNumeroAleatorio();

        // Assert
        expect(numeroGenerado).toBe(6);
    });
});

describe('dameValorCarta', () => {
    it("La función devolverá 0,5 cuando el valor de la carta es mayor que 7,5", () => {
        // Arrange
        // Act
        const resultado = dameValorCarta(8);
        
        // Assert
        expect(resultado).toEqual(0.5);
    });
    
    it("La función devolverá 0,5 cuando el valor de la carta es mayor que 7,5", () => {
        // Arrange
        // Act
        const resultado = dameValorCarta(10);
        
        // Assert
        expect(resultado).toEqual(0.5);
    });

    it("La función devolverá el valor exacto de la carta cuando el valor de la carta sea menor o igual que 7,5", () => {
        // Arrange
        // Act
        const resultado = dameValorCarta(6);
        
        // Assert
        expect(resultado).toEqual(6);
    });
    
    it("La función devolverá el valor exacto de la carta cuando el valor de la carta sea menor o igual que 7,5", () => {
        // Arrange
        // Act
        const resultado = dameValorCarta(2);
        
        // Assert
        expect(resultado).toEqual(2);
    });
  });
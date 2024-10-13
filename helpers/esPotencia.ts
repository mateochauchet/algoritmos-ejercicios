export const esPotencia = (base: number, numero: number) => {
    if (base === 1) return numero === 1; // Excepción cuando la base es 1
    if (base <= 0 || numero <= 0) return false; // Números no positivos no pueden ser potencias

    // Calculamos el logaritmo en base `base` de `numero`
    const logResult = Math.log(numero) / Math.log(base);

    // Verificamos si el resultado es un entero
    return Number.isInteger(logResult);
}
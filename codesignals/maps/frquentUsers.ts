function frequentUser(visits: number[]): number {
    // Definir el umbral de frecuencia como n/4
    const frequencyThreshold = Math.floor(visits.length / 4);

    const visitorsFrequencyMap = new Map<number, number>();

    // Recorrer las visitas
    for (let id of visits) {
        // Ignorar ids con valor 0
        if (id === 0) {
            continue;
        }

        // Obtener la frecuencia actual o inicializarla en 0
        const frequency = (visitorsFrequencyMap.get(id) || 0) + 1;

        // Si la frecuencia supera el umbral, devolver el ID del usuario
        if (frequency > frequencyThreshold) {
            return id;
        }

        // Actualizar la frecuencia del ID
        visitorsFrequencyMap.set(id, frequency);
    }

    // Si no se encuentra ningún usuario que cumpla el criterio, devolver -1
    return -1;
}

// Ejemplos de uso
console.log(`Frequent User: ${frequentUser([1, 2, 3, 1, 2, 3, 1, 2, 3, 1])}`);  // Salida esperada: 1
console.log(`Frequent User: ${frequentUser([5, 0, 5, 0, 5, 0, 5, 0, 1, 1, 1, 1, 1])}`);  // Salida esperada: 5
console.log(`Frequent User: ${frequentUser([3, 2, 2, 1, 3, 2, 3, 0, 0, 1, 1, 4])}`);  // Salida esperada: -1

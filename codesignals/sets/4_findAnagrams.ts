function sortCharacters(input) {
    return [...input].sort().join('');
}

function findAnagramMatches(array1: string[], array2 : string[]): string[] {
    // Paso 2: Crear un Set con las palabras ordenadas del array2
    let sortedWordsInArray2 = new Set();
    array2.forEach(word => sortedWordsInArray2.add(sortCharacters(word)));
    
    // Paso 3: Buscar anagramas en array1
    let result: string[] = [];
    for (let word of array1) {
        let sortedWord = sortCharacters(word);
        if (sortedWordsInArray2.has(sortedWord)) {
            result.push(word);
        }
    }
    
    // Paso 4: Devolver el resultado
    return result;
}

// Ejemplo de uso
let array1 = ["listen", "hello", "enlist", "world"];
let array2 = ["silent", "dworl", "test"];

console.log(findAnagramMatches(array1, array2)); // Salida: ["listen", "enlist", "world"]

const findLastUnique = (arr: number[]): number | null => {
    if (arr.length === 0) {
        return null;
    }
    if (arr.length === 1) {
        return arr[0];
    }

    const wordsFrequency = new Map<number, number>();

    // Contar la frecuencia de cada número en el array
    arr.forEach(n => {
        wordsFrequency.set(n, (wordsFrequency.get(n) || 0) + 1);
    });

    // Recorrer el array en orden inverso
    for (let i = arr.length - 1; i >= 0; i--) {
        if (wordsFrequency.get(arr[i]) === 1) {
            return arr[i]; // Devolver el último número único
        }
    }

    return null; // Si no hay ningún número único
}
// using sets

const findLastUnique2 = (words: string[]): string | null => {
    if (words.length <= 1) {
        return words[0]
    }

    let wordsSet = new Set();
    let duplicatesSet = new Set();

    for (let word of words) {
        if (wordsSet.has(word)) {
            duplicatesSet.add(word);
        } else {
            wordsSet.add(word);
        }
    }

    duplicatesSet.forEach(word => wordsSet.delete(word));

    let lastUniqueWord = "";
    for (let i = words.length - 1; i >= 0; i--) {
        if (wordsSet.has(words[i])) {
            lastUniqueWord = words[i];
            break;
        }
    }

    return lastUniqueWord;
}
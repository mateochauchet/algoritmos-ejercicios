// Función para construir el índice invertido
function buildIndex(documents: string[]): Map<string, number[]> {
    const index = new Map<string, number[]>();

    documents.forEach((doc, docId) => {
        const words = normalizeAndSplit(doc);

        words.forEach(word => {
            if (!index.has(word)) {
                index.set(word, []);
            }
            const docList = index.get(word);
            if (docList && !docList.includes(docId)) {
                docList.push(docId);
            }
        });
    });

    return index;
}

// Función para normalizar las palabras (convertir a minúsculas y eliminar puntuación)
function normalizeAndSplit(text: string): string[] {
    // Eliminar puntuación, convertir a minúsculas y dividir por espacios
    return text.replace(/[^\w\s]/g, "").toLowerCase().split(/\s+/);
}

// Función para buscar una palabra en el índice invertido
function searchWordInIndex(word: string, index: Map<string, number[]>): number[] {
    const normalizedWord = word.toLowerCase();
    return index.get(normalizedWord) || [];
}

// Ejemplo de uso
const documents: string[] = [
    "Sustainability is key to our future.",
    "Many initiatives focus on sustainability and green energy.",
    "Sustainable development is important for future generations."
];

// Construimos el índice
const index: Map<string, number[]> = buildIndex(documents);

// Buscamos una palabra en el índice
console.log(searchWordInIndex("sustainability", index));  // Salida: [0, 1]
console.log(searchWordInIndex("development", index));     // Salida: [2]
console.log(searchWordInIndex("energy", index));          // Salida: [1]

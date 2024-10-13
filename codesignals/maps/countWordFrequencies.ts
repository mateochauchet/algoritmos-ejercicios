// Problem 1: Count Word Frequencies in a Text
// Imagine we have a blog. We want to analyze the posts to see which topics are most discussed. A practical solution involves writing a function to count the frequency of each word in a blog post while ignoring case and punctuation.

// This function is essential in text analysis tools used in search engine optimization. It can highlight popular topics and even suggest post tags, increasing visibility in search results.

function cleanText(text) {
    return text.replace(/[^\w\s]/g, "").toLowerCase();
}

function splitIntoWords(text) {
    return text.split(/\s+/);
}

function countWordFrequencies(text) {
    const cleanedText = cleanText(text);  // Paso 1: Limpiar el texto
    const words = splitIntoWords(cleanedText);  // Paso 2: Dividir en palabras
    
    const wordCount = new Map();
    
    words.forEach(word => {
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        } else {
            wordCount.set(word, 1);
        }
    });

    return wordCount;
}

// Ejemplo de uso
const blogPost = "Hello! This is a simple, simple test. Hello again!";
console.log(countWordFrequencies(blogPost));  
// Salida: Map { 'hello' => 2, 'this' => 1, 'is' => 1, 'a' => 1, 'simple' => 2, 'test' => 1, 'again' => 1 }



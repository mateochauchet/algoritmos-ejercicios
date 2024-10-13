function reverseStringUsingStack(s: string): string {
    const stack: string[] = [];
    
    // Paso 1: Agregar cada carácter de la cadena a la pila
    for (let char of s) {
        stack.push(char);
    }

    let reversedString = '';

    // Paso 2: Sacar los caracteres de la pila y formar la cadena invertida
    while (stack.length > 0) {
        reversedString += stack.pop();
    }

    return reversedString;
}

// Ejemplo de uso
console.log(reverseStringUsingStack("hello"));  // Salida: "olleh"
console.log(reverseStringUsingStack("galactic"));  // Salida: "citcalag"

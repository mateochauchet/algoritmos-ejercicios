const validateParentheses = (s: string): boolean => {
    const openBrackets = "({[";
    const closeBrackets = ")}]";
    const stack: string[] = [];
    const matchingBrackets: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        // Si es un símbolo de apertura, lo añadimos a la pila
        if (openBrackets.includes(ch)) {
            stack.push(ch);
        } 
        // Si es un símbolo de cierre, verificamos su correspondencia
        else if (closeBrackets.includes(ch)) {
            // Si la pila está vacía o el símbolo no corresponde al último de la pila
            if (stack.length === 0 || stack.pop() !== matchingBrackets[ch]) {
                return false;
            }
        }
    }

    // Al final, la pila debe estar vacía si todos los paréntesis están balanceados
    return stack.length === 0;
}

// Ejemplos de prueba
console.log(validateParentheses("(messi))"));  // Salida esperada: false
console.log(validateParentheses("()[]{}"));    // Salida esperada: true
console.log(validateParentheses("{[()]}"));    // Salida esperada: true
console.log(validateParentheses("([)]"));      // Salida esperada: false
console.log(validateParentheses(""));          // Salida esperada: true


function areBracketsBalanced(s: string) {
    // Initialized stack, ready to track opening brackets
    const stack: string[] = [];
    // Bracket pairs for simple access and checking
    const brackets = { '(': ')', '[': ']', '{': '}' };
    
    for (let char of s) {
        if (brackets[char]) {
            // Insert the expected closing bracket onto the stack
            stack.push(brackets[char]);
        } else {
            // The stack's top is compared to the actual closing bracket
            // A mismatch or early termination indicates an invalid string
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }
    
    // The stack must be empty; otherwise, missing closings remain
    return stack.length === 0;
}


console.log(areBracketsBalanced('{{()}}[]'))  // true
console.log(areBracketsBalanced('[(())}'))  // false
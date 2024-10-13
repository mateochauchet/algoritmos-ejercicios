
export const solution = (k: number, arr: number[]) : number => {
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const n = arr[i];
  
      if(isPower(k, n)) {
        count++
      }
    }
  
    return count
  }
  
  export const isPower = (k: number, n: number) => {
     // Caso especial: cualquier número elevado a la potencia de 0 es 1
     if (n === 1) {
      return true;
    }
  
    // Caso especial: k = 1 solo tiene potencias cuando n es 1
    if (k === 1) {
      return n === 1;
    }
  
    let num = k;
  
    while (num < n) {
      num *= k
    }
    return num === n
  }
  
  console.log(solution(2, [2, 4, 6, 8, 16, 32]));
  
function partition(arr, low, high) {
    let pivot = arr[high];  // The pivot is the last element
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {   // If the current element is smaller than the pivot
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap the current element with the element at index i
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Position the pivot in the correct position in the array
    return i 
    
    + 1;
}

function partition2(arr: number[], low: number, high: number): number {
    const pivot = arr[high]; // Elegimos el último elemento como pivote
    let i = low - 1; // i es el índice del elemento más grande encontrado

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambiamos
        }
    }

    // Colocamos el pivote en su posición correcta
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSortCars(vehicles, low, high) {
    if (low < high) {
        let partitionIndex = partition(vehicles, low, high);
        quickSortCars(vehicles, low, partitionIndex - 1);
        quickSortCars(vehicles, partitionIndex + 1, high);
    }
}

function partition3(arr: number[], low: number, high: number): number {
    // Elegimos el último elemento como pivote.
    const pivot = arr[high];
    
    // `i` es el índice del último elemento que es menor que el pivote.
    // Inicializamos `i` como `low - 1` porque aún no hemos encontrado ningún número menor que el pivote.
    let i = low - 1;

    // Iteramos sobre el array desde el índice `low` hasta `high - 1`.
    // `j` es el índice que recorre los elementos del subarray.
    for (let j = low; j < high; j++) {
        // Si el elemento actual `arr[j]` es menor que el pivote:
        if (arr[j] < pivot) {
            // Incrementamos `i`, ya que hemos encontrado otro número menor que el pivote.
            i++;

            // Intercambiamos `arr[i]` con `arr[j]` para mover el número menor que el pivote
            // a la izquierda del subarray (agrupando los números menores juntos).
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Al final del bucle, `i` es el índice del último número menor que el pivote.
    // Ahora colocamos el pivote en su posición correcta, que es justo después del último número menor.
    // Esto se logra intercambiando `arr[i + 1]` con el pivote `arr[high]`.
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    // Retornamos el índice donde ahora se encuentra el pivote.
    // Todos los elementos a la izquierda de este índice son menores, y todos los elementos a la derecha son mayores.
    return i + 1;
}
function searchInBitonicArray(arr: number[], target: number): number | null {
    // Paso 1: Encontrar el pico (elemento máximo)
    const peakIndex = findPeak(arr);

    // Paso 2: Buscar en la parte izquierda (creciente)
    const leftSearch = binarySearch(arr, target, 0, peakIndex, true);
    if (leftSearch !== null) {
        return leftSearch;
    }

    // Paso 3: Buscar en la parte derecha (decreciente)
    return binarySearch(arr, target, peakIndex + 1, arr.length - 1, false);
}

function findPeak(arr: number[]): number {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] > arr[mid + 1]) {
            // El pico está a la izquierda o en mid
            end = mid;
        } else {
            // El pico está a la derecha
            start = mid + 1;
        }
    }

    // Al final, start == end, que es el pico
    return start;
}

function binarySearch(arr: number[], target: number, start: number, end: number, ascending: boolean): number | null {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (ascending) {
            if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            if (arr[mid] > target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return null;
}
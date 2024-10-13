
export function findMinInRotatedArray(arr: number[]): number {
    let left = 0;
    let right = arr.length - 1;

    // Si el array no ha sido rotado, el primer elemento es el mínimo
    if (arr[left] < arr[right]) {
        return arr[left];
    }

    // Búsqueda binaria
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // Si el elemento en mid es mayor que el elemento en right, el mínimo está en el lado derecho
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            // Si el elemento en mid es menor o igual que el de right, el mínimo está en el lado izquierdo o es mid
            right = mid;
        }
    }

    // Cuando left == right, hemos encontrado el mínimo
    return arr[left];
}

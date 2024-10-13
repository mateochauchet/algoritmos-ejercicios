function iterativeBinarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) return mid; // Found the target
        if (arr[mid] < target) start = mid + 1; // Search the right half
        else end = mid - 1; // Search the left half
    }
    return -1;
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
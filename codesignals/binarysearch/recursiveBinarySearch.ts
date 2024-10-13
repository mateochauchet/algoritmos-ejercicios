function recursiveBinarySearch(arr: number[], start: number, end: number, target: number) {
    // Base case: the search area is empty
    if (start > end) return -1;
  
    // Find the midpoint
    let mid = Math.floor((start + end) / 2);
  
    // Found the target
    if (arr[mid] == target) return mid;
  
    // If the target is less than the midpoint, search the left half
    if (arr[mid] > target)
        return recursiveBinarySearch(arr, start, mid - 1, target);
   
    // Else, search the right half
    return recursiveBinarySearch(arr, mid + 1, end, target);
}
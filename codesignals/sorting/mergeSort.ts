function merge(left: number[], right: number[]) {
    let resultArray: number[] = [], leftIndex = 0, rightIndex = 0;

    // sorting and merging process
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]); // the smaller of the two elements is added to the result array
            leftIndex++; // move to the next element in the left array
        } else {
            resultArray.push(right[rightIndex]); // same as above but with the right array
            rightIndex++;
        }
    }

    // Return the sorted array
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}


function mergeSort (unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray; // If the array has only one element, it's already sorted
    }
    
    const middle = Math.floor(unsortedArray.length / 2); // This will get the midpoint of the array
    const left = unsortedArray.slice(0, middle); // We split the array into two halves
    const right = unsortedArray.slice(middle); // This is the right half

    // Merge the two halves back together
    return merge(
        mergeSort(left), mergeSort(right)
    );
}
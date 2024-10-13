// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.


function removeDuplicates(nums: number[]): number {

    if (nums.length === 0) return 0;

    let k = 1; // k is the index where the next unique element will be placed

    for (let i = 1; i < nums.length; i++) {
        const n = nums[i];
        if (n !== nums[i - 1]) {
            nums[k] = n;
            k++;
        }
    }

    return k;
};

console.log(removeDuplicates([1, 1, 1, 1, 2]))
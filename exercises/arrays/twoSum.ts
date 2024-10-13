function twoSum(nums: number[], target: number): number[] {
    let result: number[] = []

    let map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const complement = target - n;

        if (map.has(n)) {
            const complementIndex = map.get(n);
            result.push(complementIndex as number, i)
            break;
        }

        map.set(complement, i)
    }

    return result;
};

console.log(twoSum([2, 7, 11, 15], 9));

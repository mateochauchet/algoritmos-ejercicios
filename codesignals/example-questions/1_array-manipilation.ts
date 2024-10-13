
// Given an array a, your task is to output an array b of the same length by applying the following transformation: 
// – For each i from 0 to a.length - 1 inclusive, b[i] = a[i - 1] + a[i] + a[i + 1]
// – If an element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, use 0 in its place
// – For instance, b[0] = 0 + a[0] + a[1]

// Example

// For a = [4, 0, 1, -2, 3]: 
// – b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4
// – b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
// – b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
// – b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
// – b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1

// So, the output should be solution(a) = [4, 5, -1, 2, 1].

const solution = (arr: number[]): number[] => {
    let b = new Array(arr.length).fill(-1);

    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];

        b[i] = (arr[i - 1] ?? 0) + arr[i] + (arr[i + 1] ?? 0);
    }

    return b
}


console.log(solution([4, 0, 1, -2, 3]));



export const solution2 = (a: number[]): number[] => {
    let b: number[] = new Array(a.length).fill(-1);;

    for (let i = 0; i < a.length; i++) {
        const a1 = a[i - 1] ?? 0;
        const a2 = a[i];
        const a3 = a[i + 1] ?? 0;
        b[i] = a1 + a2 + a3;
    }

    return b
}
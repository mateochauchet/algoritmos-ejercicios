// solution 1
const deleteDuplicates = (arr: number[]) => {
    // if has less than 2 elements
    if (arr.length <= 1) {
        return arr
    }

    let newArray: number[] = []

    arr.forEach(n => {
        if (!newArray.includes(n)) {
            newArray.push(n)
        }
    });

    return newArray;
}

// solution 2
const removeDuplicates = (arr: number[]): number[] => {
    // si el array tiene menos de 2 elementos, regresa el mismo array
    if (arr.length <= 1) {
        return arr;
    }

    // Usamos un Set para eliminar duplicados
    return Array.from(new Set(arr));
}

const processAddresses = function (addresses: number[]) {
    if (addresses.length <=1) {
        return addresses
    }

    return Array.from(new Set(addresses))
}

// Testing the function. 
let addresses = [1, 2, 3, 2, 1, 5, 3, 1, 2, 1, 4, 5, 6];
let uniqueAddresses = processAddresses(addresses);
console.log(uniqueAddresses); // It should return [1, 2, 3, 5, 4, 6]
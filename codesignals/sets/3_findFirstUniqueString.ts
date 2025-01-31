function findFirstDuplicateID(ids: string[]): string {
    // if no ids return emty
    if (!ids.length) return "";

    let idSet = new Set();

    // Find an id that appears more than once and return it
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        if (idSet.has(id)) {
            return id
        } else {
            idSet.add(id)
        }
    }

    // Return an empty string if no duplicate ids are found
    return "";
}

console.log(findFirstDuplicateID(["X123", "A456", "X123", "B789", "A456", "C111"])); // Expected "X123"
console.log(findFirstDuplicateID(["Z999", "Y888", "Z999", "Y888"])); // Expected "Z999"
console.log(findFirstDuplicateID(["E100", "B200", "C300", "E100", "D400", "C300"])); // Expected "E100"
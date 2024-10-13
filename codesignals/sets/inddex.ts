
const users = new Set();

users.add("Alice");     // Add Alice
users.add("Bob");       // Add Bob
users.add("David");     // Add David
users.add("Alice");     // Attempt to add Alice again

console.log(users);  // Set(3) { 'Bob', 'Alice', 'David' }
console.log(users.size);  // 3


//! example usecase visitors

let visitors = new Set(); // Create a Set

visitors.add("user123");  // A visitor
visitors.add("user345");  // Another visitor

// Check if a user has visited before
if(visitors.has("user123")){
    console.log("This user has visited before!"); // "This user has visited before!"
}
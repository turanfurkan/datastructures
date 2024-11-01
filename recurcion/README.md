# Recursion

## Introduction
Recursion is a powerful programming technique where a function calls itself to solve a problem. This method can simplify complex problems, improve code readability, and provide natural solutions for certain tasks.

## Why Use Recursion?

### 1. Simplifies Complex Problems
- **Divide and Conquer**: Recursion breaks down complex problems into smaller, manageable subproblems, making them easier to understand and solve.
- **Natural Representation**: Problems with inherent recursive structures, such as tree traversals or mathematical sequences, can be expressed more intuitively with recursion.

### 2. Cleaner Code
- **Conciseness**: Recursive solutions often result in fewer lines of code compared to their iterative counterparts, enhancing readability and maintainability.
- **Eliminates Loops**: By using function calls instead of loops, recursive implementations can simplify the logic of the code.

### 3. Easier to Implement
- For certain algorithms, especially those involving backtracking (e.g., solving mazes, puzzles) or tree/graph traversals (e.g., depth-first search), recursion can provide a more straightforward implementation.

### 4. Problem Solving
- **Mathematical Problems**: Recursion is commonly used to define sequences, calculate combinations, and solve permutation problems, leveraging the inherent recursive nature of these tasks.
- **Dynamic Programming**: Many dynamic programming approaches utilize recursion to break problems into simpler subproblems, which can be solved and reused.

### 5. State Preservation
- Recursion implicitly maintains state through the function call stack, allowing the program to remember its previous state without the need for explicit tracking variables.

## Example: Factorial Calculation
Here’s a simple example of calculating the factorial of a number using recursion:

```javascript
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120

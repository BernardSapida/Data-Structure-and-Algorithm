// Time Complexity: O(n)
// Time Complexity: O(1)

/**
 * "If the value of n is 0, return 1. Otherwise, return n multiplied by the factorial of n-1."
 * 
 * The function is called recursively until the value of n is 0
 * @param n - The number we want to find the factorial of.
 * @returns The factorial of the number.
 */
function factorial(n){
    /* Checking if the value of n is 0. If it is, it returns 1. */
    if(n === 0) return 1;

    /* Calling the function again, but with a different value. */
    return n * factorial(n-1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
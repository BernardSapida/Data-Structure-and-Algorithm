// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * If n is 0, return 0, otherwise return n + the result of calling recursiveRange with n-1.
 * @param n - the number we want to sum up to
 * @returns The sum of all numbers from 0 to n.
 */
function recursiveRange(n){
    /* Checking if the number is 0, if it is, it returns 0. */
    if(n === 0) return 0;

    /* Adding the number to the result of the function called with n-1. */
    return n + recursiveRange(n-1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
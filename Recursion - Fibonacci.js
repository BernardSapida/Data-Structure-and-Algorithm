// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * If the value of the nth term is already in the cache, return it, otherwise, add the sum of the
 * previous two terms to the cache and return it.
 * @param n - the number of the fibonacci sequence you want to find
 * @returns The value of the nth term of the fibonacci sequence.
 */
function fib(n){
    /* Creating a cache array with the first two values of the fibonacci sequence. */
    cache = [0, 1];

    /**
     * If the value of the nth term is already in the cache, return it, otherwise, add the sum of the
     * previous two terms to the cache and return it.
     * @param [n=0] - the number of the fibonacci sequence you want to find
     * @returns the value of the cache at the index of n.
     */
    function helper(n = 0) {
        if(cache[n] !== undefined) return cache[n];
        else if(cache[n] === undefined) cache[n] = helper(n-1) + helper(n-2);
        return cache[n];
    }

    /* Calling the helper function with the value of n. */
    return helper(n);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
console.log(fib(50)); // 9227465
console.log(fib(100)); // 354224848179262000000
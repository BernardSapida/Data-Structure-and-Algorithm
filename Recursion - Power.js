// Time Complexity: O(n)
// Time Complexity: O(1)

/**
 * If the exponent is 0, return 1; otherwise, return the base times the power of the base to the
 * exponent minus 1.
 * @param base - 2
 * @param exponent - 2
 * @returns The base number multiplied by itself exponent times.
 */
function power(base, exponent){
    /* If the exponent is 0, return 1. */
    if(exponent === 0) return 1;

    /* Multiplying the base by itself exponent times. */
    return base * power(base, exponent-1);
}

console.log(power(2,0)); // 1
console.log(power(2,2)); // 4
console.log(power(2,4)); // 16
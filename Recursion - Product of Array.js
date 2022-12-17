// Time Complexity: O(n)
// Time Complexity: O(1)

/**
 * If the array is empty, return 1. Otherwise, return the first element of the array multiplied by the
 * product of the rest of the array.
 * @param arr - The array that we're going to be multiplying the elements of.
 * @returns The product of the array.
 */
function productOfArray(arr){
    /* If the array is empty, return 1. */
    if(arr.length === 0) return 1;

    /* Taking the first element of the array and multiplying it by the product of the rest of the
    array. */
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60
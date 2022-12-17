// Time Complexity: O(n)
// Time Complexity: O(N)

/**
 * It recursively calls itself on the first element of the array until it finds a non-array element,
 * then it pushes that element to the result array and calls itself on the rest of the array
 * @param arr - the array to be flattened
 * @returns [1,2,3,4,5,6,7,8,9]
 */
function flatten(arr){
    let res = [];

    /**
     * If the array is empty, return; otherwise, if the first element is not an object, push it to the
     * result array, and then recursively call the function on the rest of the array.
     * @param arr - the array to be flattened
     * @returns none
     */
    function helper(arr) {
        if(arr.length === 0) return;
        else if(typeof arr[0] !== "object") res.push(arr.shift());
        else helper(arr.shift());
        helper(arr);
    }

    /* Calling the helper function on the array that was passed in. */
    helper(arr);

    return res;
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
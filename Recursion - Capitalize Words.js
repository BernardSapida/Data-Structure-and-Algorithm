// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * We're going to call a helper function that will take in the array and the index of the last element
 * in the array. The helper function will then capitalize the last element in the array and then call
 * itself with the index of the second to last element in the array. This will continue until the
 * helper function is called with the index of the first element in the array.
 * @param arr - an array of strings
 * @returns The array with the last element capitalized.
 */
function capitalizeWords(arr) {
    let index = arr.length - 1;

    function helper(arr, index) {
        if(index == -1) return;
        arr[index] = arr[index].toUpperCase();
        helper(arr, index-1);
    }

    helper(arr, index);

    return arr;
}
  
console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])); // ['I', 'AM', 'LEARNING', 'RECURSION']
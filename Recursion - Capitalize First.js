// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * We create a helper function that takes in an array and an index, and if the index is not -1, we
 * capitalize the first letter of the word at that index, and then call the helper function again with
 * the index decremented by 1.
 * @param arr - an array of strings
 * @returns The array with the first letter of each word capitalized.
 */
function capitalizeFirst(arr){
    function helper(arr, index) {
        if(index == -1) return;
        else arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1);
        return helper(arr, index-1);
    }
    helper(arr, arr.length-1);
    
    return arr;
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
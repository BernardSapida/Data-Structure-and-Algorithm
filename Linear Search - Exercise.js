// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * For each element in the array, check if it's the target. If it is, return the index. If not,
 * continue. If you get to the end of the array and haven't found the target, return -1
 * @param arr - The array to search through
 * @param target - The value we're looking for
 * @returns The index of the target value.
 */
function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == target) return i;
    }
    return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1,2,3,4,5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1
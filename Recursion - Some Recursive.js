// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * If the remainder of val divided by 2 is not equal to 0, return true, otherwise return false.
 */
const isOdd = val => val % 2 !== 0;

/**
 * If the array is empty, return false. If the callback returns true for the first element, return
 * true. Otherwise, return the result of calling the function again with the array minus the first
 * element.
 * @param arr - an array of any type
 * @param callback - a function that takes in a single parameter and returns a boolean
 * @returns a boolean value.
 */
function someRecursive(arr, callback){
    if(arr.length === 0) return false;
    else if(callback(arr[0])) return true;

    return someRecursive(arr.slice(1), callback);

    return helper(arr.slice(1), callback);
}

console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false
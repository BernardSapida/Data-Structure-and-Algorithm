// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * We use a helper function to recursively iterate through the object and add the even numbers to a sum
 * variable.
 * @param obj - {
 * @returns The sum of all even numbers in an object.
 */
function nestedEvenSum(obj) {
    let sum = 0;

    /**
     * It takes an array of numbers and objects, and returns the sum of all even numbers.
     * @param obj - the object to be traversed
     * @returns The sum of all even numbers in the nested array.
     */
    function helper(obj) {
        if(obj.length == 0) return;
        else if(typeof obj[0] == 'number' && obj[0] % 2 == 0) sum += obj[0];
        else if(typeof obj[0] == 'object') helper(Object.values(obj[0]));
        helper(obj.slice(1));
    }

    helper(Object.values(obj));

    return sum;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
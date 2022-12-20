// Time Complexity: O(n)
// Space Complexity: O(n)

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};


/**
 * We recursively iterate through the object, and if we find a number, we convert it to a string
 * @param obj - The object that you want to stringify the numbers in.
 * @returns the object with all the numbers converted to strings.
 */
function stringifyNumbers(obj) {
    /* Creating a deep clone of the object. */
    let clone = JSON.parse(JSON.stringify(obj));

    /**
     * "If the first key in the array of keys is a number, convert it to a string, then recursively
     * call the function on the rest of the keys."
     * 
     * The function is recursive, and it takes two arguments: an object and an array of keys. The array
     * of keys is the path to the value that we want to convert to a string.
     * 
     * The function first checks if the array of keys is empty. If it is, it returns the object. If it
     * isn't, it gets the first key in the array of keys.
     * 
     * If the value of the first key is a number, it converts it to a string, then recursively calls
     * the function on the rest of the keys.
     * 
     * If the value of the first key is an object, it recursively calls the function on the object and
     * the keys of the object.
     * 
     * Finally, it recursively
     * @param obj - the object you want to convert
     * @param keys - an array of keys
     * @returns the object with all the numbers converted to strings.
     */
    function helper(obj, keys) {
        if(keys.length === 0) return obj;

        first = keys[0];

        if(typeof obj[first] == "number") clone[first] = obj[first].toString();
        else if(typeof obj[first] == "object") clone[first] = helper(obj[first], Object.keys(obj[first]));

        helper(obj, keys.slice(1));
        return clone;
    }

    return helper(obj, Object.keys(obj));
}

console.log(stringifyNumbers(obj));
console.log(obj);                  
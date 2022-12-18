// Time Complexity: O(n)
// Space Complexity: O(1)

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

/**
 * We use a helper function to recursively iterate through the object and push any string values into
 * an array
 * @param obj - the object to be searched
 * @returns An array of all the strings in the object.
 */
function collectStrings(obj) {
    let res = [];

    /**
     * It takes an array of strings and objects, and returns an array of strings.
     * @param value - the array of values
     */
    function helper(value) {
        if(value.length === 0) return;
        else if(typeof value[0] == "string") res.push(value[0]);
        else if(typeof value[0] == "object") helper(Object.values(value[0]));
        helper(value.slice(1));
    }

    /* Taking the object and converting it into an array of values. */
    helper(Object.values(obj));
    return res;
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
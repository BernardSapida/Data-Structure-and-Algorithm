// Time Complexity: O(n)
// Space Complexity: O(n)

function same(arr1, arr2) {
    /* Checking if the length of the arrays are the same. If they are not, it will return false. */
    if(arr1.length != arr2.length) return false;

    /* Creating an empty object. */
    let frequency1 = {};
    let frequency2 = {};

    /* Checking if the value is in the object, if it is not, it will set it to 0 and add 1 to it. If
    it is, it will add 1 to it. */
    for(value of arr1) frequency1[value] = (frequency1[value] || 0) + 1;

    /* Checking if the value is in the object, if it is not, it will set it to 0 and add 1 to it. If it
    is, it will add 1 to it. */
    for(value of arr2) frequency2[value] = (frequency2[value] || 0) + 1;
    
    /* Checking if the value in frequency1 is in frequency2. If it is not, it will return false. If it
    is, it will check if the value in frequency2 is the same as the value in frequency1. If it is
    not, it will return false. */
    for(value in frequency1) {
        if(!(value**2 in frequency2)) return false;
        if(frequency2[value ** 2] !== frequency1[value]) return false;
    }

    return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
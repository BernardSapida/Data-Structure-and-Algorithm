// Time Complexity: O(n)
// Space Complexity: O(n)

function sameFrequency(num1, num2) {
    /* Converting the numbers into strings and then splitting them into arrays. */
    num1 = num1.toString();
    num2 = num2.toString();

    /* Checking if the length of the arrays are the same. If they are not, it will return false. */
    if(num1.length !== num2.length) return false;

    /* Creating an empty object. */
    let frequency1 = {};

    /* Creating a frequency counter for the first array. */
    for(let value of num1) frequency1[value] = (frequency1[value] || 0) + 1;

    /* Checking if the value of the second array is in the frequency counter of the first array. If it
    is not, it will return false. If it is, it will subtract 1 from the value of the frequency
    counter. */
    for(let value of num2) {
        if(frequency1[value] < 0 || frequency1[value] === undefined) return false;
        frequency1[value] -= 1;
    }

    return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22,222));
console.log(sameFrequency(1232, 9144));

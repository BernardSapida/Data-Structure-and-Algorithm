// Time Complexity: O(N)
// Space Complexity: O(1)

function isSubsequence(str1, str2) {
    let index = 0;
    let position = 0;

    if(str1.length == 0) return false;

    /* This is the main logic of the function. We are looping through the second string and checking if
    the current character matches the character at the current index of the first string. If it
    does, we increment the index. If the index ever reaches the last character of the first string,
    we know that the first string is a subsequence of the second string. */
    while(position < str2.length) {
        if(str1[index] == str2[position]) index++;
        if(index == str1.length) return true;
        position++;
    }

    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
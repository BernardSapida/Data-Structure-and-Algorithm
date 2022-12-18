// Time Complexity: O(log n)
// Space Complexity: O(1)

/**
 * If the first and last characters of the string are the same, then we check if the rest of the string
 * is a palindrome
 * @param str - the string we're checking
 * @returns A boolean value.
 */
function isPalindrome(str){
    /* This is setting up the variables that we will use to check if the string is a palindrome. */
    let start = 0;
    let end = str.length - 1;
    let mid = Math.floor((start + end) / 2);

    /**
     * If the start and end characters are the same, then we check if the rest of the string is a
     * palindrome.
     * @param str - the string we're checking
     * @param start - the starting index of the string
     * @param end - the last index of the string
     * @returns a boolean value.
     */
    function helper(str, start, end) {
        if(end == mid) {
            if(str[start] == str[end]) return true;
            else return false;
        }
        else if(str[start] !== str[end]) return false;
        return helper(str, start+1, end-1);
    }

    /* Returning the result of the recursive call. */
    return helper(str, start, end);
}
  
console.log(isPalindrome('uUwUu')); // true
console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
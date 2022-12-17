// Time Complexity: O(n)
// Time Complexity: O(1)

/**
 * If the position is 0, return the character at that position, otherwise return the character at that
 * position plus the recursive call of the function with the position minus 1
 * @param str - the string to reverse
 * @returns The string in reverse order.
 */
function reverse(str){
    let pos = str.length - 1;

    /**
     * If the position is 0, return the character at that position, otherwise return the character at
     * that position plus the recursive call of the function with the position minus 1.
     * @param str - the string to reverse
     * @param pos - the position of the character in the string
     * @returns the string in reverse order.
     */
    function helper(str, pos) {
        if(pos === 0) return str[pos];
        return str[pos] + helper(str, pos - 1);
    }

    return helper(str, pos);
}
  
console.log(reverse('awesome')); // emosewa
console.log(reverse('rithmschool')); // loohcsmhtir
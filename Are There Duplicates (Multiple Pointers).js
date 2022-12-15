// Time Complexity: O(n)
// Space Complexity: O(1)

function areThereDuplicates(...numbers) {
    let left = 0;
    let right = 1;

    while(left < numbers.length - 2) {
        if(right === numbers.length) {
            left++;
            right = left++;
        }

        if(numbers[left] === numbers[right]) return true;

        right++;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2)); // false 
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true 
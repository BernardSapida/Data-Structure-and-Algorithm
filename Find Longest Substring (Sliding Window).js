// Time Complexity: O(n)
// Space Complexity: O(n)

// function findLongestSubstring(str) {
//     /* This is initializing the variables that we will be using in the algorithm. */
//     let frequency = {};
//     let maxLen = 0;
//     let tempLen = 0;
//     let left = 0;
//     let right = 0;

//     /* This is a base case. If the string is empty or has only one character, we can return the length
//     of the string. */
//     if(str.length <= 1) return str.length;

//     /* This is the main logic of the algorithm. We are using a sliding window approach. We are using
//     two pointers, left and right, to keep track of the window. We are also using a frequency object
//     to keep track of the characters in the window. If we encounter a character that is already in
//     the frequency object, we know that we have a duplicate character and we need to reset the
//     window. We reset the window by setting the tempLen to 0, resetting the frequency object, and
//     incrementing the left pointer. We then set the right pointer to the left pointer. We continue
//     the loop and start the process over again. If we do not encounter a duplicate character, we
//     increment the tempLen and add the character to the frequency object. We then check to see if the
//     tempLen is greater than the maxLen. If it is, we set the maxLen to the tempLen. We then
//     increment the right pointer and continue the loop. */
//     while(right < str.length) {
//         let char = str[right];

//         if(!frequency[char]) {
//             frequency[char] = char;
//             tempLen++;
//         } else {
//             tempLen = 0;
//             frequency = {};
//             left++;
//             right = left;
//             continue;
//         }

//         maxLen = Math.max(maxLen, tempLen);
//         right++;
//     }

//     return maxLen;
// }

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        /* This is checking to see if the character is in the seen object. If it is, we are setting the
        start variable to the maximum of the start variable and the value of the character in the
        seen object. */
        if(seen[char]) start = Math.max(start, seen[char]);

        /* This is checking to see if the current substring is longer than the longest substring. If it
        is, we are setting the longest variable to the current substring. */
        longest = Math.max(longest, i - start + 1);

        /* This is setting the value of the character in the seen object to the index of the character
        plus one. */
        seen[char] = i + 1;
    }

    return longest;
}

// console.log(findLongestSubstring('')); // 0
// console.log(findLongestSubstring('rithmschool')); // 7
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
// console.log(findLongestSubstring('bbbbbb')); // 1
// console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
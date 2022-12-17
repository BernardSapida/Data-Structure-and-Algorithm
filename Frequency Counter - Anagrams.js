// Time Complexity: O(n)
// Space Complexity: O(n)

function validAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;

    let frequency = {};

    for(let char of str1) frequency[char] = (frequency[char] || 0) + 1;

    for(let char of str2) {
        if(char in frequency) frequency[char] -= 1;
        if(frequency[char] < 0 || frequency[char] === undefined) return false;
    }

    return true;
}

console.log(performance.now())
console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
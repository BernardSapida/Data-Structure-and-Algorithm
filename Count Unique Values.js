// Time Complexity: O(n)
// Space Complexity: O(n)

function countUniqueValues(arr) {
    /* If the array is empty, return 0. */
    if(arr.length === 0) return 0;

    let left = 0;

    /* Iterating through the array and comparing the value at the left index to the value at the right
    index. If they are not equal, then the left index is incremented and the value at the right
    index is assigned to the value at the left index. */
    for(let right = 0; right < arr.length; right++) {
        if(arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
        }
    }
    
    return left+1;
}

console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1])); // 1
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4
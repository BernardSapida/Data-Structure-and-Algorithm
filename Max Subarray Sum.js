// Time Complexity: O(n)
// Space Complexity: O(1)

function maxSubarraySum(arr, n) {
    /* If the array is empty, return null. */
    if(arr.length < n) return null;

    let maxSum = 0;
    let tempSum = 0;

    /* Adding the first n elements of the array. */
    for(let i = 0; i < n; i++) maxSum += arr[i];

    /* Setting the tempSum to the maxSum. */
    tempSum = maxSum;

    /* Looping through the array and adding the next element to the tempSum and subtracting the first
    element of the array. */
    for(let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
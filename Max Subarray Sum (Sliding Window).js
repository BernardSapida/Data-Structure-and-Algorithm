// Time Complexity: O(n)
// Space Complexity: O(1)

function maxSubarraySum(arr, n) {
    /* If the length of the array is less than the number of elements in the subarray, then the
    subarray cannot be created. */
    if(n > arr.length) return null;

    /* Setting the maxSum and tempSum to 0. */
    let maxSum = 0;
    let tempSum = 0;

    /* Adding the first n elements of the array. */
    for(let i = 0; i < n; i++) maxSum += arr[i];

    /* Setting the tempSum to the maxSum. */
    tempSum = maxSum;

    /* This is the part of the code that is doing the sliding window. */
    for(let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i-n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null
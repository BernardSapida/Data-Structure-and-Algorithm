// Time Complexity: O(n)
// Space Complexity: O(1)

function minSubArrayLen(arr, n) {
    /* This is setting up the variables that we will be using in the function. */
    let minSubArrayLen = arr.length;
    let left = 0;
    let right = arr.length - 1;

    /* This is a for loop that is iterating through the array and adding the values to the sum
    variable. */
    let sum = arr.reduce((sum, value) => sum += value);
    
    /* This is checking to see if the value of n is greater than the sum of the array. If it is, then
    it will return 0. */
    if(n > sum) return 0;
    
    /* This is a while loop that is checking to see if the value of minSubArrayLen is greater than 0.
    If it is, then it will check to see if the value of arr[left] is less than or equal to the value
    of arr[right] and if the value of sum - arr[left] is greater than or equal to the value of n. If
    both of those conditions are true, then it will subtract the value of arr[left] from the value
    of sum and then increment the value of left by 1. If the value of arr[left] is not less than or
    equal to the value of arr[right] and the value of sum - arr[right] is greater than or equal to
    the value of n, then it will subtract the value of arr[right] from the value of sum and then
    decrement the value of right by 1. If neither of those conditions are true, then it will return
    the value of minSubArrayLen. After that, it will decrement the value of minSubArrayLen by 1. */
    while(minSubArrayLen > 0) {
        if(arr[left] <= arr[right] && sum - arr[left] >= n) sum -= arr[left++]; 
        else if(arr[left] > arr[right] && sum - arr[right] >= n) sum -= arr[right--];
        else return minSubArrayLen;
        minSubArrayLen--;
    }
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)); // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)); // 5
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)); // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)); // 0
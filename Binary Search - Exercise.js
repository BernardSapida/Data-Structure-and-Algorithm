// Time Complexity: O(log n)
// Space Complexity: O(1)

/**
 * We start with the middle element of the array and compare it to the target. If the target is less
 * than the middle element, we know that the target is in the left half of the array. If the target is
 * greater than the middle element, we know that the target is in the right half of the array. We then
 * repeat this process on the half of the array that we know the target is in
 * @param arr - the array we're searching through
 * @param target - the value we're searching for
 * @returns The index of the target value.
 */
function binarySearch(arr, target){
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end) / 2);
    
    while(start <= end) {
        mid = Math.floor((start+end) / 2);

        if(arr[mid] === target) return mid;
        else if(arr[mid] < target) start = mid + 1;
        else if(arr[mid] > target) end = mid - 1;
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)); // -1
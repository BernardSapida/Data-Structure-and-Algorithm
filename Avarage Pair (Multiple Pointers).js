// Time Complexity: O(N)
// Space Complexity: O(1)

function averagePair(arr, average){
    /* If the array is empty or has only one element, there is no way to find an average pair. */
    if(arr.length <= 1) return false;
    
    /* Setting the left and right pointers to the first and second element of the array. */
    let left = 0;
    let right = 1;

    /* This is the main logic of the algorithm. It is checking if the average of the two elements is
    equal to the average we are looking for. If it is, it returns true. If it is not, it moves the
    left and right pointers to the next two elements. */
    while(right < arr.length){
        let computedAverage = (arr[left] + arr[right]) / 2;

        if(average % 1 === 0 && Math.floor(computedAverage) == average) return true;
        else if(average % 1 !== 0 && computedAverage == average) return true;

        left++;
        right++;
    }

    return false;
}

console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); // false
console.log(averagePair([4, 4],4)); // true
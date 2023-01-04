function countingSort(arr, min, max) {
    let j = 0;
    let supplementary = [];
    
    for (let i = min; i <= max; i++) {
        supplementary[i] = 0;
    }
    
    for (let i=0; i < arr.length; i++) {
        supplementary[arr[i]] += 1;
    }
       
    for (let i = min; i <= max; i++) {
        while (supplementary[i] > 0) {
            arr[j++] = i;
            supplementary[i] -= 1;
        }
    }
    return arr;
}

console.log(countingSort([2, 3, 8, 7, 100, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2], 1, 100));
function pivot(arr, start = 0, end = arr.length-1) {
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    let pivot = arr[start];
    let pivotIndex = start;

    for(let i = start+1; i <= end; i++) {
        if(pivot > arr[i]) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }

    swap(arr, start, pivotIndex);

    return pivotIndex;
}

function quickSort(arr, start = 0, end = arr.length) {
    if(start < end) {
        let pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex-1);
        quickSort(arr, pivotIndex+1, end);
    }

    return arr;
}

console.log(pivot([4,8,2,1,5,7,6,3]));
console.log(quickSort([4,8,2,1,5,7,6,3]));
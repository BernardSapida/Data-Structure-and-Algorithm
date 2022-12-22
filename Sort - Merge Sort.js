function merge(arr1, arr2) {
    let sortedArray = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            sortedArray.push(arr1[i]);
            i++;
        } else {
            sortedArray.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        sortedArray.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        sortedArray.push(arr2[j]);
        j++;
    }

    return sortedArray;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([11, 2, 4, 4, 8, 9, 10, 1, 3, 5, 6, 7]));
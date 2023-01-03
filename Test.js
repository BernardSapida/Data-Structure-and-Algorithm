function quickSort() {
    let arr = [1, 2, 3];

    function swap(arr1) {
        arr1[0] = 10;
    }

    swap(arr);

    return arr;
}

console.log(quickSort());
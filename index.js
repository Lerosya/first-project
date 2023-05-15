const boobleSort = (arr) => {
    let swaped = true;

    while (swaped) {
        swaped = false;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swaped = true;
            }
        }
    }

    return arr;
}

const res = boobleSort([5, 4, 3, 2, 1]);
console.log(res);
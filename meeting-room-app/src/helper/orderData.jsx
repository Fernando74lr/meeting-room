// Sort by datetime the array of objects using Bubble Sort
export const bubbleSort = (array) => {
    let temp = 0, count = 0;
    while(count !== array.length) {
        // console.log(array);
        for(let i = 0; i < array.length; i++) {
            if (array[i + 1]) {
                if (Number(array[i].id) > Number(array[i + 1].id)) {
                    temp = array[i + 1];
                    array[i + 1] = array[i];
                    array[i] = temp;
                }
            }
        }
        count++;
    }
    return array;
}

// Sort by datetime the array of objects using Bubble Sort
export const bubbleSortTime = (array) => {
    let temp = 0, count = 0;
    while(count !== array.length) {
        // console.log(array);
        for(let i = 0; i < array.length; i++) {
            if (array[i + 1]) {
                if (Number(array[i].order) > Number(array[i + 1].order)) {
                    temp = array[i + 1];
                    array[i + 1] = array[i];
                    array[i] = temp;
                }
            }
        }
        count++;
    }
    return array;
}
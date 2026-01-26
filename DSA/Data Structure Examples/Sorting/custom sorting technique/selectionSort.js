
function selectionSortAsc(arr) {
    let length = arr.length;
    for(i=0;i<length-1;i++){
        console.log("Outer Loop i:", i);
        let minIndex = i;       // assume the minimum is the first element
        console.log("Current i:", i);
        for(j=i+1;j<length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;   // update minIndex if the element at j is lower than current minimum
            }
        }
        console.log("Min Index:", minIndex);
        // swap the found minimum element with the first element
        if(minIndex != i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        console.log("Array after iteration", i, ":", arr);
    }
    return arr
}

function selectionSortDesc(arr) {
        let length = arr.length;
    for(i=0;i<length-1;i++){
        let minIndex = i;       // assume the minimum is the first element

        for(j=i+1;j<length;j++){
            console.log("Checking condition for j:", j);
            if(arr[j]>arr[minIndex]){
                minIndex = j;   // update minIndex if the element at j is lower than current minimum
            }
            console.log("Current minIndex:", minIndex);
        }

        // swap the found minimum element with the first element
        if(minIndex != i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            console.log("Swapped elements at index", i, "and", minIndex);
        }
    }
    return arr
}
let num = [5,1,4,2,8];
//let num = [1,2,3,4];
console.log("Unsorted Array:", num);
selectionSortAsc(num);
console.log("Sorted Array in Ascending Order:", num);
selectionSortDesc(num);
console.log("Sorted Array in Descending Order:", num);
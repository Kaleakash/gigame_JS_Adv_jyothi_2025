
function insertionSortAsc(arr) {
    let length = arr.length;
    for(i = 1;i<length;i++){
        let key = arr[i];
        var j = i - 1;
            console.log("Inserting key:", key, "at position", i);
            console.log("Current array state:", arr);
        while(j >= 0 && arr[j] > key){
            arr[j + 1] =  arr[j];
            j = j - 1;
            console.log("Shifting element:", arr[j + 1], "to position", (j + 2));
        }
        console.log("Placing key:", key, "at position", (j + 1));
        arr[j + 1] = key;
        console.log("Array after inserting key:", arr);
        console.log("-----------------------------");
    }
    return arr;
}

function insertionSortDesc(arr) {
    let length = arr.length;
    for(i = 1;i<length;i++){
        let key = arr[i];
        var j = i - 1;
        console.log("Inserting key:", key, "at position", i);
        console.log("Current array state:", arr);
        while(j >= 0 && arr[j] < key){
            arr[j + 1] =  arr[j];
            j = j - 1;
            console.log("Shifting element:", arr[j + 1], "to position", (j + 2));
        }
        console.log("Placing key:", key, "at position", (j + 1));
        arr[j + 1] = key;
        console.log("Array after inserting key:", arr);
    }
    return arr;
}
let num = [5,1,4,2,8];
//let num = [1,2,3,4];
console.log("Unsorted Array:", num);
insertionSortAsc(num);
console.log("Sorted Array in Ascending Order:", num);
insertionSortDesc(num);
console.log("Sorted Array in Descending Order:", num);
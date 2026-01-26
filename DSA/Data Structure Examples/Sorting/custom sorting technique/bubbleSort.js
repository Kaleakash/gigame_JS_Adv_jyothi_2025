
function bubbleSortAsc(arr) {
    let length = arr.length;
    for(i=0;i<length-1;i++){
    console.log("Pass:", i);        
        for(j=0;j<length-1-i;j++){
            console.log("Comparing:", arr[j], "and", arr[j+1]);
            if(arr[j] > arr[j+1]){
                // swap the elements if condition true 
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                console.log("Swapped:", arr[j], "and", arr[j+1]);
            }
        }
        console.log("Array after pass", i, ":", arr);
    }
}

function bubbleSortDesc(arr) {
    let length = arr.length;
    for(i=0;i<length-1;i++){
        
        for(j=0;j<length-1-i;j++){
            if(arr[j] < arr[j+1]){
                // swap the elements if condition true 
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }

    }
}
let num = [5,1,4,2,8];
//let num = [1,2,3,4];

console.log("Unsorted Array:", num);
bubbleSortAsc(num);
console.log("Sorted Array in Ascending Order:", num);
bubbleSortDesc(num);
console.log("Sorted Array in Descending Order:", num);
function quickSortAsc(arr) {
    if (arr.length <= 1) return arr

    //let pivot = arr[0];    // using first element as pivot
    let pivot = arr[arr.length - 1]; // Using last element as pivot
    //let pivot = arr[Math.floor(arr.length / 2)]; // Using middle element as pivot
    console.log("Pivot:", pivot)
    let left = []
    let right = []
    // Partitioning
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    console.log("Left:", left, "Right:", right)
    let sortedLeft = quickSortAsc(left)
    console.log("Sorted Left:", sortedLeft)
    let sortedRight = quickSortAsc(right)
    console.log("Sorted Right:", sortedRight)

    return sortedLeft.concat(pivot, sortedRight)
}

function quickSortDesc(arr) {
    if (arr.length <= 1) return arr

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    let sortedLeft = quickSortDesc(left)
    let sortedRight = quickSortDesc(right)

    return sortedLeft.concat(pivot, sortedRight)
}

// Working Example
let data = [5, 1, 4, 2, 8]

// preserve original array
let ascData = data.slice()
let descData = data.slice()

console.log("Before Sort:", data)
console.log("After ASC Sort:", quickSortAsc(ascData))
//console.log("After DESC Sort:", quickSortDesc(descData))

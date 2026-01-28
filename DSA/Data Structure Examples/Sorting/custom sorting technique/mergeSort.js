function mergeSortAsc(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    console.log("Mid:", mid)
    let left = mergeSortAsc(arr.slice(0, mid))
    console.log("Left:", left)
    let right = mergeSortAsc(arr.slice(mid))
    console.log("Right:", right)

    return mergeAsc(left, right)
}

function mergeAsc(left, right) {
    let result = []         // extra array for merged result
    let i = 0, j = 0

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            console.log("Merging:", left[i], "<=", right[j])
            result.push(left[i])
            console.log("result", result)
            i++
        } else {
            console.log("Merging:", left[i], ">", right[j])
            result.push(right[j])
            console.log("result", result)
            j++
        }
    }
    // remaining elements which left in either left or right
    while (i < left.length) {
        console.log("Remaining Left:", left[i])
        result.push(left[i])
        console.log("result", result)
        i++
    }

    while (j < right.length) {
        console.log("Remaining Right:", right[j])
        result.push(right[j])
        console.log("result", result)
        j++
    }

    return result
}

function mergeSortDesc(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSortDesc(arr.slice(0, mid))
    let right = mergeSortDesc(arr.slice(mid))

    return mergeDesc(left, right)
}

function mergeDesc(left, right) {
    let result = []
    let i = 0, j = 0

    while (i < left.length && j < right.length) {
        if (left[i] >= right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        result.push(left[i])
        i++
    }

    while (j < right.length) {
        result.push(right[j])
        j++
    }

    return result
}

// Working Example
let data = [5, 1, 4, 2, 8]

// preserve original array
let ascData = data.slice()
let descData = data.slice()

console.log("Before Sort:", data)
console.log("After ASC Sort:", mergeSortAsc(ascData))
//console.log("After DESC Sort:", mergeSortDesc(descData))

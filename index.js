function findMinAndRemove(array){
    let findSmallest = array[0]
    for(let index = 1 ;index < array.length ;++index){
        if(findSmallest > array[index]){
            findSmallest = array[index]
            var smallestIndex = index
        }
    }
    return array.splice(smallestIndex, 1)
}

function insertionSort(array){
    const sortedArray = []
    while(array.length){
        sortedArray.push(...findMinAndRemove(array))
    }
    return sortedArray
}

console.log(findMinAndRemove([1,2,3,4]))
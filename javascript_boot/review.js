//push front given an array push the new value to the front. Do this without using any built in functions

function pushFront(arr, val){
    for(let idx = arr.length; idx>=1; idx--){
        arr[idx] = arr[idx- 1];
        console.log(arr);
    }
    arr[0] =val;
    return arr;
}

pushFront([1,2,3,4],99)

console.log(pushFront([1,2,3,4],99))

//popfront - givn an array, remove and return the value at the beginningg of the array. do this withouy builtins

function popFront(arr){
    console.log(arr);
    let returnVal = arr[0];
    for(let x = 0; x<arr.length; x++){
        arr[x] = arr[x+1];
        console.log(arr);
    }
    arr.length --; // arr.pop()
    return returnVal
}

popFront([1,2,3,4])

console.log(popFront([4,2,5,1]))

// insert at =  given an array, index, and additional value, insert the value into array at given index. Do this without using built ins

function insertAt(arr, idx, val){
    console.log(arr);
    for(let z = arr.length; z>idx; z--){
        arr[z] = arr[z- 1];
    }
    arr[idx] = val;
    return arr;
}

//removeAt

function removeAt(arr, idx){
    console.log(arr);
    let returnVal = arr[idx];
    for(let p = idx; arr.length>p; p++){
        arr[x] = arr[x+1];
        console.log(arr);   
    }
    arr.pop() // arr.length--
    return renturnVal;
}

console.log(removeAt([1,2,3,4],2))
// double vision
function doubleVision(arr){
    let newArr = [];
    for(let x = 0; arr.length>x; x++){
        newArr.push(arr[x]*2);
    }
    return newArr;
}
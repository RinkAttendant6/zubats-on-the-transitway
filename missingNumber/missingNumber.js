'use strict';

function missingNumber(arr) {
    arr = arr.sort((a,b)=>a-b);
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
}

export default missingNumber;

'use strict';

function arraySumAdjacentDifference(inputArray) {
    let s = 0;
    
    for (let i = 1; i < inputArray.length; i++) {
        s += Math.abs(inputArray[i] - inputArray[i - 1]);
    }
    
    return s;
//     hello
}

export default arraySumAdjacentDifference;

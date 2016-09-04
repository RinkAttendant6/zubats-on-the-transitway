'use strict';

function isPrime(x) {
    x = Math.abs(x);
    
    if (x <= 1 || (x % 2 == 0 && x !== 2)) {
        return false;
    }
    
    for (let i = 3; i < x; i += 2) {
        if (x % i === 0) {
            return false;
        }
    }
    
    return true;
}

export default isPrime;

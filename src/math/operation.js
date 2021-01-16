
export function multiply(value) {
    return value.reduce((total, val) => (total*val), 1);
}

export function subtract(total, value) {
    return value.reduce((total,val) => (total-val),total);
}

export function divide(first,second) {
    return first/second;
}


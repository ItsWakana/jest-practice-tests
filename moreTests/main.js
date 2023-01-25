export const findBiggest = (array) => {
    return array.sort((a,b) => a > b ? -1 : 1)[0];
}

export const findSmallest = (array) => {
    return array.sort((a,b) => a > b ? 1 : -1)[0];
}
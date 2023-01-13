const analyzeArray = (array) => {
    const sorted = array.sort((a,b) => a > b ? 1 : -1);

    const length = sorted.length;
    const average = sorted.reduce((prev, curr) => prev + curr, 0) / length;
    const min = sorted[0];
    const max = sorted[length - 1]; 

    
    return { average, min, max, length }
}

module.exports = analyzeArray;
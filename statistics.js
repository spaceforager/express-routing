/** Find the mean of a given array */
const mean = arr => [...arr].reduce((acc, currVal) => acc + currVal) / arr.length;

/** Find the mode (most common element) of a given array */
const frequency = arr => {
    return [...arr].reduce((acc, currVal) => {
        acc[currVal] = (acc[currVal] || 0) + 1;
        return acc;
    }, {});
}

const mode = arr => {
    let freqResult = frequency(arr);
    let count = 0;
    let mostFrequent;

    for (let key in freqResult) {
        if (freqResult[key] > count) {
            mostFrequent = key;
            count = freqResult[key];
        }
    }

    return +mostFrequent;
}

/** Find the median of a given array */

const median = arr => {
    let median;
    const sortedArr = [...arr].sort((a, b) => a - b);

    let midIndex = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
        median = (sortedArr[midIndex] + sortedArr[midIndex - 1]) / 2;
    } else {
        median = sortedArr[midIndex];
    }
    return median;
}



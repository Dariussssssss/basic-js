const {NotImplementedError} = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    const cats = '^^';
    let count = 0;

    matrix.forEach((item) => {
        let res = item.filter(el => el === cats)
        count = count + res.length;
    })
    return count;
}

module.exports = {
    countCats
};

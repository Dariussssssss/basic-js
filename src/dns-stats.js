const {NotImplementedError} = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let domain = {};

    domains.forEach(e => {

        let parts = e.split('.').reverse();
        let current = '';

        parts.forEach(el => {
            current += `.${el}`;
            if (domain[current] === undefined) {
                domain[current] = 1;
            } else {
                domain[current]++;
            }
        });
    });

    return domain;
}

module.exports = {
    getDNSStats
};

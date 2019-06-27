/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let len = Math.max(a.length, b.length);
  let result = [];
  let carray = 0;
  let ac = a.split('').reverse();
  let bc = b.split('').reverse();

  for(let i = 0; i < len; i++) {
    let av = ac[i] === '1' ? 1 : 0;
    let bv = bc[i] === '1' ? 1 : 0;

    result.push((av + bv + carray)%2)
    carray = Math.floor((av + bv + carray)/2)
  }

  return result.concat(carray || undefined).reverse().join('');
};


/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(!digits || !digits.length) {
      return []
    }

    let array = 0;
    for(let i = digits.length - 1; i >= 0; i--) {
      let sum = digits[i] + array + (i === digits.length - 1 ? 1 : 0)
      array = parseInt(sum / 10)
      digits[i] = sum % 10
    }

    array && digits.unshift(array)
    return digits
};


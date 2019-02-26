/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.08%)
 * Total Accepted:    604K
 * Total Submissions: 2.4M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let absX = Math.abs(x);
    let range = Math.pow(2, 31);
    let strX = absX.toString();

    let num = strX.split("").reverse().join(""); //数字反转
    num = parseInt(num);

    if(x > 0 && x < range && num < range) { //0 -> range
        return num
    } else if(x < 0 && x > -range-1 && -num > -range-1) { //range -> 0
        return num * -1
    } else {
        return 0
    }
};

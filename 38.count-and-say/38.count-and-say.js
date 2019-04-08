/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.82%)
 * Total Accepted:    266.9K
 * Total Submissions: 670K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the n^th term of the
 * count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "1211"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    //相同 记个数
    //不相同
    let str = "1";
    if(n === 1) return str;

    for(let i = 0; i < n-1; i++) {
        let strs = str.split("");
        let count = 1;

        str = "";
        for(let j = 0; j < strs.length; j++) {
            if(strs[j] !== strs[j+1]) {
                str = str + count.toString() + strs[j]
                count = 1
            } else {
                count++
            }
        }
    }
    return str;
};


/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.42%)
 * Total Accepted:    472.8K
 * Total Submissions: 1.8M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 1) return s

    let longest = "";

    for(let i = 0; i < s.length - 1; i++) { //超过长度的退出
        let w1 = findWord(i, i); //查找奇数
        let w2 = findWord(i, i+1); //查找偶数
        let word = w1.length > w2.length ? w1 : w2; //取最大的回文

        if(word.length >= longest.length) {
            longest = word;
        }
    }

    return longest;

    function findWord(left, right) { //从中间向两边扫描
        let L = left;
        let R = right;

        while(L >= 0 && R < s.length && s[L] === s[R]) {
            L--;
            R++;
        };

        return s.slice(L+1, R)
    }
};

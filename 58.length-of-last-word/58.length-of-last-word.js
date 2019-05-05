/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(!s) return 0
    
    return s.trim().split(' ').slice(-1)[0].length
};


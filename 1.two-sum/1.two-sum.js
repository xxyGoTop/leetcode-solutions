/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (40.31%)
 * Total Accepted:    1.5M
 * Total Submissions: 3.6M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 耗时 240ms
var twoSum = function(nums, target) {
    let result = [];
    
    nums.forEach((num, index) => {
        let remd = target - num;
        let psite = nums.indexOf(remd);

        if(psite != -1 && psite != index){
            result = [index, psite]
        }
    })

    return result
};

// 耗时 60ms
var twoSum = function(nums, target) {
    const map = {};

    for(let i = 0; i < nums.length; i++) {
        const n = nums[i];

        if(target - n in map) {
            return [map[target - n], i]
        } else {
            target[n] = i
        }
    }
}

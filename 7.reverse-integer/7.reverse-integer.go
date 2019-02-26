/*
 * @lc app=leetcode id=7 lang=golang
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
package reverseInteger

import (
	"math"
	"strconv"
)

func reverse(x int) int {
	absX := int(math.Abs(float64(x)))
	strX := strconv.Itoa(absX)
	rangeX := math.Pow(2, 31)
	reverX := []rune(strX)

	for i, j := 0, len(reverX)-1; i < j; i, j = i+1, j-1 {
		reverX[i], reverX[j] = reverX[j], reverX[i]
	}

	strX = string(reverX)
	intX, err := strconv.Atoi(strX)

	if err != nil {

	}

	if float64(x) > 0 && float64(x) < rangeX && float64(intX) < rangeX {
		return intX
	} else if float64(x) < 0 && float64(x) > -rangeX-1 && -float64(intX) > -rangeX-1 {
		return -intX
	} else {
		return 0
	}
}

func reverse2(x int) int {
	res := 0
	for x != 0 {
		n := x % 10
		res = res*10 + n

		if float64(res) < math.Pow(-2, 31) || float64(res) > math.Pow(2, 31)-1 {
			return 0
		}

		x = (x - n) / 10
	}

	return res
}

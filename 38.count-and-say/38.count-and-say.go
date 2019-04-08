/*
 * @lc app=leetcode id=38 lang=golang
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
func countAndSay(n int) string {
	str := "1"
	
	if n == 1 {
		return "1"
	}

	for i:=0; i<n-1; i++ {
		lt, count, temp := str[0], 0, ""

		for j:=0; j<len(str); j++ {
			if lt == str[j] {
				count += 1
			} else {
				temp = fmt.Sprintf("%s%d%c", temp, count, lt)
				lt = str[j]
				count = 1
			}
		}
		temp = fmt.Sprintf("%s%d%c", temp, count, lt)
		str = temp
	}

	return str
}


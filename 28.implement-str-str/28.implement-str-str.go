/*
 * @lc app=leetcode id=28 lang=golang
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (31.58%)
 * Total Accepted:    406.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 * 
 */
func strStr(haystack string, needle string) int {
    if len(needle) == 0 {
			return 0
		}

		i := 0
		for i < len(haystack) {
			if haystack[i] == needle[0] {
				j := 1
				for ; j < len(needle); j++ {
					if i + j >= len(haystack) || haystack[i+j] != needle[j] {
						break
					}
				}

				if j == len(needle) {
					return i
				}
			}
			i++
		}

		return -1
}


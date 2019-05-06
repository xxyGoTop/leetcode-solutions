/*
 * @lc app=leetcode id=58 lang=golang
 *
 * [58] Length of Last Word
 */
import (
	"strings"
)

func lengthOfLastWord(s string) int {
    if len(s) == 0 {
			return 0
		}

		ss := strings.Trim(s, " ")
		s1 := strings.Fields(ss)
		s3 := ""
		
		for key, value := range s1 {
			if len(s1) == (key + 1) {
				s3 = value
			}
		}

		return len(s3)
}


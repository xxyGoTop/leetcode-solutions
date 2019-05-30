package plusOne

/*
 * @lc app=leetcode id=66 lang=golang
 *
 * [66] Plus One
 */
func plusOne(digits []int) []int {
	if digits == nil || len(digits) == 0 {
		return []int{}
	}

	array := 0
	lenght := len(digits) - 1

	for i := lenght; i >= 0; i-- {
		sum := 0
		if i == lenght {
			sum = digits[i] + array + 1
		} else {
			sum = digits[i] + array + 0
		}
		array = sum / 10
		digits[i] = sum % 10
	}

	if array != 0 {
		return append([]int{array}, digits[0:]...)
	}
	return digits
}

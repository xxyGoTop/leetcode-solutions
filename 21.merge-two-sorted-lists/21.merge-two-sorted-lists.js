/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (45.58%)
 * Total Accepted:    508.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
   const r = { val: null, next: null };
   let n = r; //利用引用类型得特性

   while(l1 !== null || l2 !== null){
        if(l1 === null) {
            n.next = l2;
            l2 = l2.next;
        }else if(l2 === null) {
            n.next = l1;
            l1 = l1.next;
        } else if(l1.val < l2.val) {
            n.next = l1;
            l1 = l1.next;
        } else {
            n.next = l2;
            l2 = l2.next;
        }

        n = n.next
   }

   return r.next
};

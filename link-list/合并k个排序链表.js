/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    const temp = [];
    if(lists.length === 0) return null;
    for(let i = 0;i < lists.length;i ++) {
        while(lists[i]) {
            temp.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    if(temp.length === 0) return null; // 校验全为空数组边界条件
    temp.sort((a,b) => a - b);
    const head = new ListNode(temp[0]);
    let res = head;
    for(let i = 1;i < temp.length;i ++) {
        res = res.next = new ListNode(temp[i]);
    }
    return head;
};

// [[1,4,5],[1,3,4],[2,6]] => [1,1,2,3,4,4,5,6]
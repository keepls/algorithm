/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

 var copyRandomList = function(head, cachedNode = new Map()) {
    if (head === null) {
        return null;
    }
    if (!cachedNode.has(head)) {
        cachedNode.set(head, {val: head.val}), Object.assign(cachedNode.get(head), {next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode)})
    }
    return cachedNode.get(head);
}

// [[7,null],[13,0],[11,4],[10,2],[1,0]] => [[7,null],[13,0],[11,4],[10,2],[1,0]]

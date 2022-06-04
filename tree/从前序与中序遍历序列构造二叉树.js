/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 var buildTree = function(preorder, inorder) {
    if(!inorder.length) return null
    let temp = preorder[0], mid = inorder.indexOf(temp)
    let root = new TreeNode(temp)
    root.left = buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid))
    root.right = buildTree(preorder.slice(mid+1),inorder.slice(mid + 1))
    return root
};
入
// [3,9,20,15,7]   =>  [3,9,20,null,null,15,7]
// [9,3,15,20,7]  





// [-10,-3,0,5,9]  =>  [0,-3,9,-10,null,5]
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



const sortedArrayToBST = nums => {
    if (!nums.length) return null;
    // 去中间索引
    const mid = nums.length >> 1
    //  构建二叉树，根节点为中间值，左子树为左侧值继续构建，右子树为右子树继续构建
    const root = new TreeNode(
        nums[mid],
        sortedArrayToBST(nums.slice(0,mid)),
        sortedArrayToBST(nums.slice(mid+1))
    )
    return root;
}
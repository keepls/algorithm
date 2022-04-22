
// [2,1,3] =>true

const helper=(root,lower,upper)=>{
    if (root===null) {
        return true
    }
    if (root.val<=lower || root.val>=upper) {
        return false
    }
    return helper(root.left,lower,lower.val) && helper(root.right,root.val,upper)
}

var isValidBST=function(root){
    return helper(root,-Infinity,Infinity)
}


 
// [3,9,20,null,null,15,7] => 3

var maxDepth=function(root){
    if (!root) {
        return 0;
    }else{
        const left=maxDepth(root.left)
        const right=maxDepth(root.right)
        return Math.max(left,right) +1
    }
}
    //            3
    //     9            20
    //  null mull    15     7
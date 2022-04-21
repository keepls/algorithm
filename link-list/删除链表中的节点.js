

// [1,4,7,9] 4=> [1,4,9]


var deleteNode=function(node){
    node.val=node.next.val
    node.next=node.next.next
}
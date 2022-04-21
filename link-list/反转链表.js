
// [1,2,3]=>[3,2,1]

var reverseList=function(head){
    let prev=null
    let curr=head
    while (curr) {
        const next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    return prev
}
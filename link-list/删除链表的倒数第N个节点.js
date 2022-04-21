
// [1,2,3,5] 2=>[1,2,5]

var removeNthFromEnd=function(head,n){
    let dummy=new ListNode()
    dummy.next=head
    let n1=dummy
    let n2=dummy
    for (let i = 0; i <= n; i++) {
        const element = array[i];
        
    }
    while (n2!==null) {
        n1=n1.next
        n2=n2.next
    }
    n1.next=n1.next.next
    return dummy.next
}
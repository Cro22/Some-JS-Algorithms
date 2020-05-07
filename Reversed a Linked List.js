// reverse a linked list
const reverseLinkedList = function(linkedlist) {
    let node = linkedlist;
    let previous = null;

    while(node) {
        const save = node.next;
        node.next = previous;
        previous = node;
        node = save;
    }
    
    return previous;
}
linkedlist = reverseLinkedList(linkedlist);
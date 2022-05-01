/*
- remove the item from the end  
- move tail to previous item 
- return item that was removed

Edge Cases:
- might have a linked list with no items
- if we have one item
*/

class NodeClass {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LL {
    constructor(val){
        const newNode = new NodeClass(val)
        this.head = newNode
        this.tail = this.head //head and tail same val
        this.length = 1
    }

    push(val) {
        const newNode = new NodeClass(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
        }
    this.length += 1
    return this
    }

    pop() {
        if(!head) {
            return null
        }
        else {
            return this.length - 1
            this.length -= 1
        }
    }
}

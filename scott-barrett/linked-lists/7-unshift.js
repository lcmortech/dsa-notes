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
            this.tail = newNode
        }
    this.length += 1
    return this
    }

    pop() {
        if(!this.head) {
            return undefined //not null
        }
            let temp = this.head
            let prev = this.head

            while(temp.next) { //while its the case
                prev = temp
                temp = temp.next
            }
            this.tail = prev
            this.tail.next = null
            this.length -= 1
            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
            return temp  
    }

    unshift(val) {
        const newNode = new NodeClass(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

}
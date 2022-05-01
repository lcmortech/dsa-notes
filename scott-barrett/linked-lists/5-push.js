/*
- create a new node
- the last node point to it
- have tail point to it
- if it has no nodes, then have head and tail point to it 
*/

class NodeClass {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const newNode = new NodeClass(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){
        const newNode = new NodeClass(value)
        this.head = newNode
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next === newNode
            this.tail = newNode
        }
        this.length += 1
        return this //this entire linkedlist w/ node add
    }
}
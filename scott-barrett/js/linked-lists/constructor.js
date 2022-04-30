/*
class LinkedList {
    constructor(value){
        creates new node
    }
    push(value){
        creates new node
        adds node to the end
    }
    unshift {
        creates new node
        adds node to the beginning
    }
    insert(index, value){
        creates new node
        inserts node
    }
}
* all the methods create a new node, so it makes more sense to create a separate class for Node creation. This class can then be called by the methods in the linked list.

class Node {
    constructor(value){ //the value will be the param
        this.value = value
        this.next = null
    }
}

const newNode = new Node(4)

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head or newNode
        this.length = 1
    }
}

let myLinkedList = new LinkedList(4)



*/
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

let a = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')

a.next = b
b.next = c
c.next = d

/*const listTraversal = (head)=>{
    let current = head
    while(current !== null){
        console.log(current.val)
        current = current.next
    }
}*/

const listTraversal = (head)=>{ //parameter
    if(head === null){
        return;
    } else {
        console.log(head.val)
        listTraversal(head.next) //argument
    }
}

listTraversal(a)
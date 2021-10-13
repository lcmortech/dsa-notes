//Methods: Push and Pop
//2 Ways:
//Use in-built
//Create the methods (preffered)

class Stack {
    constructor(){
        this.items = []; //the stack's array that's being modified
        this.count = 0; //the index
    }
    
    //Add element to top of stack
    push(element){
        this.items[this.count] = element
        this.count++ //increases/lengthens array
        console.log(element)
        return this.count - 1
    }
    
    //Return and remove top element in stack
    //Return undefined if stack is empty
    pop(){
        if(this.count === 0) return undefined
        let deleteItem = this.items[this.count]
        this.count-- //decreases/shortens array
        console.log(`${deleteItem} removed`)
        return deleteItem
    }
    
    //Check top element in stack
    peek(){
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }
    
    //Check if stack is empty
    isEmpty (){
        console.log(this.count === 0? 'Stack is empty': 'Stack is not empty')
        return this.count === 0
    }
    
    //Check size of stack
    size(){
        console.log(`${this.count} elements in the stack`)
        return this.count
    }
    
    //Print elements in stack
    print(){
        let str = ''
        for(let i = 0; i < this.count; i++){
            str += this.items[i] + ' '  
        }
        return str
    }
    
    clear(){
        this.items = [];
        this.count = 0;
        console.log('Stack cleared...')
        return this.items
    }
    
    
}
        
//Breakdown: Push
//aka: the index of the the items array is incremented and set to each element passed through 'push', adding each element passed through to the end of the array
//without incrementation, each element passed through would just replace the previous one
//returning "this.count - 1" resets the index being added to the last position
//console log keeps track of what's going on
//the index you want is this.count
//that index is then set to the element passed through 'push'
//adds 100,200, and 300 to items array, respectively

//Breakdown: Pop
//aka: a conditional is checked to see is the current index is empty, or equal to 0. If true, return undefined, as well as decrease the index by one. Then, return the current index. 
//first line - the conditional statement
//second line - placing the index or count of the array in the variable to be returned/removed.
//third line - decrementing to previous index/count by one
//returning/removing the current index

//We don't want to replace the str, we want to append, so we use +=


//Test cases
const stack = new Stack()


stack.push(100)
stack.push(200)
stack.push(300)

console.log(stack.print())

stack.peek()

stack.pop()
stack.pop()

stack.clear()

console.log(stack.print())

console.log(stack.pop())
console.log(stack.push())

stack.size()

stack.isEmpty();
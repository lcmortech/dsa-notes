//Methods: Push and Pop
//2 Ways:
//Use in-built
//Create the methods (preferred)

class Stack {
    constructor(){
        this.items = [] //the stack's array that's being modified
        this.count = 0 //the index
    }
    
    //Add element to top of stack
    push(element){
        this.items[this.count] = element
        this.count++ //increases/lengthens array
        console.log(`${element} added to ${this.count}`)
        return this.count - 1
    }
    
    //Return and remove top element in stack
    //Return undefined if stack is empty
    pop(){
      if(this.count === 0) return undefined
      let deleteItem = this.items[this.count]
      this.count-- //decreases/shortens array
      
      return deleteItem
    }     
        
}        
//Breakdown: Push
//AKA: the index of the the items array is incremented and set to each element passed through 'push', adding each element passed through to the end of the array
//without incrementation, each element passed through would just replace the previous one
//returning "this.count - 1" resets the index being added to the last position
//console log keeps track of what's going on
//the index you want is this.count
//that index is then set to the element passed through 'push'
//adds 100,200, and 300 to items array, respectively
        


const stack = new Stack();


stack.push(100)
stack.push(100)
stack.push(100)
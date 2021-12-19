class MyArray {
    constructor(){
        this.length = 0;
        this.data={};
    }
    
    getItem(index) {
        return this.data[index];
    }
    
    pushItem(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    
    popItem(){
        const endItem = this.data[this.length-1];
        delete endItem;
        this.length--;
        return endItem;
    }
    
    deleteItem(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    
    shiftItems() {
        for(let i = index; i < this.length - 1; i ++) {
            this.data[i] = this.data[+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newarray.pushItem(6);

console.log(newArray);
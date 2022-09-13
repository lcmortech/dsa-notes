/*
ITERATION
Iteration is the process of accessing each of the items contained within a data structure. There are multiple ways to iterate through an array in JavaScript. They all have a time complexity of O(n) since the iteration is visiting n number of elements.

//for (Variables; Condition; Modification)
for is the most common method of iteration. It is most often used in this form: 

for ( let i=0, len=array1.length; i<len; i++ ) {
console.log(array1[i])
}

The previous code simply means initialize the variable i, check whether the condition is false before executing the body (i,len), and then modify (i++) until the condition is false. Similiarly, you can use a WHILE loop. However, the counter will have to be set outside.

let counter = 0
while(counter < array1.length) {
    //insert code here
    counter++;
}

You can implement an infinite loop using a while loop as shown here:
while(true){
    if(breakCondition){
    break;
    }
}

Similarly, a for loop can implement an infinite loop by not setting a condition, as shown here:

for(;;){
    if(breakCondition){
        break
    }
}

//for(in)
Another way to iterate a Javascript array is to call the indices one by one. The variable specified before in is the index of the array, as follows:
let array1 = ['all', 'cows', 'are', 'big']

for(let index in array){
    console.log(index)
}
This prints out the following : 0, 1, 2, 3
To print the content, use this:
for(let index in array){
    console.log(array1[index])
}
This prints  'all, cows, are, big'

//forEach()
The big difference between forEach and other methods of iteration is that forEach cannot break out of the iteration or skip certain elements in the array. forEach is more expressive and explicit by going through each element.

let array1 = ['all', 'cows', 'are', 'big']
array1.forEach(function (element, index){
    console.log(element)
})

array.forEach(function(element, index){
    console.log(array1[index])
})

Both print 'all, cows, are, big'
*/
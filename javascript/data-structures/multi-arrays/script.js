//Multi-Dimensional Array, otherwise known as a Grid or Matrix. It is an array made up of multiple arrays.


//Example

const iceCreamFlavors = [
    ['chocolate','fudge','brownie'],
    ['strawberry','blueberry','peach'],
    ['vanilla','french vanilla', 'toffee']
]

console.log(iceCreamFlavors[0][1]);
//fudge
console.log(iceCreamFlavors[1][2]);
//peach
console.log(iceCreamFlavors[2][1]);
//french vanilla

//Traversal/Looping through a multi-array
for (let i = 0; i < iceCreamFlavors.length; i++){
    
    for (let j = 0; j < iceCreamFlavors[i].length; j++){
        
        console.log(i, j, iceCreamFlavors[i][j]);
    }
}

//Breakdown:
//For each indices along the length of the array iceCreamFlavors ([i]), loop over and console log the indices for each inner array ([j]).

//runtime: nested for loop, O(n^2)
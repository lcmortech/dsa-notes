const uncompress = (str) => {
    nums = '0123456789' //for reference
    let result = ''
    let i = 0 //prints out the chars via concat + iteration
    let j = 0 //iterates over the nums, ends at first char

    while (j < str.length){
        if(nums.includes(str[j])){
            j += 1
        } else { //fires at the end of the number
            const num = Number(str.slice(i, j)) 
            //(starts at i ends bf j) - results in just the number
            for(let count = 0; count < num; count += 1) {
                result += str[j] //concat j to string
            }
            j += 1 //iterates over and updates j
            i = j //updates i to j's values
        }
    }

    return result
}

//concat = O(n) time complexity
//push = O(1) time complexity

/*const uncompress = (str) => {
    nums = '0123456789' //for reference
    let result = []
    let i = 0 //prints out the chars via concat + iteration
    let j = 0 //iterates over the nums, ends at first char

    while (j < str.length){
        if(nums.includes(str[j])){
            j += 1
        } else { //fires at the end of the number
            const num = Number(str.slice(i, j)) 
            //(starts at i ends bf j) - results in just the number
            for(let count = 0; count < num; count += 1) {
                result += str[j] //push j into array
            }
            j += 1 //iterates over and updates j
            i = j //updates i to j's values
        }
    }

    return result
} */

//concat = O(n) time complexity
//push = O(1) time complexity
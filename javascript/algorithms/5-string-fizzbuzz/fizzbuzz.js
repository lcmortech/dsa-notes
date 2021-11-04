function fizzBuzz(n){
//directions specifically state to start at 1, NOT 0
    for(let i = 1; i <= n; i++){
        if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizzbuzz");
        }
        else {
            console.log(i);
        }
    }
}

//switch (i) {
//            case (i % 3 === 0):
//                console.log("fizz");
//                break;
//            case (i % 5 === 0):
//                console.log("buzz");
//                break;
//            case (i % 3 === 0 && i % 5 === 0):
//                console.log("fizzbuzz");
//                break;
//            default:
//                return i;

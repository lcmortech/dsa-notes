//Object.keys()
//Object.values()
//Object.entries()

const user = {
    name: 'Dom',
    age: 32,
    occupation: 'Web Developer'
}

//console.log(Object.keys(user))
//['name','age','occupation']

//console.log(Object.values(user))
//['Dom', 32, 'Web Developer']


//for(let key of Object.keys(user)){
    //console.log(key) gets keys
    //console.log(user[key]) gets values
    //console.log(`${key} => ${user[key]}`)
//}

//console.log(Object.entries(user))
//[['name', 'Dom'],['age', 32],['occupation','Web Developer']]

//for(let entry of Object.entries(user)) {
    //console.log(entry[0])
    //console.log(entry[1])
    //console.log(`${entry[0]} => ${entry[1]}`)
//}

//for(let [key, value] of Object.entries(user)) {
    //console.log(key)
    //console.log(value)
    //console.log(`${key} => ${value}`)
//}

//index 0 contains your key, while index 1 contains your value
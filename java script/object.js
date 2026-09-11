// function multiplyBy5(num){
//     return num*5
// }
// multiplyBy5.power  = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)


// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is: ${this.score}`)
// }

// const chai = new createUser("Chai", 234)
// const tea = new createUser("Tea", 24)

// chai.printMe()




function SetUsername(username){
    this.username = username
    console.log("Called")
}
function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}
const nitin = new createUser("Nitin", "nitin@gmail.com", "2324")
console.log(nitin) 
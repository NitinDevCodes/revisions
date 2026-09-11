// const user = {
//     username: "Nitin",
//     loginCount: 3,

//     getUserDetails: function(){
//         console.log(`username: ${this.username}`)
//     }
// }
// // console.log(user)
// console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}
const userOne = new User("Nitin", 21, true)
const userTwo = new User("Nikhil", 11, false)

console.log(userOne)
console.log(userTwo)
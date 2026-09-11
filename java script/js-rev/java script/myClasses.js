// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     userCapital(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const nitin = new User("nitin", "nitin@gmail.com", "1223")

// console.log(nitin.encryptPassword())
// console.log(nitin.userCapital())


//BEHIND THE SCEBE

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc` 
}
User.prototype.userCapital = function(){
    return `${this.username.toUpperCase()}`
}

const nikhil = new User("nikhil", "nikhil@gmail.com", "1223")

console.log(nikhil.encryptPassword())
console.log(nikhil.userCapital())
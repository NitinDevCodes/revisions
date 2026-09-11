// let score = "Nitin"

// console.log(typeof score)
// console.log(typeof(score))

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// let isLogged = ""
// let booleanIsLoggedIn = Boolean(isLogged)
// console.log(booleanIsLoggedIn)



// let value = 123
// let negVal = -value
// console.log(negVal)

// console.log(3 === 2)

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId)
// console.table([typeof id, typeof anotherId])


// const myFunction = function(){
//     console.log("Hello World")
// }

// console.log(typeof myFunction)


// let userOne = {
//     email: "contactnitin.ibnox@gmail.com",
//     name: "Nitin"
// }

// let userTwo = userOne

// userTwo.email = "nkj7612@gmail.com"

// console.log(userOne.email)
// console.log(userTwo.email)

// const name = "Nitin"
// const repoCount = 45

// console.log(name.toUpperCase())
// // console.log(name + repoCount)
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)


// const score = 454
// const balance = new Number(234)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const otherNum = 23.93342

// console.log(otherNum.toPrecision(2))

// const currency = 100000000
// console.log(currency.toLocaleString('en-IN'))

// console.log(Math.random())

// const min = 10
// const max = 20
// console.log(Math.floor(Math.random()*(max-min+1)+min))


// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())


// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000)) 

// const arr = [4,5,6,7,3, "Nitin"]
// console.log(arr)
// console.log(arr.slice(2,4))
// console.log(arr.splice(2,4))
// console.log(arr)


// const names = ["Nitin", "Nikhil", "Sakshi", "Ankit"]
// const names2 = ["Durgesh", "Saurabh", "Anup"]

// const all_names = [...names, ...names2]
// console.log(all_names)


// const mySym = Symbol("Key1")
// const employee = {
//     name: "Nitin",
//     age: 24,
//     location: "Madhubani",
//     [mySym]: "myKey1",
//     email: "contactnitin.inbox@gmail.com",
//     salary: 100000,
//     lastLoggedIN: ["Monday", "Friday"]
// }
// console.log(employee.salary)
// console.log(employee["salary"])
// console.log(employee[mySym])

// // Object.freeze(employee)
// try{
//     employee.name = "Nikhil"
// }catch(err){
//     console.log(err.message)
// }
// console.log(employee)

// employee.greetings = function(){
//     console.log("Hello I'm Nitin!")
// }
// console.log(employee.greetings())



// const tinderUser = new Object()

// const tinderUser = {
//     // id : "123da",
//     // name : "Nitin",
//     // isLoggedIN : false
// }

// tinderUser.id = "1213sd"
// tinderUser.name = "Nitin"
// tinderUser.isLoggedIN = false

// console.log(tinderUser)


// const regularUser = {
//     email: "contactnitin@gmail.com",
//     fullName: {
//         userFullName: {
//             firstName: "Nitin",
//             secondName: "Jha"
//         }
//     }
// };
// console.log(regularUser.fullName.userFullName.firstName)



// const obj1 = {1:"a",  2:"d"}
// const obj2 = {3:"e", 4:"t"}

// // const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)



// const user1 = [
//     {
//         id: 1,
//         email: "nitin@gmail.com"
//     },
//     {
//         id: 2,
//         email: "nikhil@gmail.com"
//     },
//     {
//         id: 3,
//         email: "ankit@gmail.com"
//     }
// ]
// console.log(user1[0].email)
// console.log(user1.hasOwnProperty('email'))



// const course = {
//     courseName: "Api tool",
//     price: "599",
//     courseInstructor: "Nitin"
// }
// // course.courseInstructor
// // const{courseInstructor} = course
// // console.log(courseInstructor)
// const {courseInstructor: Instructor} = course
// console.log(Instructor)


// function repeat(){
//     console.log("Nitin")
//     console.log("jha")
// }
// repeat()


// function calci(num1, num2){
//     console.log(num1+num2)
// }

// calci(2,"Nitin")


// function calci(num1, num2){
//     // let res = num1+num2
//     // return res
//     return num1+num2
// }

// const result = calci(2,4)
// console.log("Result: ", result)



// function loggedInPage(name){
//     if(name === undefined){
//         console.log("Please enter a valid username")
//     }
//     else{
//         return `${name} just logged in`
//     }
// }
// console.log(loggedInPage())



// function cartValue(...num1){
//     return num1
// }
// console.log(cartValue(2,3,4,5,500))


// const user = {
//     name: "Nitin",
//     price: 599
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.name} and cart value is ${anyObject.price}`)
// }
// // handleObject(user)
// handleObject({
//     name: "Nikhil",
//     price: 499
// })



// const myArr = [233, 456, 56, 213]
// function value(arr){
//     return arr[1];
// }
// // console.log(value(myArr))
// console.log(value([34,23,43,5,53]))



// function one(){
//     const UserName = "Nitin"

//     function two(){
//         const website = "YouTube"
//         console.log(website)
//         console.log(UserName)
//     }
//     // console.log(website)

//     two()
// }
// one()



// const user = {
//     userName: "Nitin",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.userName}, welcome to website`)
//     }
// }
// user.welcomeMessage()


//  ARROW FUNCTIONS
// const chai = () => {
//     let name = "Nitin"
//     console.log(this)
// }
// chai()


// const calci = (num1, num2) => {
//     return num1+num2
// }
// console.log(calci(3,2))



// const calci = (num1, num2) => num1+num2
// const calci = (num1, num2) => (num1+num2)

// console.log(calci(3,2))


//   IIFE
(function chai(){
    console.log(`DATABASE CONNECTED`)
})();

( (name) => {
    console.log(`DATABASE CONNECTED TWICE ${name}`)
})("Nitin")
// const isUserLogggedIN = true

// if(isUserLogggedIN){
//     console.log("Yes")
// }

// const Month = 3
// switch (Month) {
//     case 1:
//         console.log("January")
//         break;
//     case 2:
//         console.log("Feb")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("April")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("June")
//         break;

//     default:
//         console.log("Invalid Month")
//         break;
// }



//  falsey value
//  false, 0, -0, BigInt 0n, "", null, undefined, NAN

//  truthy value
//  "0", "false", " ", [], {}, function(){}



// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){
//     console.log("Object is empty")
// }


// let val1;
// val1 = 3 ?? 5 ?? 2
// val1 = null ?? 10
// val1 = undefined ?? 4
// val1 = null ?? undefined
// val1 = null ?? 4 ?? 56

// console.log(val1)



// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// let i=0
// while (i <= 10) {
//     console.log(`"Nitin"`)
//     i++
// }

// do {
    
// } while (condition);


// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }

// const greetings = "Nitin"
// for(const greet of greetings){
//     console.log(greet)
// }


// const map = new Map()
// map.set('IN', "Intdia")
// map.set('USA', 'United States of America')
// map.set('Fr', 'France')
// map.set('USA', 'United States of America')

// // console.log(map)
// for(const [key, value] of map){
//     console.log(key, ':-', value)
// }


// const myObj = {
//     js: "JavaScript",
//     cpp: "c++",
//     java: "java"
// }
// for (const key in myObj) {
//     console.log(`${key} is shortcut for: ${myObj[key]}`)
// }


// const myArr = ["ni", "ti", "n"]
// for (const key in myArr) {
//     console.log(myArr[key])
// }



// const myArr = [1,2,3,4,5,6]

// myArr.forEach(function(item) {
//     console.log(item)
// })

// myArr.forEach( (item) => {
//     console.log(item)
// })

// myArr.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })


// const myArr = [
//     {
//         langName: "JavaScript",
//         short: "js"
//     },
//     {
//         langName: "cpp",
//         short: "c++"
//     },
//     {
//         langName: "swift",
//         short: "swift"
//     }
// ]

// myArr.forEach( (item)=>{
//     console.log(item.short)
// })



// const myNums = [1,2,,3,4,5,6,7]
// const newNums = myNums.filter( (num) => num>4 )
// console.log(newNums)


// const myNums = [1,2,3,4,5,6,7]
// const newNums = []

// myNums.forEach( (num) => {
//     if (num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)



// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// //   const userBook = books.filter( (bk) => bk.genre === 'History')

//   const userBook = books.filter( (bk) => {
//     return bk.publish > 1900 && bk.genre === 'History'
// })
//   console.log(userBook)


// const myNum = [1,2,3,4,5,6,8]
// const item = myNum.map( (num) => num+10)
// console.log(item)


// const myNum = [1,2,3,,4,5,6]
// const newNums = myNum
//                     .map( (num) => num*10)
//                     .map( (num) => num+1)
//                     .filter( (num) => num>=40)

// console.log(newNums)



// const myNums = [1,2,3,4,5,6,7,8]

// const  myTotal = myNums.reduce(function(acc, cur_val){
//     console.log(`acc: ${acc}, cur_val: ${cur_val}`)
//     return acc + cur_val
// }, 0)

// const myTotal = myNums.reduce( (acc, cur_val) =>  acc+cur_val, 0)
// console.log(myTotal)




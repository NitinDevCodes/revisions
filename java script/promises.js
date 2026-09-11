const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log('promise is completed')
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed again')
        resolve()
    })
}).then(function(){
    console.log('asyns 2 is resolved')
})


const promiseThreee = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:"Nitin", email:"Nitin@gmail.com"})
    }, 1000)
})
promiseThreee.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({username: "Nitin2", pass:"12313"})
        }
        else{
            reject("Something is wrong")
        }
    }, 2000)
})
promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({username: "Nikhil", pass:"253"})
        }
        else{
            reject("Something nikhil wrong")
        }
    }, 2000)
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))





// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('Async taask')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed")
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Asyn task 2")
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// const promiseThree = new Promise(function(resolve, reject){
//      setInterval(function(){
//         resolve({username: "Nitin", email: "Nitin@gmail.com"})
//      }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new promiseOne(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
        
//     }, 2000)
// })
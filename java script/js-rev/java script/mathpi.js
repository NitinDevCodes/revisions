const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

const myObj = {
    name: "Nitin",
    Age: "23",
    salary: 100000,

    getJob: function(){
        console.log(`Job not available`)
    }
}
console.log(Object.getOwnPropertyDescriptor(myObj, "name"))

Object.defineProperty(myObj, 'name', {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(myObj, "name"))


for (let [key, value] of Object.entries(myObj)) {
    if(typeof value != 'function')
    console.log(`${key}: ${value}`)   
}
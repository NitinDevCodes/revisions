let s1 = document.getElementById("sq1")
s1.addEventListener("mouseenter", function(){
    let r = Math.floor(Math.random()*100)
    s1.innerHTML = `<h1>${r}</h1>`
})
s1.addEventListener("mouseleave", function(){
    s1.innerHTML = "<h1>1</h1>"
})

let s2 = document.getElementById("sq2")
let flag = 0;
s2.addEventListener("mouseenter", function(){
    if(flag == 0){
        s2.style.backgroundColor = "red"
        flag = 1
    }
    else{
        s2.style.backgroundColor = "green"
        flag = 0;
    }
})
s2.addEventListener("mouseleave", function(){
    s2.style.backgroundColor = "white"
})


let s3 = document.getElementById("sq3")
s3.addEventListener("mouseenter", function(){
    let a = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    let c = Math.floor(Math.random()*256)
    s3.style.backgroundColor = `rgb(${a},${b},${c})`
})
s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor = "white"
})


let s4 = document.getElementById("sq4")
s4.addEventListener("click", function(){
    let a = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    let c = Math.floor(Math.random()*256)
    s1.style.backgroundColor = `rgb(${a}, 200, 200)`
    s2.style.backgroundColor = `rgb(200, 200, ${c})`
    s3.style.backgroundColor = `rgb(200, ${b}, 200)`
})
s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor = "white"
    s2.style.backgroundColor = "white"
    s3.style.backgroundColor = "white"
})
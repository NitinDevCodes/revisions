let x = document.getElementById("one")
x.addEventListener("click", function(){
    x.style.color = "yellow"
    x.style.backgroundColor = "red"
})


let y = document.getElementById("two")
y.addEventListener("mouseenter", function(){
    y.style.color = "white"
    y.style.backgroundColor = "orange"
})
y.addEventListener("mouseleave", function(){
    y.style.color = "black"
    y.style.backgroundColor = "white"
})



let z = document.getElementById("three")
y.addEventListener("click", function(){
    z.style.color = "black"
    z.style.backgroundColor = "purple"
})
z.addEventListener("click", function(){
    x.innerHTML = "black"
    x.style.color = "black"
    y.innerHTML = "purple"
    y.style.color = "purple"
})
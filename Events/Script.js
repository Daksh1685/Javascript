let button = document.getElementById("btn")
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML= "I am not a box"
})
//todo

button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by right click Please")
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode)
})
console.log("Mohit")
// let boxes = document.getElementsByClassName("box")
// here in document.getElementsByClassName it is Elements but in id it is only element
// console.log(boxes)

// boxes[2].style.backgroundColor = "steelblue"
// document.getElementById("red").style.backgroundColor = "steelblue"

// document.querySelector(".box").style.backgroundColor = "pink"
// This selects the first box only


// console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "tan"
})


// e = document.getElementsByTagName("div")
// e[4].matches("#redbox")

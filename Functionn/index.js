function nice(name) {
    console.log("Hey " + name + " you are bad")
    console.log("Hey " + name + " you are good")
    console.log("Hey " + name + " your bottle is nice!")
    console.log("Hey " + name + " your tshirt is nice!")
}

function sum(a,b,c=5) {
    // console.log(a+b)
    return a+b+c
}


result1 = sum(3,9) //Nan stands for not a number
result2 = sum(96,9)
result3 = sum(58,9,7)
console.log("The sum of these numbers is: ",result1)
console.log("The sum of these numbers is: ",result2)
console.log("The sum of these numbers is: ",result3)
// nice("Mohit")
// nice("Daksh")


const func1 = (x)=>{
    console.log("I am an arrow function",x)
}

func1(56);
func1(75);
func1(92);
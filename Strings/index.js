console.log("This is strings tutorial")
let a = "Daksh";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]); //Undefined

console.log(a.length)

let real_name = "Daksh"
let friend = "Mohit"
console.log("His name is " + real_name + " and his friend's name is " + friend)
console.log(`His name is ${real_name} and his friend's name is ${friend}`) //Template Literals
// with this ``(backtick) we can use both single quote and double quote at the same time

// Escape sequence characters (\n,\t,\r) infact we also use this '\' in double quotes
let name = "Da\"ksh"
let name1 = "Da\nksh"
console.log(name)
console.log(name1)


let b = "Mohit"
console.log(b.toUpperCase())
let c = "ARsaLAaN"
console.log(c.toLowerCase())
console.log(c.length)
console.log(c.slice(1,4))
console.log(c.slice(1))
console.log(c.replace("AR","89"))
console.log(c.concat(a,"Mohit","Adi"))
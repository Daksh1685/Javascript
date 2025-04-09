// Array are variable which can store multiple values 
let arr = [1,45,89,566,45]
arr[0] = 56
console.log(arr, typeof arr);
console.log(arr.length);
// strings are immutable but arrays are mutuable
console.log(arr[3]);
console.log(arr.toString())
console.log(arr.join(" and "))

a = [1,2,3,6,5]
a.pop()
a.shift()
a.unshift("Mohit")
a.push("Daksh")
delete a[3]
console.log(a)
console.log(a.length)

let a1 = [1,3,2,6,5,1]
let a2 = [789,6,92,36,52,13]
let a3 = [12,35,27,69,574,18]
a = a1.concat(a2,a3)
b = a1.sort()
c = a1.splice(1,4)
c = a1.splice(1,4,56,78)
d = a1.slice(2,5)
console.log(a)
console.log(b)
console.log(d)

// Loops
let a = [1,2,32,4,6,5]
for (let index = 0; index < a.length; index++){
    const element = a[index];
    console.log(element)
}

a.forEach((value,index,arr)=>{
    console.log(value, index,arr)
})

// FOR IN LOOP
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)){
        const element = obj[key];
        console.log(key,element)
    }
}

// FOR OF LOOP
for (const element of a) {
    console.log(element)
}

// MAP
let arr = [2,16,8,5,6]
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
    
// }
// instead of this we can use MAP

let newarr = arr.map((element,index,array)=>{
    return element**2
})
console.log(newarr)
const greaterThanSeven = (element)=>{
    if(element > 5){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

// reduce array 

let arr2 = [1,6,3,1,6,5]
const red = (a,b)=>{
    return a+b 
}
console.log(arr2.reduce(red))

a = Array.from("Daksh")
console.log(a)
console.log("I am a loop")

let a = 1;
// console.log(a)
// console.log(a + 1)
// console.log(a + 2)
// console.log(a + 3)

for(let i = 0; i<100; i++){
    console.log(a + i)
}

let obj = {
    name : "Daksh",
    role : "Programmer",
    company : "Chaurasia Brothers"
}
for(const key in obj){
    console.log(key)
}

for(const c of "Daksh"){
    console.log(c)
}
// let i = 0;
// while(i<62000){
//     console.log(i)
//     i++;
// }

let i = 10;
do{
    console.log(i)
    i++;
} while (i<6);
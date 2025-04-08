// Promises
// async function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// settle means resolve or reject 
// resolve means promise has settled successfully
// reject means promise has not settled successfully
async function getdata(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
}


async function main(){
    
    console.log("Loading modules")
    
    console.log("Do Something else")
    
    console.log("Load data")
    let data = await getdata()
    console.log(data)
    console.log("process data")
    console.log("task 2")
}

main()


// data.then((v)=>{
//     console.log(v)
//     console.log(data)
    
//     console.log("process data")
    
//     console.log("task 2")
// })
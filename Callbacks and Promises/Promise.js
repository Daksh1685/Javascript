console.log("This is Promise")

let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting You")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Daksh")
        }, 3000); 
    }
})

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

let prom2 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting You 23")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done 23")
            resolve("Daksh 23")
        }, 1000); 
    }
})

let p3 = Promise.allSettled([prom1,prom2])  //promise.racr , promise.any, promise.resolve
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

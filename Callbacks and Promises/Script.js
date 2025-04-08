// Asynchronous 
console.log("Daksh is a hacker")
console.log("Mohit is a hecker")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 2000);


setTimeout(() => {
    console.log("I am inside another settimeout")
}, 0);

console.log("The End")

const fn = () => {
    console.log("Nothing")
}


// Callback
const callback = (arg,fn) => {
    console.log(arg)
    fn()
}

const loadscript = (src,callback) =>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Daksh", fn);
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
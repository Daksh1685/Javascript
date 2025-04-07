// let obj = {
//     a: 1,
//     b: "Daksh"
// }
// console.log(obj)

// let animal = {
//     eats: true
// }
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;


// class  Animal {
//     constructor(name){
//         this.name = name
//         console.log("Object is created...")
//     }
//     eats(){
//         console.log("Khaa raha hoon")
//     }
//     jumps(){
//         console.log("kood raha hoon")
//     }
// }


// class lion extends Animal{
//     constructor(name){
//         super(name)
//     }
    
//     eats(){
        
//         console.log("Khaa raha hoon kutte")
//         super.eats()
//     }
//     roar(){
//         console.log("Dahad raha hoon")
//     }
// }
// let a = new Animal("Monkey");
// console.log(a)
// let l = new lion ("Shera");
// console.log(l)



// getter and setter
class user{
    constructor(name){
        this.name = name; 
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length < 4){
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}
let User = new user("Daksh");
console.log(User.name);
user = new user("");
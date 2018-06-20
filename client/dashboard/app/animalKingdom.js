class Animal {
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
    hello() {
        console.log(`Hi! I am ${this.name} from the jungle!`);
    }
}

let King = new Animal("Mufasa", 4.5);
King.hello();

// class Lion extends Animal{
//     constructor(parent){
//         this.parent = parent;
//     }
//     parentIs(){
//         console.log("I am the firstborn of the great ${this.parent} ");
//     }
// }

// let son = new Lion("Simba", 1, "Mufasa");
// son.hello();
// son.parentIs();

export default Animal;

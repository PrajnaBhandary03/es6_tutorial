
console.log("Hello from the other side");
console.log("Is this thing on?");
console.log("Let's check it out!");

import Animal from './animalKingdom';

class Lion extends Animal{
    // constructor(name, height,){
    //     super(name, height);
    // }
    parentIs(){
        console.log(`I am the firstborn of the great Mufasa `);
    }
}

let son = new Lion("Simba", 1);
son.hello();
son.parentIs();

let set_a = new Set();

//let set_a = {};
set_a.name = 'Priya';
set_a.age = 18;
set_a.education = {};

console.log(`This is the obj:`);
console.log(set_a);
set_a.education.degree = "Bachelor's";
set_a.education.school = "UB";
set_a.education.field = "Computer SCience"; 
set_a.education.year = '1998';
console.log(set_a.education.hasOwnProperty('year'));

console.log("catterpillar".startsWith('cat'));
console.log("catterpillar".endsWith('pillar'));
console.log("catterpillar".includes('pill'));
console.log("catterpillar".includes('scatter'));








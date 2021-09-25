// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters


// 1. Primitives

let age: number =24;
age = 12;

let username: string;
username = 'Max';

let isInstructor: boolean;
isInstructor = true;



// 2. More Complex Types

let hobbies: string[];
hobbies = ['sports', 'cooking'];

let person;               // default type is "any"
 person = {
     name: 'Max',
     age: 32
 };



type Person =  {         // type defination 
    name: string;
    age: number;
};  

let personObj: Person    // typescript object (Using alias - 'Person')
    
personObj = {
    name: 'Max',
    age: 32
};
// personObj = {          // can't do this
//     isEmployee: true
// };


let people: Person[];     // array of object




// 3. Type inference

// assign type of value to variable
let course = 'React - The complete Guide';
//course = 123;          // So this is invalid



// 4. Union type 

let courseInfo: string | number = 'React - The complete Guide';
courseInfo = 123;       // allowed here because of UNION type



// 5. Functions and Types

function add(a: number, b:number): number {     // return type number
    return a + b;
}

function print(value: any) {                    // return type void
    console.log(value);
}





// 6. Generics
// Provides flexibility and type safety
function insertAtBeginning<T>(array: T[], value:T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1)   // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b','c'], 'd');


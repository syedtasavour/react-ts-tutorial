import React from 'react';
import logo from './logo.svg';
import './App.css';

let name:String; // uses 'String' (capital S) — not recommended
name = "I am TS"; // ✅ correct assignment

let role:[
  number,
  string
]
role = [3,"wnsdjk"]

type Person = {
  name: string;
  age: number;
  isEmployed: boolean;
  
};

let any: any; // 'any' type can hold any value
let unknown: unknown; // 'unknown' type is safer than 'any', must be checked before use
let age: number | string; // age can be a number or a string
age = 25; // ✅ correct assignment
age = "twenty-five"; // ✅ correct assignment

let person: Person = {
  name: "John Doe",
  age: 30,
  isEmployed: true
};

let lotOfPeople: Person[] = [
  { name: "Alice", age: 25, isEmployed: true },
  { name: "Bob", age: 28, isEmployed: false },
  { name: "Charlie", age: 35, isEmployed: true }
];
let add: Function;

add = function(a: number, b: number): number {
  return a + b;
};

let neverReturn: () => never;
neverReturn = function(): never {
  throw new Error("This function never returns");
};


let functionWithOptionalParam: (a: number, b?: number) => number;

functionWithOptionalParam = function(a: number, b?: number): number {
  return b ? a + b : a;
}; // End of functionWithOptionalParam


console.log(add(5, 10)); // ✅ correct usage of the add function
// console.log(add(5, "10")); // ❌ incorrect usage, TypeScript will throw

type X = {
  a:string;
  b:number;
  c?:boolean; // optional property
}

type Y = X & {
  c:string;
  d:number;
}

interface PersonInterface {
  location: string;
  name: string;
  skills: string[];
}

interface Guy extends PersonInterface {
 profession: string;
 age: number;
 isEmployed: boolean;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> {JSON.stringify(person)} and save to reload.

        </p>
        <p>
          {lotOfPeople.map((person, index) => (
            <span key={index}>
              {person.name} is {person.age} years old and is {person.isEmployed ? 'employed' : 'not employed'}.<br></br>
            </span>
          ))}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

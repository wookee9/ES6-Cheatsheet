//--------------------------------------------
//               #ES6 Cheatsheet
//--------------------------------------------


// ----------------- Modules -----------------

// module.js

const myObject = {
  foo: 3,
  bar: 6
}

export default = myObject;

// In index.js

import myModule from "myModule";

console.log(myModule.foo) // 3

// or destructure it...

import { foo, bar } from "myModule";

console.log(foo, bar); // 3 6



// ----------------- ES6 CLASSES -----------------

import C from './testeModule1.js';
import { add, multiply, divide } from './testeModule2.js';
import { text } from './testeModule3.js'

// Calculator
const calc1 = new C();
console.log(calc1.add(2, 5));

// Arrow functions
console.log(add(76, 4));
console.log(multiply(55, 32));
console.log(divide(90, 5));

// Caching
console.log(text);
console.log(text);
console.log(text);

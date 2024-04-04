import {capitalizeWords} from "./esutils.js";
import  {makeMoney } from "./esutils.js";
import PersonES from "./PersonES.js";

console.log(capitalizeWords("hello world"))
console.log(makeMoney(1500));

const person1 = new PersonES("Busra", 23)
person1.greet()
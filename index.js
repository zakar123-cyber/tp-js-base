
//ex1
console.log("ex1");
var x = 5
let y = 10
const z = 15

x=22
y=33
z=0 //erreur z ne peut pas être réaffectée il est constant

//ex2
console.log("ex2");
function testScope() {
if (true) {
var a = "var visible partout";
let b = "let visible ici seulement";
}
console.log(a);
console.log(b); // Pourquoi erreur ? Parce que b est déclaré avec let et n'est pas accessible en dehors du bloc if
}
testScope();
//ex3
console.log("ex3");
function sayHello(name) {
return `Bonjour ${name}`;
}
const sayHelloArrow = (name) => `Bonjour ${name}`;

console.log(sayHello("Alice"));// peut appeler la fonction normalement avant et après sa déclaration
console.log(sayHelloArrow("Bob"));// ne peut pas appeler la fonction avant sa déclaration car c'est une expression de fonction assignée à une constante

//ex4
console.log("ex4");
const person = {
name: "Sara",
sayHello: function () {
console.log("Bonjour" + this.name);
},
sayHelloArrow: () => {
console.log("Bonjour" + this.name);
},
};
person.sayHello();
person.sayHelloArrow();
//ex4
console.log("ex4");

import message, { PI, carre } from "./mathUtils.js";
message(); // Module mathUtils chargé !
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));
//ex5
console.log("ex5");
const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);
//ex6
console.log("ex6");
const nums = [1, 2, 3, 4, 5];
// Multiplie chaque nombre par 2
console.log(nums.map(n => n * 2));
// Garde seulement les nombres pairs
console.log(nums.filter(n => n % 2 === 0));
// Calcule la somme totale
console.log(nums.reduce((sum, n) => sum + n, 0));
//ex7
console.log("ex7");
console.log(nums.find(n => n > 3));
console.log(nums.some(n => n < 0));
console.log(nums.every(n => n > 0));
//ex8
console.log("ex8");
const user = { id: 1, name:"Ali", city: "Rabat" };
// Déstructuration
const { name, city } = user;
console.log(`${name} habite à ${city}`);
// Renommage
const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);
//ex9
console.log("ex9");
const p = new Promise((resolve) => {
setTimeout(() => resolve("Opération terminée !"), 2000);
});
p.then(result => console.log(result));
//ex10
console.log("ex10");
async function getUsers() {
try {
const res = await
fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();
console.log(data);
} catch (e) {
console.error("Erreur :", e.message);
}
}
getUsers();
//ex11
console.log("ex11");
const name1 = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${name}, il est ${hour}h`);
//ex12
console.log("ex12");
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);
function sum(...numbers) {
return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));
//ex13
console.log("ex13");
const settings = { theme: null };
console.log(settings.theme ?? "light"); // light
const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email); // x@y.com
console.log(user2.address?.city); // undefined
//gestion des produits
console.log("gestion des produits");
const produits = [
{ nom: "Lait", prix: 10, expireLe: "2025-12-01" },
{ nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
{ nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];
const aujourdHui = new Date();
const valides = produits.filter(p => new Date(p.expireLe) >
aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);
console.log("Produits valides :", valides);
console.log("Total :", total, "DH");
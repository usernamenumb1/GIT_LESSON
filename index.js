// const regions = {
//   kz: "Repablic of Kazakhstan",
//   us: "USA",
//   ru: "R",
// };

// //
// const user = { name: "Vasya", married: true, age: 25, wrongProp: "wrong" };

// const rectangle = { width: 10, height: 5 };
// ///////
// // для того, чтобы создать из объекта массив, необходимо чтобы у него было свойство length
// const array = {
//   0: 0,
//   1: 1,
//   length: 2,
// };

// Array.from(array).forEach((item) => console.log(item));
// /////////
// // разные способы обратиться к свойству объекта
// console.log(user.name);
// console.log(user["married"]);
// const userName = "name";
// console.log(array["0"]);
// // определение новых свойств
// console.log(user);
// user.married = false;
// user.surname = "PETROV";
// // удаление свойства
// delete user.wrongProp;
// console.log(user);

// const chageObj = function (obj) {
//   obj.k = 1;
//   console.log(obj === obj1);
// };

// const obj1 = {};
// chageObj(obj1);
// console.log(obj1);

// const b = { a: 1 };
// let c = 2;

// const foo = function (b, i) {
//   b.a = 10;
//   i = 20;
// };
// foo(b, c);
// console.log(b.a); // 10
// console.log(c); // 2

// //возможность создавать объекты в функциях
// const createObj = function (a, b) {
//   return { a, b };
// };

// console.log(createObj(3, 4));

// const bag = [
//   "apple",
//   "banana",
//   "pear",
//   "apricot",
//   "apple",
//   "banana",
//   "apple",
//   "orange",
//   "pear",
// ];

// //оператор нулевого слияния позволяет задать значение по умолчанию в случае, когда оно равно null или undefined.

// let value; // undefined
// console.log(value || "wow"); // wow
// value = null;
// console.log(value || "wow"); // wow
// value = 0;
// console.log(value || "wow"); // true

// //разные варианты проверки на существование свойства
// // пишем функцию которая считает колличество повторений в массиве
// const count = (fruits) => {
//   const result = {};
//   for (const fruit of fruits) {
//     // if (result[fruit] === undefined) {
//     // if (!Object.hasOwn(result, fruit)) {
//     // if (!result.hasOwnProperty(fruit)) {
//     //   result[fruit] = 1;
//     // } else {
//     //   result[fruit] += 1;
//     // }
//     // result[fruit] = (result[fruit] ?? 0) + 1;
//     result[fruit] = (result[fruit] ? result[fruit] : 0) + 1;
//   }
//   return result;
// };

// const resCount = count(bag);
// console.log(resCount);

const result = {
  apple: 3,
  banana: 2,
  pear: 2,
  orange: 1,
  apricot: 1,
};
// //Варианты обхода объектов в цикле

// for (const item in result) {
//   console.log(`${item} : ${result[item]}`);
// }
// Object.keys(result); // возвращает массив ключей
// Object.values(result); // возвращает массив значений
// Object.entries(result); // возвращает массив пар ключ - значение

// // деструктуризация  в массивах
// const arr = [1, 4, 5, 6, 7];
// const [first, second] = arr;
// console.log(first, second);

// //Пример использования

// const arrayFromObj = Object.entries(result);
// console.log(arrayFromObj);
// for (const property of arrayFromObj) {
//   console.log(property.toString());
// }
// for (const [key, value] of arrayFromObj) {
//   console.log(key, value);
// }

// const user = { name: "Vasya", married: true, age: 25 };

function createUser(name, married, age) {
  return {
    name: name,
    married: married,
    age: age,
  };
}

const newUser = createUser("Alisher", true, 27);
const newUser1 = createUser("Kolia", true, 27);
const newUser2 = createUser("Azamat", false, 23);
newUser.friends = ["Vasya", "Kolia"];
newUser1.children = [
  { name: "Alex", age: 3 },
  { name: "Olya", age: 1 },
];
// console.log(newUser);
// console.log(newUser1);
// console.log(newUser2);

const user = {
  name: "Vasya",
  married: true,
  age: 25,
  friends: ["Kolya", "Petya"],
  children: [
    { name: "Mila", age: 1 }, // 0
    { name: "Petr", age: 10 }, // 1
  ],
  company: {
    name: "Aston",
  },
};
// console.log(user);
user.company.name = "JustCode";
user.friends[1] = "Alisher";
user.children[0].age = 2;
// console.log(
//   user.children.concat([
//     { name: "Alex", age: 3 },
//     { name: "Olya", age: 1 },
//   ])
// );
// const obj = { a: { b: { c: { key: "value" }, e: [1, 2], foo: () => {} } } };
// console.log(JSON.stringify(obj));
if (user.hasOwnProperty(user.company)) {
  if (user.hasOwnProperty(user.company.name)) {
  }
}
console.log(user?.company?.name ?? "defaultvalue");
// console.log(user);

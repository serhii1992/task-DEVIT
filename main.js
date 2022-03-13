

//<---------------------№1--------------------->
// const deepEqual = (obj1, obj2) => {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// };

// console.log(deepEqual({ name: "tet" }, { name: "test" }));
//<---------------------№2--------------------->
// function* chunkArray (arr, len){
//   for(let i = 0; i <= Math.ceil(arr.length/len+1); i++){
//     yield arr.splice(0, len)
//   }
// }

// const iterator = chunkArray([1,2,3,4,5,6,7,8] ,3);

// console.log(iterator.next()) // { value: [1,2,3], done: false }
// console.log(iterator.next()) // { value: [4,5,6], done: false }
// console.log(iterator.next()) // { value: [7,8], done: false }
// console.log(iterator.next()) // { value: undefined, done: true }

//<---------------------№3--------------------->

// const f1 = (cb) => {cb(1)};
// const f2 = (a, cb) => {cb(a)};
// const f3 = (a, b, cb) => {setTimeout(() => {cb([a, b])}, 1000)};

// const bulkRun = (arr) => {
//   const result = [];
//   const cl = (arg) => {
//     result.push(arg);
//   };

//   arr.forEach((element) => {
//     const [fn, arguments] = element;
//     fn(...arguments, cl);
//   });

//   return new Promise((resolve) => {
//     resolve(result);
//   });
// };

// bulkRun([
//   [f1, []],
//   [f2, [2]],
//   [f3, [3, 4]],
// ]).then(console.log);

//<---------------------№4--------------------->

// const arr = [
//   [5, 3, 6],
//   [7, 11, 2],
//   [15, 9, 4],
// ];

// const multiplyArr = (arr) => {
//   const [minNumInArr] = arr
//     .reduce((acc, element) => {
//       return [...acc, ...element];
//     }, [])
//     .sort((a, b) => a - b);

//   return arr.map((element) => {
//     const result = [];
//     for (let el of element) {
//       if (el % 2 !== 0) {
//         result.push(el * minNumInArr);
//       } else {
//         result.push(el);
//       }
//     }
//     return result;
//   });
// };
// console.log(multiplyArr(arr));

//<---------------------№5--------------------->

// const arr = [
//   ["name", "developer"],
//   ["age", 5],
//   [
//     "skills",
//     [
//       ["html", 4],
//       ["css", 5],
//       ["js", 5],
//     ],
//   ],
// ];

// const arrToObject = (arr) => {
//   const result = {}
//   for (let el of arr) {
//     const [key, value] = el
//     if(!Array.isArray(value)){
//       result[key] = value
//     } else{
//      result[key] = arrToObjekt(value)
//     }
//   }
//   return result
// };
// console.log(arrToObject(arr));

//<---------------------№6--------------------->
//<---------------------№7--------------------->
// const objectToArray = (obj)=> {
//   const result = []
//   for (key in obj) {
//     if(typeof obj[key] !== 'object'){
//       result.push([key, obj[key]])
//     } else{
//       result.push([key, objectToArray(obj[key])])
//     }
//   }
//   return result
// }

// console.log( objectToArray({
//   name: 'developer',
//   age: 5,
//   skills: {
//     html: 4,
//     css: 5,
//     js: 5
//   }
// }))

// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]

//<---------------------№8--------------------->
//<---------------------№9--------------------->

// String.prototype.removeDuplicate = removeDuplicate;

// let x =
//   "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";

// function removeDuplicate() {

//   const result = this.split(" ").reduce((acc, el) => {
//     if (!acc.includes(el)) {
//       return (acc = acc + ' ' + el);
//     }
//     return acc;
//   }, "");

//   return result;
// }

// console.log(x.removeDuplicate());

// Int32 Double
//<---------------------№10--------------------->

// function NotificationException() {
//   return {
//     name: "NotificationException",
//     massage: "try to again",
//   };}

// function ErrorException() {
//   return {
//     name: "ErrorException",
//     massage: "stop multiply",
//   };}
// function primitiveMultiply(a, b) {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     return a * b;
//   } else if (rand > 0.85) {
//     throw new ErrorException();
//   } else {
//     debugger;
//     throw new NotificationException();
//   }
// }

// function reliableMultiply(a, b) {
//   try {
//     return primitiveMultiply(a, b);
//   } catch (err) {
//     if (err.massage === "try to again") {
//       return reliableMultiply(a, b);
//     } else {
//       console.log("stop multiply");
//     }
//   }
// }

// console.log(reliableMultiply(8, 8));

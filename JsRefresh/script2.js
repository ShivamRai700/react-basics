// map

const arr = [2, 3, 4, 5, 8];

//variation 1
// function makeBin(i){
//   return i.toString(2);
// }

// const output = arr.map(makeBin);
// console.log(output);

//variation 2

// const output = arr.map(function makeBin(i){
//   return i.toString(2);
// }
// )

// console.log(output)

// filter

// function isOdd(x){
//   return x%2;
// }

// function isEven(x){
//   return x%2 === 0;
// }

// const output = arr.filter(isEven);
// console.log(output)

// Tricky Map

const users = [
  { firstName: "Shivam", lastName: "Rai", age: 22 },
  { firstName: "Akshay", lastName: "Saini", age: 27 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Fat", lastName: "Boy", age: 70 },
  { firstName: "Small", lastName: "Man", age: 70 }
]

// list of full names of all users
// ["Akshay Saini","Elon Musk"]

// const output = users.map(function(arr){
//   let fullname = arr.firstName +" "+ arr.lastName;
//   return fullname
// })

// console.log(output)

/* How many people are of a particular unique age ? 
for ex: {26: 2, 75: 1, 50: 1}
*/

// why reduce ? because we have to give one object not a list or array 
// const output = users.reduce(function(acc,curr){
//   if (!acc[curr.age]){
//     acc[curr.age] = 1;
//   }else{
//     ++acc[curr.age];
//   }

//   return acc;

// }, {})
// console.log(output)

// Q. first name of all the users whose age is less than 30 


const output = users.filter((user) => user.age < 30).map((user) => user.firstName)


console.log(output)
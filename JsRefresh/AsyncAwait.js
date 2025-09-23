// What is Async ? Async is a keyword that is put before a function to make it an async function
/*
const p = new Promise((resolve,reject)=>{
  resolve("Promise Resolved Value !!!");
})

async function getData(){
  // return "Namaste";
  return p;
}

const dataPromise = getData();

dataPromise
  .then( function (data) {
    console.log(data)
  });

*/

const p = new Promise((resolve, reject)=>{
  resolve("Promise Resolved Value !!");
})

// // before async await , promises were handled like this (below)
// function getData() {
//   p.then((res)=> console.log(res));
// }

// getData();

// now we do this :

async function handlePromise(){
  const val = await p;
  console.log(val);
}

handlePromise();
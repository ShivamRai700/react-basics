const p1 = new Promise((resolve,reject) => {
  // setTimeout(()=> resolve("P1 success"), 3000)
  setTimeout(()=> reject("P1 Fail"), 3000)
});
const p2 = new Promise((resolve,reject) => {
  setTimeout(()=> reject("P2 Fail"), 5000)
});
const p3 = new Promise((resolve,reject) => {
  // setTimeout(()=> resolve("P3 success"), 2000)
  setTimeout(()=> reject("P3 Fail"), 2000)
});

/* PROMISE: ALL */
// Promise.all([p1,p2,p3])
//   .then((res)=>{
//      console.log(res);
//     })
//   .catch((err)=>{
//     console.error(err);
//   })

/* PROMISE : ALL SETTLED */

// Promise.allSettled([p1,p2,p3])
//   .then((res)=>{
//      console.log(res);
//     })
//   .catch((err)=>{
//     console.error(err);
//   })

/* PROMISE : RACE() */

// Promise.race([p1,p2,p3])
//   .then((res)=>{
//      console.log(res);
//     })
//   .catch((err)=>{
//     console.error(err);
//   })

/*PROMISE ANY */
Promise.any([p1,p2,p3])
  .then((res)=>{
     console.log(res);
    })
  .catch((err)=>{
    console.error(err);
    console.log(err.errors);
  })
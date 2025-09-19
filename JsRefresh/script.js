// Closure
// function b(){
//   let a = 4;
//   return ()=>{
//     console.log(a);
//     ++a;
//   }
// }
// let c = b();
// c();
// c();
// c();
// let d = b();
// d();
// d();

// One should not block the main thread, but here's one example of it.
// console.log("Start");
// setTimeout(() => {
//   console.log("callback")
// }, 5000);

// console.log("end")

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000){
//   endDate = new Date().getTime();
// }
// console.log("while expires")

// Microtask queue and callback queue
// console.log("start")

// setTimeout(() => {
//   console.log("CB setTimeout");
// }, 5000);

// fetch("http://api.github.com")
// .then(function cbF(){
//   console.log("CB gitHub")
// })

// console.log("end");

/*
Nice one 👍 This is a classic **event loop** + **Web APIs** + **callback queue** flow check. Let’s dry-run it step by step:

---

### Code:

```js
console.log("start")

setTimeout(() => {
  console.log("CB setTimeout");
}, 5000);

fetch("http://api.github.com")
.then(function cbF(){
  console.log("CB gitHub")
})

console.log("end");
```

---

### 🔹 Step-by-step execution

1. **`console.log("start")`**
   → Immediately runs.
   ✅ Output:

   ```
   start
   ```

2. **`setTimeout(..., 5000)`**
   → Browser registers the callback in the **Web API environment**.
   → After \~5000ms, the callback will be queued in the **task (macro) queue**.
   → Nothing logged yet.

3. **`fetch("http://api.github.com")`**
   → Starts async network request.
   → When response arrives, `.then(cbF)` is scheduled in the **microtask queue**.
   → Nothing logged yet.

4. **`console.log("end")`**
   → Immediately runs.
   ✅ Output so far:

   ```
   start
   end
   ```

---

### 🔹 After main thread finishes

Now the **event loop** kicks in.

* **Microtasks (Promises) run before macrotasks (setTimeout)**.
* So when the fetch resolves (usually faster than 5s), the `.then(cbF)` runs **before** the setTimeout callback.

✅ Next Output:

```
CB gitHub
```

* Finally, after \~5000ms, the setTimeout callback runs.

✅ Final Output:

```
CB setTimeout
```

---

### 🔹 Final execution order:

```
start
end
CB gitHub
CB setTimeout
```

---

⚡ So the key rule: **Synchronous → Microtasks → Macrotasks**.

*/

/*----------------------Higher Order Functions--------------------- */

const radius = [3,4.5,6,7];

/*
const calculateArea = function (radius) {
   const output = [];
   for ( let i = 0; i < radius.length; i++){
      output.push(Math.trunc(Math.PI * radius[i] * radius[i]));
   }
   return output;
}

// console.log(calculateArea(radius));

const calcCircumference = function (radius) {
   const output = [];
   for ( let i = 0; i < radius.length; i++){
      output.push(Math.trunc(2 * Math.PI * radius[i] ));
   }
   return output;
}

// console.log(calcCircumference(radius))

const calculateDiameter = function (radius) {
   const output = [];
   for ( let i = 0; i < radius.length; i++){
      output.push(2 * radius[i]);
   }
   return output;
}
*/

// console.log(calculateDiameter(radius))

// Instead of the above code , write reusable and modular code in interview or coding round using functional programming 

const area = function(radius){
   return Math.PI * radius * radius;
}

const circumference = function (radius) {
   return 2 * Math.PI * radius;
}

// const calculate = function(radius, logic){
//    const output = [];
//    for ( let i = 0; i<radius.length; i++){
//       output.push(logic(radius[i]));
//    }
//    return output;
// }

// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));

// map like function 

// Array.prototype.calculate = function(logic) {
//    const output = [];
//    for (let i = 0; i < this.length; i++){
//       output.push(logic(this[i]));
//    }
//    return output;
// }

// console.log(radius.map(area))
// console.log(radius.calculate(area))


//